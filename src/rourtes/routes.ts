import { Router } from "express"
import ListPromotionsController from "../resources/controllers/PromotionsController"

const router = Router()

router.use((req, res, next) => {
  console.log(req.method, req.url, res.statusCode)
  next()
})

router.get("/", ListPromotionsController.getCollection)
router.get("/:id", ListPromotionsController.getById)
router.post("/", ListPromotionsController.create)
router.put("/:id", ListPromotionsController.update)
router.delete("/:id", ListPromotionsController.delete)
export default router
