import { Router } from "express";
import * as controller from "../controllers/inventrycontroller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/addcategories", authMiddleware, controller.addCategory);
router.get("/listcategories", controller.listCategories);
router.put("/updatecategories/:id", authMiddleware, controller.editCategory);

router.post("/addsuppliers", authMiddleware, controller.addSupplier);
router.get("/listsuppliers", controller.listSuppliers);

router.post("/additems", authMiddleware, controller.addItem);
router.get("/listitems", controller.listItems);

router.post("/addstock-in/:id", authMiddleware, controller.stockIn);
router.post("/addstock-out/:id", authMiddleware, controller.stockOut);
router.get("/liststock", controller.listStock);

router.get("/reports/inventory", authMiddleware, controller.inventoryReport);


export default router;