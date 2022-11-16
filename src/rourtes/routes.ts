import { Router } from "express"
import ListPromotionsController from "../resources/controllers/PromotionsController"
import PromotionsController from "../resources/controllers/Promotions.Controller"

const router = Router()

router.use((req, res, next) => {
  console.log(req.method, req.url, res.statusCode)
  next()
})

router.get("/", ListPromotionsController.getCollection)
router.get("/:id", ListPromotionsController.getById)
router.post("/", PromotionsController.create)
router.put("/:id", PromotionsController.update)
router.delete("/:id", PromotionsController.delete)
export default router
