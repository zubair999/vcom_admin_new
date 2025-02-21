import { Pagination, Image } from '@/types';

export type Category = {
    name: string;
    description?: string;
    parent_id?: number;
    meta_title?: string;
    meta_description?: string;
    image?: Image;
    status?: string;
};

export type CategoryData = {
    data: Category[],
    pagination: Pagination
};

export interface CategoryServiceInterface {
    getAllCategories(query?: string): Promise<CategoryData>; // Fetch all Categorys
    getCategoryById(id: string): Promise<Category>; // Fetch a single Category by ID
    getCategoryBySlug(slug: string): Promise<Category>; // Fetch a single Category by slug
    createCategory(Category: Category): Promise<Category>; // Create a new Category
    updateCategory(id: string, Category: Category): Promise<Category>; // Update an existing Category
    deleteCategory(id: string): Promise<boolean>; // Delete a Category by ID
}
