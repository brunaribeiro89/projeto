import {
  getAllPromotionsMongo,
  getPromotionByIdMongo,
  createPromotionMongo,
  updatePromotionMongo,
  deletePromotionMongo,
} from "../../../infrastructure/data_layer/data_acess_adapter"

export const listPromotions = async () => {
  const promotionList = await getAllPromotionsMongo()
  return promotionList
}

export const getPromotionById = async (id: any) => {
  const promotionById = await getPromotionByIdMongo(id)
  return promotionById
}

export const createPromotion = async (data: any) => {
  const promotionCreate = await createPromotionMongo(data)
  return promotionCreate
}

export const updatePromotion = async (id: any, data: any) => {
  const promotionUpdate = await updatePromotionMongo(id, data)
  return promotionUpdate
}
export const deletePromotion = async (id: any) => {
  const promotionDelete = await deletePromotionMongo(id)
  return promotionDelete
}
