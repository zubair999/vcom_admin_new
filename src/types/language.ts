import { Pagination, Image } from '@/types';

export type Language = {
    id: string;
    name: string;
    language: string;
    parent_id: number;
    meta_title: string;
    meta_description: string;
    image: Image;
    status: string;
};

export type LanguageData = {
    data: Language[],
    pagination: Pagination
};

export interface LanguageServiceInterface {
    getAllLanguages(query?: string): Promise<LanguageData>; // Fetch all Languages
    getLanguageById(id: string): Promise<Language>; // Fetch a single Language by ID
    getLanguageBySlug(slug: string): Promise<Language>; // Fetch a single Language by slug
    createLanguage(Language: Language): Promise<Language>; // Create a new Language
    updateLanguage(id: string, Language: Language): Promise<Language>; // Update an existing Language
    deleteLanguage(id: string): Promise<boolean>; // Delete a Language by ID
}
