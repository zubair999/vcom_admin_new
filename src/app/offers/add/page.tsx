import { DefaultLayout } from "@/components/layout/default-layout";
import { AddOfferComponent } from "@/components/offers/add";

const OfferAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <AddOfferComponent />
    </DefaultLayout>
  );
};

export default OfferAddPage;
