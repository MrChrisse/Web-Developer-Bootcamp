const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('CONNECTION OPENED');
  })
  .catch((err) => {
    console.log('A Error:');
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number },
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'MTB', price: 599 });
bike
  .save()
  .then((data) => {
    console.log('IT WORKED');
    console.log(data);
  })
  .catch((err) => {
    console.log('An error:');
    console.log(err);
  });
