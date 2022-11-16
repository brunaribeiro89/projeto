import mongoose from "mongoose"

const Promotions = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id_region: {
      type: String,
      required: true,
      unique: true,
    },
    promotion_type: {
      type: String,
      required: true,
    },
    exclusive: {
      type: Boolean,
      required: true,
    },
    start_date: {
      type: Date,
      default: Date.now,
    },
    end_date: {
      type: Date,
      default: Date.now,
    },
    enable: {
      type: Boolean,
      required: true,
    },
    accounts_ids: [{ type: String }],
    items: {
      type: mongoose.Schema.Types.Array,
      ref: "Items",
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model("Promotions", Promotions)
