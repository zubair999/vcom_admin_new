import { DefaultLayout } from "@/components/layout/default-layout";
import { AddBrandComponent } from "@/components/brands/add";

const BrandAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <AddBrandComponent />
    </DefaultLayout>
  );
};

export default BrandAddPage;
