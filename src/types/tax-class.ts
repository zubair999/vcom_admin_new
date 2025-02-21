import { Pagination } from './pagination';

export type TaxClass = {
    image: string;
    name: string;
};

export type TaxClassData = {
    data: TaxClass[],
    pagination: Pagination
};

export interface TaxClassServiceInterface {
    getAllTaxClasss(query?: string): Promise<TaxClassData>; // Fetch all TaxClasss
    getTaxClassById(id: string): Promise<TaxClass>; // Fetch a single TaxClass by ID
    getTaxClassBySlug(slug: string): Promise<TaxClass>; // Fetch a single TaxClass by slug
    createTaxClass(TaxClass: TaxClass): Promise<TaxClass>; // Create a new TaxClass
    updateTaxClass(id: string, TaxClass: TaxClass): Promise<TaxClass>; // Update an existing TaxClass
    deleteTaxClass(id: string): Promise<boolean>; // Delete a TaxClass by ID
}
