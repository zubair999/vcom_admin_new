import { DefaultLayout } from "@/components/layout/default-layout";
import { AddCategoryComponent } from "@/components/categories/add";
import { ReactHookCategoryFormProvider } from "@/providers/react-hook-category-provider";

const CategoryAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <ReactHookCategoryFormProvider>
        <AddCategoryComponent />
      </ReactHookCategoryFormProvider>
    </DefaultLayout>
  );
};

export default CategoryAddPage;
