const mockUpdatePromotions = {
  name: "promotion",
  id_region: "puj98732",
  promotion_type: "COMBO",
  exclusive: true,
  start_date: "2022-11-01T13:27:11.977Z",
  end_date: "2022-11-01T13:27:11.977Z",
  enabled: true,
  accounts_ids: ["count1", "count2", "count3"],
  items: [
    {
      min_quantity: 100,
      discount_price_percent_product: 20,
      limit: 10,
      limit_type: "QUANTITY",
      skus: [
        {
          skus: "sku6",
          fifo_code: "fifo6",
          product_category: "category6",
          required: true,
        },
      ],
      free_goods: [
        {
          sku: "sfg4",
          quantity: 4,
        },
      ],
      ranges_discounts: [
        {
          from_min: 2,
          to_max: 6,
          discount_price_percent: 5,
        },
      ],
    },
  ],
}

export default mockUpdatePromotions
