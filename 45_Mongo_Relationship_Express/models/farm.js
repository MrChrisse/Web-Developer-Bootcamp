const mongoose = require('mongoose');
const { Schema } = mongoose;
const Product = require('./product');

const farmSchema = new Schema({
  name: {
    type: 'string',
    required: [true, 'Farmname is required'],
  },
  city: {
    type: 'string',
  },
  email: {
    type: 'string',
    required: [true, 'Email is required'],
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

farmSchema.post('findOneAndDelete', async function (farm) {
  console.log(farm);
  if (farm.products.length) {
    const res = await Product.deleteMany({ _id: { $in: farm.products } });
    console.log(res);
  }
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
