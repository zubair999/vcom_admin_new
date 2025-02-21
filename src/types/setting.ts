import { Pagination } from './pagination';

export type Setting = {
    image: string;
    name: string;
};

export type SettingData = {
    data: Setting[],
    pagination: Pagination
};

export interface SettingServiceInterface {
    getAllSettings(query?: string): Promise<SettingData>; // Fetch all Settings
    getSettingById(id: string): Promise<Setting>; // Fetch a single Setting by ID
    getSettingBySlug(slug: string): Promise<Setting>; // Fetch a single Setting by slug
    createSetting(Setting: Setting): Promise<Setting>; // Create a new Setting
    updateSetting(id: string, Setting: Setting): Promise<Setting>; // Update an existing Setting
    deleteSetting(id: string): Promise<boolean>; // Delete a Setting by ID
}
