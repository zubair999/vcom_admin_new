import React from "react";
import { DefaultLayout } from "@/components/layout/default-layout";
import { LanguageListComponent } from "@/components/language-management";

const LanguageListPage = () => {
  return (
    <DefaultLayout>
      <LanguageListComponent />
    </DefaultLayout>
  );
};

export default LanguageListPage;
