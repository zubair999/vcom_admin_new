import { Pagination } from './pagination';

export type Customer = {
    image: string;
    name: string;
};

export type CustomerData = {
    data: Customer[],
    pagination: Pagination
};

export interface CustomerServiceInterface {
    getAllCustomers(query?: string): Promise<CustomerData>; // Fetch all Customers
    getCustomerById(id: string): Promise<Customer>; // Fetch a single Customer by ID
    getCustomerBySlug(slug: string): Promise<Customer>; // Fetch a single Customer by slug
    createCustomer(Customer: Customer): Promise<Customer>; // Create a new Customer
    updateCustomer(id: string, Customer: Customer): Promise<Customer>; // Update an existing Customer
    deleteCustomer(id: string): Promise<boolean>; // Delete a Customer by ID
}
