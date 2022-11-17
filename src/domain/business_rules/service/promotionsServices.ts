import {
  getAllPromotionsMongo,
  getPromotionByIdMongo,
  createPromotionMongo,
  updatePromotionMongo,
  deletePromotionMongo,
} from "../../../infrastructure/data_layer/data_acess_adapter"

export const listPromotions = async () => {
  const { collectionPromotions } = await getAllPromotionsMongo()
  if (collectionPromotions.length === 0) {
    throw Error("There are no registered promotions")
  }
  return collectionPromotions
}

export const getPromotionById = async (id: any) => {
  const { promotionById } = await getPromotionByIdMongo(id)
  return promotionById
}

export const createPromotion = async (data: any) => {
  const { createPromotion, promotionExists } = await createPromotionMongo(data)
  if (promotionExists) {
    throw Error("There are no registered promotions")
  }
  return createPromotion
}

export const updatePromotion = async (id: any, data: any) => {
  const { promotionUpdate, promotionIdValidation } = await updatePromotionMongo(id, data)
  if (promotionIdValidation) {
    return promotionUpdate
  }
}
export const deletePromotion = async (id: any) => {
  const { promotionDelete } = await deletePromotionMongo(id)
  const promotionIdValid = promotionDelete?._id
  if (promotionIdValid) {
    return promotionDelete
  }
}
