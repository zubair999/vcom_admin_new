import { DefaultLayout } from "@/components/layout/default-layout";
import { BrandsListComponent } from "@/components/faq/";

const FaqListPage: React.FC = () => {
  return (
    <DefaultLayout>
      <BrandsListComponent />
    </DefaultLayout>
  );
};

export default FaqListPage;
