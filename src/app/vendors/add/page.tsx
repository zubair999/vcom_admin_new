import { DefaultLayout } from "@/components/layout/default-layout";
import { AddVendorComponent } from "@/components/vendors/add";

const VendorAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <AddVendorComponent />
    </DefaultLayout>
  );
};

export default VendorAddPage;
