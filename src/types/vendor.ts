import { Pagination } from './pagination';

export type Vendor = {
    image: string;
    name: string;
};

export type VendorData = {
    data: Vendor[],
    pagination: Pagination
};

export interface VendorServiceInterface {
    getAllVendors(query?: string): Promise<VendorData>; // Fetch all Vendors
    getVendorById(id: string): Promise<Vendor>; // Fetch a single Vendor by ID
    getVendorBySlug(slug: string): Promise<Vendor>; // Fetch a single Vendor by slug
    createVendor(Vendor: Vendor): Promise<Vendor>; // Create a new Vendor
    updateVendor(id: string, Vendor: Vendor): Promise<Vendor>; // Update an existing Vendor
    deleteVendor(id: string): Promise<boolean>; // Delete a Vendor by ID
}
