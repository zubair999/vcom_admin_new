import { DefaultLayout } from "@/components/layout/default-layout";
import { AddLanguageManagementComponent } from "@/components/language-management/add";

const LanguageManagementAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <AddLanguageManagementComponent />
    </DefaultLayout>
  );
};

export default LanguageManagementAddPage;
