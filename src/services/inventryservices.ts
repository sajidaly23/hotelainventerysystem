import Category from "../model/categorymodel";
import Supplier from "../model/suppliermodel";
import Item from "../model/itemmodel";
import Stock from "./../model/stockmodel";
import Transaction from "../model/transactionmodel";

// CATEGORY
export const createCategory = (data: any) => Category.create(data);
export const getCategories = () => Category.find({ isActive: true });
export const updateCategory = (id: string, data: any) => {
  return Category.findByIdAndUpdate(id, data, { new: true });
};

export const getCategoryById = (id: string) => {
  return Category.findOne({ _id: id, isActive: true });
};

// SUPPLIER
export const createSupplier = (data: any) => Supplier.create(data);
export const getSuppliers = () => Supplier.find({ isActive: true });

// ITEM
export const createItem = async (data: any) => {
  const item = await Item.create(data);
  await Stock.create({ item: item._id });
  return item;
};

export const getItems = () =>
  Item.find()
    .populate("category", "name")
    .populate("supplier", "name");

// STOCK IN
export const stockIn = async (itemId: string, quantity: number) => {
  const stock = await Stock.findOne({ item: itemId });
  if (!stock) throw new Error("Stock not found");

  stock.quantity += quantity;
  await stock.save();

  await Transaction.create({
    item: itemId,
    type: "IN",
    quantity
  });
};

// STOCK OUT
export const stockOut = async (itemId: string, quantity: number) => {
  const stock = await Stock.findOne({ item: itemId });
  if (!stock || stock.quantity < quantity)
    throw new Error("Insufficient stock");

  stock.quantity -= quantity;
  await stock.save();

  await Transaction.create({
    item: itemId,
    type: "OUT",
    quantity
  });
};

// STOCK LIST
export const getStock = () =>
  Stock.find().populate("item", "name sku");
