import { DefaultLayout } from "@/components/layout/default-layout";
import { AddCouponComponent } from "@/components/coupons/add";

const CouponAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <AddCouponComponent />
    </DefaultLayout>
  );
};

export default CouponAddPage;
