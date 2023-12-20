const { Schema, model, models, default: mongoose } = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  photos: [{ type: String }],
  cat: { type: mongoose.Types.ObjectId, ref: 'Category' },
  propes: {type:Object},
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);