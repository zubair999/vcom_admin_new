import { DefaultLayout } from "@/components/layout/default-layout";
import { TemplateListComponent } from "@/components/template";

const TemplateAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <TemplateListComponent />
    </DefaultLayout>
  );
};

export default TemplateAddPage;
