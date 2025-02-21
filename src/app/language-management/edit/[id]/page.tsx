import { DefaultLayout } from "@/components/layout/default-layout";
import { EditLanguageManagementComponent } from "@/components/language-management/edit";

const LanguageManagementEditPage: React.FC = () => {
  return (
    <DefaultLayout>
      <EditLanguageManagementComponent />
    </DefaultLayout>
  );
};

export default LanguageManagementEditPage;
