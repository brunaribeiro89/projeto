import Promotions from "../../../resources/models/Promotions"
import {
  getAllPromotionsMongo,
  getPromotionByIdMongo,
} from "../../../infrastructure/data_layer/data_acess_adapter"

export const listPromotions = () => {
  const promotionList = getAllPromotionsMongo()
  return promotionList
}

export const getPromotionById = async (id: any) => {
  const promotionById = getPromotionByIdMongo(id)
  return promotionById
}

export const createPromotion = async () => {
  return await Promotions.create()
}

export const updatePromotion = async () => {
  return await Promotions.findByIdAndUpdate()
}
export const deletePromotion = async () => {
  return await Promotions.findOneAndDelete()
}
