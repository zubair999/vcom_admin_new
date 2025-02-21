"use client";
import * as React from "react";
import {
  Button,
  Textarea,
  Label,
  Input,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  SingleSearchableSelectBox,
} from "@/components";

export function AddCouponComponent() {
  return (
    <Card className="mx-2">
      <div className="w-1/2">
        <CardHeader>
          <CardTitle>Create coupon</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* Coupon Code */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="code">Coupon Code</Label>
                <Input id="code" placeholder="Enter coupon code" />
              </div>

              {/* Amount */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" placeholder="Enter coupon amount" />
              </div>

              {/* Discount Type */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="discount_type">Discount Type</Label>
                <SingleSearchableSelectBox
                  options={[
                    { label: "Percent", value: "percent" },
                    { label: "Fixed Cart", value: "fixed_cart" },
                    { label: "Fixed Product", value: "fixed_product" },
                  ]}
                  onChange={(value) => console.log(value)}
                  placeholder="Select discount type"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Enter coupon description"
                />
              </div>

              {/* Expiration Date */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date_expires">Expiration Date</Label>
                <Input
                  id="date_expires"
                  placeholder="Enter expiration date"
                  type="datetime-local"
                />
              </div>

              {/* Usage Count */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="usage_count">Usage Count</Label>
                <Input
                  id="usage_count"
                  type="number"
                  placeholder="Enter usage count"
                />
              </div>

              {/* Individual Use */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="individual_use">Individual Use</Label>
                {/* <Checkbox id="individual_use" label="Yes" /> */}
              </div>

              {/* Product IDs */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="product_ids">Product IDs</Label>
                <Input
                  id="product_ids"
                  placeholder="Enter product IDs (comma separated)"
                />
              </div>

              {/* Excluded Product IDs */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="excluded_product_ids">
                  Excluded Product IDs
                </Label>
                <Input
                  id="excluded_product_ids"
                  placeholder="Enter excluded product IDs (comma separated)"
                />
              </div>

              {/* Usage Limit */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="usage_limit">Usage Limit</Label>
                <Input
                  id="usage_limit"
                  type="number"
                  placeholder="Enter usage limit"
                />
              </div>

              {/* Usage Limit Per User */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="usage_limit_per_user">
                  Usage Limit Per User
                </Label>
                <Input
                  id="usage_limit_per_user"
                  type="number"
                  placeholder="Enter limit per user"
                />
              </div>

              {/* Limit Usage To X Items */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="limit_usage_to_x_items">
                  Limit Usage to X Items
                </Label>
                <Input
                  id="limit_usage_to_x_items"
                  type="number"
                  placeholder="Enter number of items"
                />
              </div>

              {/* Free Shipping */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="free_shipping">Free Shipping</Label>
                {/* <Checkbox id="free_shipping" label="Yes" /> */}
              </div>

              {/* Product Categories */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="product_categories">Product Categories</Label>
                <Input
                  id="product_categories"
                  placeholder="Enter product categories (comma separated)"
                />
              </div>

              {/* Excluded Product Categories */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="excluded_product_categories">
                  Excluded Product Categories
                </Label>
                <Input
                  id="excluded_product_categories"
                  placeholder="Enter excluded product categories (comma separated)"
                />
              </div>

              {/* Exclude Sale Items */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="exclude_sale_items">Exclude Sale Items</Label>
                {/* <Checkbox id="exclude_sale_items" label="Yes" /> */}
              </div>

              {/* Minimum Amount */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="minimum_amount">Minimum Amount</Label>
                <Input id="minimum_amount" placeholder="Enter minimum amount" />
              </div>

              {/* Maximum Amount */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="maximum_amount">Maximum Amount</Label>
                <Input id="maximum_amount" placeholder="Enter maximum amount" />
              </div>

              {/* Email Restrictions */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email_restrictions">Email Restrictions</Label>
                <Input
                  id="email_restrictions"
                  placeholder="Enter email restrictions (comma separated)"
                />
              </div>

              {/* Used By */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="used_by">Used By</Label>
                <Input
                  id="used_by"
                  placeholder="Enter used by users (comma separated)"
                />
              </div>

              {/* Meta Data */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meta_data">Meta Data</Label>
                <Textarea
                  id="meta_data"
                  placeholder="Enter meta data in JSON format"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Save</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
