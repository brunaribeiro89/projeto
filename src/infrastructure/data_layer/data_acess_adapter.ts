import Promotions from "../../resources/models/Promotions"

export const getAllPromotionsMongo = async () => {
  const collectionPromotions = await Promotions.find()
  return collectionPromotions
}

export const getPromotionByIdMongo = async (id: any) => {
  const promotionById = await Promotions.findById(id)
  return promotionById
}

export const createPromotionMongo = async () => {
  const createPromotion = await Promotions.create()
  return createPromotion
}

export const updatePromotionMongo = async () => {
  const promotionUpdate = await Promotions.findByIdAndUpdate()
  return promotionUpdate
}
export const deletePromotionMongo = async () => {
  const promotionDelete = await Promotions.findOneAndDelete()
  return promotionDelete
}
