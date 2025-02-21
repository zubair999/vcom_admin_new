"use client";

import * as React from "react";
import { NavMain } from "@/components/layout/default-layout/nav-main";
import { NavUser } from "@/components/layout/default-layout/nav-user";
import { TeamSwitcher } from "@/components/layout/default-layout/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { site_settings } from "@/settings/site-settings";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={site_settings.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={site_settings.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={site_settings.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
