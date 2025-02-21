import { Pagination } from './pagination';

export type Order = {
    image: string;
    name: string;
};

export type OrderData = {
    data: Order[],
    pagination: Pagination
};

export interface OrderServiceInterface {
    getAllOrders(query?: string): Promise<OrderData>; // Fetch all Orders
    getOrderById(id: string): Promise<Order>; // Fetch a single Order by ID
    getOrderBySlug(slug: string): Promise<Order>; // Fetch a single Order by slug
    createOrder(Order: Order): Promise<Order>; // Create a new Order
    updateOrder(id: string, Order: Order): Promise<Order>; // Update an existing Order
    deleteOrder(id: string): Promise<boolean>; // Delete a Order by ID
}
