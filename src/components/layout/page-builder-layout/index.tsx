import { AppSidebar } from "@/components/layout/default-layout/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const PageBuilderLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};
