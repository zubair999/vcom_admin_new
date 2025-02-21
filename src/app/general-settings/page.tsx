import { DefaultLayout } from "@/components/layout/default-layout";
import { GeneralSettingComponent } from "@/components/general-settings/add";

const GeneralSettingAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <GeneralSettingComponent />
    </DefaultLayout>
  );
};

export default GeneralSettingAddPage;
