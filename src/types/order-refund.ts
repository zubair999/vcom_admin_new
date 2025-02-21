import { Pagination } from './pagination';

export type OrderRefund = {
    image: string;
    name: string;
};

export type OrderRefundData = {
    data: OrderRefund[],
    pagination: Pagination
};

export interface OrderRefundServiceInterface {
    getAllOrderRefunds(query?: string): Promise<OrderRefundData>; // Fetch all OrderRefunds
    getOrderRefundById(id: string): Promise<OrderRefund>; // Fetch a single OrderRefund by ID
    getOrderRefundBySlug(slug: string): Promise<OrderRefund>; // Fetch a single OrderRefund by slug
    createOrderRefund(OrderRefund: OrderRefund): Promise<OrderRefund>; // Create a new OrderRefund
    updateOrderRefund(id: string, OrderRefund: OrderRefund): Promise<OrderRefund>; // Update an existing OrderRefund
    deleteOrderRefund(id: string): Promise<boolean>; // Delete a OrderRefund by ID
}
