import axios from "axios";
import { Product, ProductCategory } from "@/types/product";

const productsApi = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProductsByCategory = async (category: string) => {
  const res = await productsApi.get<{ products: Product[] }>(
    category === "" ? "/products" : `/products/category/${category}`
  );
  return res.data.products;
};

export const fetchProductById = async (productId: Product["id"]) => {
  const res = await productsApi.get<Product>(`/products/${productId}`);
  return res.data;
};

export const fetchCategories = async () => {
  const res = await productsApi.get<ProductCategory[]>("/products/categories");
  return res.data;
};
