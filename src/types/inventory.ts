import { Pagination } from './pagination';

export type Inventory = {
    image: string;
    name: string;
};

export type InventoryData = {
    data: Inventory[],
    pagination: Pagination
};

export interface InventoryServiceInterface {
    getAllInventorys(query?: string): Promise<InventoryData>; // Fetch all Inventorys
    getInventoryById(id: string): Promise<Inventory>; // Fetch a single Inventory by ID
    getInventoryBySlug(slug: string): Promise<Inventory>; // Fetch a single Inventory by slug
    createInventory(Inventory: Inventory): Promise<Inventory>; // Create a new Inventory
    updateInventory(id: string, Inventory: Inventory): Promise<Inventory>; // Update an existing Inventory
    deleteInventory(id: string): Promise<boolean>; // Delete a Inventory by ID
}
