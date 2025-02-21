import { Pagination } from './pagination';

export type User = {
    image: string;
    name: string;
};

export type UserData = {
    data: User[],
    pagination: Pagination
};

export interface UserServiceInterface {
    getAllUsers(query?: string): Promise<UserData>; // Fetch all Users
    getUserById(id: string): Promise<User>; // Fetch a single User by ID
    getUserBySlug(slug: string): Promise<User>; // Fetch a single User by slug
    createUser(User: User): Promise<User>; // Create a new User
    updateUser(id: string, User: User): Promise<User>; // Update an existing User
    deleteUser(id: string): Promise<boolean>; // Delete a User by ID
}
