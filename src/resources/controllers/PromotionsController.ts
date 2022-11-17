import {
  getPromotionById,
  listPromotions,
  createPromotion,
  updatePromotion,
  deletePromotion,
} from "../../domain/business_rules/service/promotionsServices"
import { Request, Response } from "express"

const PromotionsController = {
  async getCollection(req: Request, res: Response) {
    try {
      const promotions = await listPromotions()
      return res.status(200).json(promotions)
    } catch (error) {
      return res.status(400).json({ error: error, message: "Something is wrong try again" })
    }
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params
    try {
      const promotions = await getPromotionById(id)
      return res.status(200).json(promotions)
    } catch (error) {
      return res.status(400).json({ message: "id is undefined" })
    }
  },

  async create(req: Request, res: Response) {
    const {
      name,
      id_region,
      promotion_type,
      exclusive,
      start_date,
      end_date,
      enable,
      accounts_ids,
      items: [
        {
          min_quantity,
          discount_price_percent_product,
          limit,
          limit_type,
          skus: [{ skus, fifo_code, product_category, required }],
          free_goods: [{ sku, quantity }],
          ranges_discounts: [{ from_min, to_max, discount_price_percent }],
        },
      ],
    } = req.body

    if (
      !name ||
      !id_region ||
      !promotion_type ||
      exclusive === undefined ||
      !start_date ||
      !end_date ||
      enable === undefined ||
      !accounts_ids ||
      !min_quantity ||
      !discount_price_percent_product ||
      !limit ||
      !limit_type ||
      !skus ||
      !fifo_code ||
      !product_category ||
      required === undefined ||
      !sku ||
      !quantity ||
      !from_min ||
      !to_max ||
      !discount_price_percent
    ) {
      return res.status(400).send({
        message: "Submit all fields for registration",
      })
    }

    await createPromotion(req.body).then((data: any) => {
      return res.status(200).json(data)
    })
  },

  async update(req: Request, res: Response) {
    const { id } = req.params
    const {
      name,
      id_region,
      promotion_type,
      exclusive,
      start_date,
      end_date,
      enable,
      accounts_ids,
      items: [
        {
          min_quantity,
          discount_price_percent_product,
          limit,
          limit_type,
          skus: [{ skus, fifo_code, product_category, required }],
          free_goods: [{ sku, quantity }],
          ranges_discounts: [{ from_min, to_max, discount_price_percent }],
        },
      ],
    } = req.body

    try {
      const promotionIdExists = await await getPromotionById(id)
      const data = await updatePromotion(promotionIdExists, {
        name,
        id_region,
        promotion_type,
        exclusive,
        start_date,
        end_date,
        enable,
        accounts_ids,
        min_quantity,
        discount_price_percent_product,
        limit,
        limit_type,
        skus,
        fifo_code,
        product_category,
        required,
        sku,
        quantity,
        from_min,
        to_max,
        discount_price_percent,
      })
      return res.status(200).json(data)
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Send an valid id in the parameters to search for the promotion" })
    }
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params

    try {
      const promotionIdExists = await getPromotionById(id)
      const data = await deletePromotion(promotionIdExists)
      return res.status(200).json({ item: data, message: `${id} exluido com sucesso!` })
    } catch (error) {
      return res.status(400).json({ message: "id doesn't exist" })
    }
  },
}
export default PromotionsController
