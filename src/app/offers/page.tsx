import React from "react";
import { DefaultLayout } from "@/components/layout/default-layout";
import { OffersListComponent } from "@/components/offers";

const OfferPage = () => {
  return (
    <DefaultLayout>
      <OffersListComponent />
    </DefaultLayout>
  );
};

export default OfferPage;
