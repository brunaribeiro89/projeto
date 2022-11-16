import { Request, Response } from "express"
import Promotions from "../models/Promotions"
import { ListPromotions } from "../../domain/business_rules/service/ListPromotion"

const PromotionsController = {
  async index(req: Request, res: Response) {
    try {
      const promotions = await ListPromotions()
      if (promotions.length === 0) {
        return res.status(400).send({
          message: "There are no registered promotions",
        })
      }
      return res.status(200).json(promotions)
    } catch (error) {
      return res.status(400).json({ error: error, message: "Something is wrong try again" })
    }
  },

  async findById(req: Request, res: Response) {
    const { id } = req.params
    try {
      let promotions = await Promotions.findById(id)
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

    const promotionExists = await Promotions.findOne({ id_region })
    if (promotionExists) {
      return res.status(400).json({ message: "id_region already exists" })
    }

    await Promotions.create(req.body).then((data) => {
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

    const promotionIdExists = await Promotions.findById(id)
    if (promotionIdExists) {
      await Promotions.findByIdAndUpdate(id, {
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
      }).then((data) => {
        return res.status(200).json(data)
      })
    } else {
      return res
        .status(400)
        .json({ message: "Send an valid id in the parameters to search for the promotion" })
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const promotionIdExists = await Promotions.findById(id)
    if (promotionIdExists) {
      await Promotions.findByIdAndDelete(id).then((data) => {
        return res.status(200).json({ item: data, message: `${id} exluido com sucesso!` })
      })
    } else {
      return res.status(400).json({ message: "id doesn't exist" })
    }
  },
}

export default PromotionsController
