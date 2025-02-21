import { Pagination } from './pagination';

export type TaxRate = {
    image: string;
    name: string;
};

export type TaxRateData = {
    data: TaxRate[],
    pagination: Pagination
};

export interface TaxRateServiceInterface {
    getAllTaxRates(query?: string): Promise<TaxRateData>; // Fetch all TaxRates
    getTaxRateById(id: string): Promise<TaxRate>; // Fetch a single TaxRate by ID
    getTaxRateBySlug(slug: string): Promise<TaxRate>; // Fetch a single TaxRate by slug
    createTaxRate(TaxRate: TaxRate): Promise<TaxRate>; // Create a new TaxRate
    updateTaxRate(id: string, TaxRate: TaxRate): Promise<TaxRate>; // Update an existing TaxRate
    deleteTaxRate(id: string): Promise<boolean>; // Delete a TaxRate by ID
}
