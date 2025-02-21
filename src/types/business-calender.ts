import { Pagination } from './pagination';

export type BusinessCalender = {
    image: string;
    name: string;
};

export type BusinessCalenderData = {
    data: BusinessCalender[],
    pagination: Pagination
};

export interface BusinessCalenderServiceInterface {
    getAllBusinessCalenders(query?: string): Promise<BusinessCalenderData>; // Fetch all BusinessCalenders
    getBusinessCalenderById(id: string): Promise<BusinessCalender>; // Fetch a single BusinessCalender by ID
    getBusinessCalenderBySlug(slug: string): Promise<BusinessCalender>; // Fetch a single BusinessCalender by slug
    createBusinessCalender(BusinessCalender: BusinessCalender): Promise<BusinessCalender>; // Create a new BusinessCalender
    updateBusinessCalender(id: string, BusinessCalender: BusinessCalender): Promise<BusinessCalender>; // Update an existing BusinessCalender
    deleteBusinessCalender(id: string): Promise<boolean>; // Delete a BusinessCalender by ID
}
