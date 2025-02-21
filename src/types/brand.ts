import { Pagination } from './pagination';

export type Brand = {
    image: string;
    name: string;
};

export type BrandData = {
    data: Brand[],
    pagination: Pagination
};

export interface BrandServiceInterface {
    getAllBlogs(query?: string): Promise<BrandData>; // Fetch all Blogs
    getBlogById(id: string): Promise<Brand>; // Fetch a single Blog by ID
    getBlogBySlug(slug: string): Promise<Brand>; // Fetch a single Blog by slug
    createBlog(Blog: Brand): Promise<Brand>; // Create a new Blog
    updateBlog(id: string, Blog: Brand): Promise<Brand>; // Update an existing Blog
    deleteBlog(id: string): Promise<boolean>; // Delete a Blog by ID
}
