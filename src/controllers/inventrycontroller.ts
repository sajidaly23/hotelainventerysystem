import { Request, Response } from "express";
import * as InventoryService from "../services/inventryservices";



export const addCategory = async (req: Request, res: Response) => {
  try {
    const category = await InventoryService.createCategory(req.body);

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create category"
    });
  }
};

export const listCategories = async (_: Request, res: Response) => {
  try {
    const categories = await InventoryService.getCategories();

    return res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch categories"
    });
  }
};

export const editCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updated = await InventoryService.updateCategory("id", req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updated
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to update category"
    });
  }
};



export const addSupplier = async (req: Request, res: Response) => {
  try {
    const supplier = await InventoryService.createSupplier(req.body);

    return res.status(201).json({
      success: true,
      message: "Supplier added successfully",
      data: supplier
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to add supplier"
    });
  }
};

export const listSuppliers = async (_: Request, res: Response) => {
  try {
    const suppliers = await InventoryService.getSuppliers();

    return res.status(200).json({
      success: true,
      message: "Suppliers fetched successfully",
      data: suppliers
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch suppliers"
    });
  }
};



export const addItem = async (req: Request, res: Response) => {
  try {
    const item = await InventoryService.createItem(req.body);

    return res.status(201).json({
      success: true,
      message: "Item added successfully",
      data: item
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to add item"
    });
  }
};

export const listItems = async (_: Request, res: Response) => {
  try {
    const items = await InventoryService.getItems();

    return res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      data: items
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch items"
    });
  }
};



export const stockIn = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be greater than zero"
      });
    }

    await InventoryService.stockIn("id", quantity);

    return res.status(200).json({
      success: true,
      message: "Stock added successfully"
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Failed to add stock"
    });
  }
};

export const stockOut = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be greater than zero"
      });
    }

    await InventoryService.stockOut("id", quantity);

    return res.status(200).json({
      success: true,
      message: "Stock removed successfully"
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Failed to remove stock"
    });
  }
};

export const listStock = async (_: Request, res: Response) => {
  try {
    const stock = await InventoryService.getStock();

    return res.status(200).json({
      success: true,
      message: "Stock fetched successfully",
      data: stock
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch stock"
    });
  }
};

export const inventoryReport = async (_: Request, res: Response) => {
  try {
    const report = await InventoryService.getInventoryReport();

    return res.status(200).json({
      success: true,
      message: "Inventory report generated successfully",
      data: report
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to generate inventory report"
    });
  }
}