import { Pagination } from './pagination';

export type OrderNote = {
    image: string;
    name: string;
};

export type OrderNoteData = {
    data: OrderNote[],
    pagination: Pagination
};

export interface OrderNoteServiceInterface {
    getAllOrderNotes(query?: string): Promise<OrderNoteData>; // Fetch all OrderNotes
    getOrderNoteById(id: string): Promise<OrderNote>; // Fetch a single OrderNote by ID
    getOrderNoteBySlug(slug: string): Promise<OrderNote>; // Fetch a single OrderNote by slug
    createOrderNote(OrderNote: OrderNote): Promise<OrderNote>; // Create a new OrderNote
    updateOrderNote(id: string, OrderNote: OrderNote): Promise<OrderNote>; // Update an existing OrderNote
    deleteOrderNote(id: string): Promise<boolean>; // Delete a OrderNote by ID
}
