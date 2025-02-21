import { Pagination } from './pagination';

export type Faq = {
    image: string;
    name: string;
};

export type FaqData = {
    data: Faq[],
    pagination: Pagination
};

export interface FaqServiceInterface {
    getAllFaqs(query?: string): Promise<FaqData>; // Fetch all Faqs
    getFaqById(id: string): Promise<Faq>; // Fetch a single Faq by ID
    getFaqBySlug(slug: string): Promise<Faq>; // Fetch a single Faq by slug
    createFaq(Faq: Faq): Promise<Faq>; // Create a new Faq
    updateFaq(id: string, Faq: Faq): Promise<Faq>; // Update an existing Faq
    deleteFaq(id: string): Promise<boolean>; // Delete a Faq by ID
}
