import { Pagination } from './pagination';

export type Blog = {
    image: string;
    name: string;
};

export type BlogData = {
    data: Blog[],
    pagination: Pagination
};

export interface BlogServiceInterface {
    getAllBlogs(query?: string): Promise<BlogData>; // Fetch all Blogs
    getBlogById(id: string): Promise<Blog>; // Fetch a single Blog by ID
    getBlogBySlug(slug: string): Promise<Blog>; // Fetch a single Blog by slug
    createBlog(Blog: Blog): Promise<Blog>; // Create a new Blog
    updateBlog(id: string, Blog: Blog): Promise<Blog>; // Update an existing Blog
    deleteBlog(id: string): Promise<boolean>; // Delete a Blog by ID
}
