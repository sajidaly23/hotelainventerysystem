import { Request, Response } from "express";
import * as InventoryService from "../services/inventryservices";

   //CATEGORY CONTROLLERS


export const addCategory = async (req: Request, res: Response) => {
  try {
    const category = await InventoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Failed to add category", error });
  }
};

export const listCategories = async (_: Request, res: Response) => {
  try {
    const categories = await InventoryService.getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories", error });
  }
};

export const editCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updatedCategory = await InventoryService.updateCategory("id", req.body);

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Failed to update category", error });
  }
};

 //SUPPLIER CONTROLLERS

export const addSupplier = async (req: Request, res: Response) => {
  try {
    const supplier = await InventoryService.createSupplier(req.body);
    res.status(201).json(supplier);
  } catch (error) {
    res.status(500).json({ message: "Failed to add supplier", error });
  }
};

export const listSuppliers = async (_: Request, res: Response) => {
  try {
    const suppliers = await InventoryService.getSuppliers();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch suppliers", error });
  }
};

//ITEM CONTROLLERS

export const addItem = async (req: Request, res: Response) => {
  try {
    const item = await InventoryService.createItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to add item", error });
  }
};

export const listItems = async (_: Request, res: Response) => {
  try {
    const items = await InventoryService.getItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items", error });
  }
};

 //STOCK CONTROLLERS
export const stockIn = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const { quantity } = req.body;

    await InventoryService.stockIn(id, quantity);
    res.json({ message: "Stock added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add stock", error });
  }
};

export const stockOut = async (req: Request, res: Response) => {
  try {
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const { quantity } = req.body;

    await InventoryService.stockOut(id, quantity);
    res.json({ message: "Stock removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove stock", error });
  }
};

export const listStock = async (_: Request, res: Response) => {
  try {
    const stock = await InventoryService.getStock();
    res.json(stock);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch stock", error });
  }
};

export const inventoryReport = async (req: Request, res: Response) => {
  try {
    const report = await InventoryService.getInventoryReport();
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: "Failed to generate inventory report", error });
  }
};
