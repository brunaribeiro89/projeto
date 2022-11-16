import {
  getPromotionById,
  listPromotions,
} from "../../domain/business_rules/service/promotionsServices"
import { Request, Response } from "express"

const ListPromotionsController = {
  async getCollection(req: Request, res: Response) {
    try {
      const promotions = await listPromotions()
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

  async getById(req: Request, res: Response) {
    const { id } = req.params
    try {
      let promotions = await getPromotionById(id)
      return res.status(200).json(promotions)
    } catch (error) {
      return res.status(400).json({ message: "id is undefined" })
    }
  },
}
export default ListPromotionsController
