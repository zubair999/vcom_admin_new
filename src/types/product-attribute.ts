import { Pagination } from './pagination';

export type ProductAttribute = {
    image: string;
    name: string;
};

export type ProductAttributeData = {
    data: ProductAttribute[],
    pagination: Pagination
};

export interface ProductAttributeServiceInterface {
    getAllProductAttributes(query?: string): Promise<ProductAttributeData>; // Fetch all ProductAttributes
    getProductAttributeById(id: string): Promise<ProductAttribute>; // Fetch a single ProductAttribute by ID
    getProductAttributeBySlug(slug: string): Promise<ProductAttribute>; // Fetch a single ProductAttribute by slug
    createProductAttribute(ProductAttribute: ProductAttribute): Promise<ProductAttribute>; // Create a new ProductAttribute
    updateProductAttribute(id: string, ProductAttribute: ProductAttribute): Promise<ProductAttribute>; // Update an existing ProductAttribute
    deleteProductAttribute(id: string): Promise<boolean>; // Delete a ProductAttribute by ID
}
