import { Pagination } from './pagination';

export type PaymentGateway = {
    image: string;
    name: string;
};

export type PaymentGatewayData = {
    data: PaymentGateway[],
    pagination: Pagination
};

export interface PaymentGatewayServiceInterface {
    getAllPaymentGateways(query?: string): Promise<PaymentGatewayData>; // Fetch all PaymentGateways
    getPaymentGatewayById(id: string): Promise<PaymentGateway>; // Fetch a single PaymentGateway by ID
    getPaymentGatewayBySlug(slug: string): Promise<PaymentGateway>; // Fetch a single PaymentGateway by slug
    createPaymentGateway(PaymentGateway: PaymentGateway): Promise<PaymentGateway>; // Create a new PaymentGateway
    updatePaymentGateway(id: string, PaymentGateway: PaymentGateway): Promise<PaymentGateway>; // Update an existing PaymentGateway
    deletePaymentGateway(id: string): Promise<boolean>; // Delete a PaymentGateway by ID
}
