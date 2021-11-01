const mongoose = require('mongoose');
const { Schema } = mongoose;

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

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
