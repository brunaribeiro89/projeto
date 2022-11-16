import { getAllPromotionsMongo } from "../../../infrastructure/data_layer/data_acess_adapter"

export const ListPromotions = () => {
  const promotionList = getAllPromotionsMongo()
  return promotionList
}
