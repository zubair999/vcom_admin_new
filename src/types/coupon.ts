import { Pagination } from './pagination';



export type Coupon = {
    id: number;
    code: string;
    amount: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    discount_type: "percent" | "fixed_cart" | "fixed_product";
    description: string;
    date_expires: string | null;
    date_expires_gmt: string | null;
    usage_count: number;
    individual_use: boolean;
    product_ids: number[];
    excluded_product_ids: number[];
    usage_limit: number | null;
    usage_limit_per_user: number | null;
    limit_usage_to_x_items: number | null;
    free_shipping: boolean;
    product_categories: number[];
    excluded_product_categories: number[];
    exclude_sale_items: boolean;
    minimum_amount: string;
    maximum_amount: string;
    email_restrictions: string[];
    used_by: string[];
  };
  

export type CouponData = {
    data: Coupon[],
    pagination: Pagination
};

export interface CouponServiceInterface {
    getAllCoupons(query?: string): Promise<CouponData>; // Fetch all Coupons
    getCouponById(id: string): Promise<Coupon>; // Fetch a single Coupon by ID
    getCouponBySlug(slug: string): Promise<Coupon>; // Fetch a single Coupon by slug
    createCoupon(Coupon: Coupon): Promise<Coupon>; // Create a new Coupon
    updateCoupon(id: string, Coupon: Coupon): Promise<Coupon>; // Update an existing Coupon
    deleteCoupon(id: string): Promise<boolean>; // Delete a Coupon by ID
}
