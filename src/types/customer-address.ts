import { Pagination } from './pagination';

export type CustomerAddress = {
    image: string;
    name: string;
};

export type CustomerAddressData = {
    data: CustomerAddress[],
    pagination: Pagination
};

export interface CustomerAddressServiceInterface {
    getAllCustomerAddresss(query?: string): Promise<CustomerAddressData>; // Fetch all CustomerAddresss
    getCustomerAddressById(id: string): Promise<CustomerAddress>; // Fetch a single CustomerAddress by ID
    getCustomerAddressBySlug(slug: string): Promise<CustomerAddress>; // Fetch a single CustomerAddress by slug
    createCustomerAddress(CustomerAddress: CustomerAddress): Promise<CustomerAddress>; // Create a new CustomerAddress
    updateCustomerAddress(id: string, CustomerAddress: CustomerAddress): Promise<CustomerAddress>; // Update an existing CustomerAddress
    deleteCustomerAddress(id: string): Promise<boolean>; // Delete a CustomerAddress by ID
}
