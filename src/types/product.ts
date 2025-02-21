import { Pagination } from './pagination';

export type Product = {
    image: string;
    name: string;
};

export type ProductData = {
    data: Product[],
    pagination: Pagination
};

export interface ProductServiceInterface {
    getAllProducts(query?: string): Promise<ProductData>; // Fetch all Products
    getProductById(id: string): Promise<Product>; // Fetch a single Product by ID
    getProductBySlug(slug: string): Promise<Product>; // Fetch a single Product by slug
    createProduct(Product: Product): Promise<Product>; // Create a new Product
    updateProduct(id: string, Product: Product): Promise<Product>; // Update an existing Product
    deleteProduct(id: string): Promise<boolean>; // Delete a Product by ID
}
