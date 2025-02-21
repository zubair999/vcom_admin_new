import { DefaultLayout } from "@/components/layout/default-layout";
import { EditBrandComponent } from "@/components/brands/edit";

const BrandEditPage: React.FC = () => {
  return (
    <DefaultLayout>
      <EditBrandComponent />
    </DefaultLayout>
  );
};

export default BrandEditPage;
