import { DefaultLayout } from "@/components/layout/default-layout";
import { AddPackageComponent } from "@/components/packages/add";

const PackageAddPage: React.FC = () => {
  return (
    <DefaultLayout>
      <AddPackageComponent />
    </DefaultLayout>
  );
};

export default PackageAddPage;
