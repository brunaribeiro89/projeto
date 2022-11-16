import mongoose, { Schema } from "mongoose"

const skusSchema = new Schema({
  skus: { type: String, required: true },
  fifo_code: { type: String, required: true },
  product_category: { type: String, required: true },
  required: { type: Boolean, required: true },
})

const freeGoodsSchema = new Schema({
  sku: { type: String, required: true },
  quantity: { type: Number, required: true },
})

const rangesDiscountsSchema = new Schema({
  from_min: { type: Number, required: true },
  to_max: { type: Number, required: true },
  discount_price_percent: { type: Number, required: true },
})

const Items = new mongoose.Schema(
  {
    min_quantity: { type: Number, required: true },
    discount_price_percent_product: { type: Number, required: true },
    limit: { type: Number, required: true },
    limit_type: { type: String, required: true },
    skus: [skusSchema],
    free_goods: [freeGoodsSchema],
    ranges_discounts: [rangesDiscountsSchema],
  },
  { timestamps: true }
)

export default mongoose.model("Items", Items)
