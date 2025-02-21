import { Pagination } from './pagination';

export type Offer = {
    image: string;
    name: string;
};

export type OfferData = {
    data: Offer[],
    pagination: Pagination
};

export interface OfferServiceInterface {
    getAllOffers(query?: string): Promise<OfferData>; // Fetch all Offers
    getOfferById(id: string): Promise<Offer>; // Fetch a single Offer by ID
    getOfferBySlug(slug: string): Promise<Offer>; // Fetch a single Offer by slug
    createOffer(Offer: Offer): Promise<Offer>; // Create a new Offer
    updateOffer(id: string, Offer: Offer): Promise<Offer>; // Update an existing Offer
    deleteOffer(id: string): Promise<boolean>; // Delete a Offer by ID
}
