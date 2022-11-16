import Promotions from "../../resources/models/Promotions"

export const getAllPromotionsMongo = async () => {
  const collectionPromotions = await Promotions.find()
  return collectionPromotions
}

export const getPromotionByIdMongo = async (id: any) => {
  const promotionById = await Promotions.findById(id)
  return promotionById
}

export const createPromotionMongo = async (data: any) => {
  const createPromotion = await Promotions.create(data)
  return createPromotion
}

export const updatePromotionMongo = async (id: any, data: any) => {
  const promotionUpdate = await Promotions.findByIdAndUpdate(id, data)
  return promotionUpdate
}
export const deletePromotionMongo = async (id: any) => {
  const promotionDelete = await Promotions.findOneAndDelete(id)
  return promotionDelete
}
