import { Pagination } from './pagination';

export type Ticket = {
    image: string;
    name: string;
};

export type TicketData = {
    data: Ticket[],
    pagination: Pagination
};

export interface TicketServiceInterface {
    getAllTickets(query?: string): Promise<TicketData>; // Fetch all Tickets
    getTicketById(id: string): Promise<Ticket>; // Fetch a single Ticket by ID
    getTicketBySlug(slug: string): Promise<Ticket>; // Fetch a single Ticket by slug
    createTicket(Ticket: Ticket): Promise<Ticket>; // Create a new Ticket
    updateTicket(id: string, Ticket: Ticket): Promise<Ticket>; // Update an existing Ticket
    deleteTicket(id: string): Promise<boolean>; // Delete a Ticket by ID
}
