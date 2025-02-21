import { Pagination } from './pagination';

export type Review = {
    image: string;
    name: string;
};

export type ReviewData = {
    data: Review[],
    pagination: Pagination
};

export interface ReviewServiceInterface {
    getAllReviews(query?: string): Promise<ReviewData>; // Fetch all Reviews
    getReviewById(id: string): Promise<Review>; // Fetch a single Review by ID
    getReviewBySlug(slug: string): Promise<Review>; // Fetch a single Review by slug
    createReview(Review: Review): Promise<Review>; // Create a new Review
    updateReview(id: string, Review: Review): Promise<Review>; // Update an existing Review
    deleteReview(id: string): Promise<boolean>; // Delete a Review by ID
}
