import { Pagination } from './pagination';

export type Package = {
    image: string;
    name: string;
};

export type PackageData = {
    data: Package[],
    pagination: Pagination
};

export interface PackageServiceInterface {
    getAllPackagess(query?: string): Promise<PackageData>; // Fetch all Packagess
    getPackagesById(id: string): Promise<Package>; // Fetch a single Packages by ID
    getPackagesBySlug(slug: string): Promise<Package>; // Fetch a single Packages by slug
    createPackages(Packages: Package): Promise<Package>; // Create a new Packages
    updatePackages(id: string, Packages: Package): Promise<Package>; // Update an existing Packages
    deletePackages(id: string): Promise<boolean>; // Delete a Packages by ID
}
