import { Router } from "express";
import * as controller from "../controllers/inventrycontroller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/categories", authMiddleware, controller.addCategory);
router.get("/categories", controller.listCategories);
router.put("/categories/:id", authMiddleware, controller.editCategory);

router.post("/suppliers", authMiddleware, controller.addSupplier);
router.get("/suppliers", controller.listSuppliers);

router.post("/items", authMiddleware, controller.addItem);
router.get("/items", controller.listItems);

router.post("/stock-in/:id", authMiddleware, controller.stockIn);
router.post("/stock-out/:id", authMiddleware, controller.stockOut);
router.get("/stock", controller.listStock);

export default router;