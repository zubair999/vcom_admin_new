import { DefaultLayout } from "@/components/layout/default-layout";
import { EditCategoryComponent } from "@/components/categories/edit";

const CategoryAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <EditCategoryComponent />
    </DefaultLayout>
  );
};

export default CategoryAddPage;
