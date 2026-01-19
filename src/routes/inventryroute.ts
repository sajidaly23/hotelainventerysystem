import { Router } from "express";
import * as controller from "../controllers/inventrycontroller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/addcategories", authMiddleware, controller.addCategory);
router.get("/getcategories", controller.listCategories);
router.put("/updatecategories/:id", authMiddleware, controller.editCategory);

router.post("/addsuppliers", authMiddleware, controller.addSupplier);
router.get("/getsuppliers", controller.listSuppliers);

router.post("/additems", authMiddleware, controller.addItem);
router.get("/getitems", controller.listItems);

router.post("/addstock-in/:id", authMiddleware, controller.stockIn);
router.post("/addstock-out/:id", authMiddleware, controller.stockOut);
router.get("/getstock", controller.listStock);

export default router;