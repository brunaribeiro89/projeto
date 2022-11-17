import Promotions from "../../resources/models/Promotions"

export const getAllPromotionsMongo = async () => {
  const collectionPromotions = await Promotions.find()
  return { collectionPromotions }
}

export const getPromotionByIdMongo = async (id: any) => {
  const promotionById = await Promotions.findById(id)
  return { promotionById }
}

export const createPromotionMongo = async (data: any) => {
  const { id_region } = data
  const promotionExists = await Promotions.findOne({ id_region })
  const createPromotion = await Promotions.create(data)

  return { createPromotion, promotionExists }
}

export const updatePromotionMongo = async (id: any, data: any) => {
  const promotionUpdate = await Promotions.findByIdAndUpdate(id, data)
  const promotionIdValidation = promotionUpdate?._id
  return { promotionUpdate, promotionIdValidation }
}
export const deletePromotionMongo = async (id: any) => {
  const promotionDelete = await Promotions.findByIdAndDelete(id)
  return { promotionDelete }
}
