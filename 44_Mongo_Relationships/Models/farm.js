const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose
  .connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!');
  })
  .catch((err) => {
    console.log('OH NO MONGO CONNECTION ERROR!!!!');
    console.log(err);
  });

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Fall', 'Winter'],
  },
});

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

const makeFarm = async () => {
  const farm = new Farm({ name: 'Full Belly Farms', city: 'San Francisco' });
  const melon = await Product.findOne({ name: 'Godness Melon' });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
};

// Product.insertMany([
//   { name: 'Godness Melon', price: 4.99, season: 'Summer' },
//   { name: 'Watermelon', price: 4.99, season: 'Summer' },
//   { name: 'Traube', price: 1, season: 'Fall' },
// ]);

const addProduct = async () => {
  const farm = await Farm.findOne({ name: 'Full Belly Farms' });
  const watermelon = await Product.findOne({ name: 'Watermelon' });
  farm.products.push(watermelon);
  await farm.save();
  console.log(farm);
};

Farm.findOne({ name: 'Full Belly Farms' })
  .populate('products')
  .then((farm) => console.log(farm));
