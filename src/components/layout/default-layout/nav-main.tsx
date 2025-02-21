"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

// Define types for the menu items
interface SubMenuItem {
  title: string;
  url: string;
  items?: SubMenuItem[]; // optional sub-sub-menu items
}

interface MainMenuItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SubMenuItem[];
}

export function NavMain({ items }: { items: MainMenuItem[] }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild className="text-[10px]">
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto w-3 h-3 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <Collapsible key={subItem.title} asChild>
                      <SidebarMenuSubItem>
                        <CollapsibleTrigger asChild className="text-[10px]">
                          <SidebarMenuSubButton href={subItem.url}>
                            <span>{subItem.title}</span>
                            {subItem.items && subItem.items.length > 0 && (
                              <ChevronRight className="ml-auto w-3 h-3 transition-transform duration-200 group-data-[state=open]/rotate-90" />
                            )}
                          </SidebarMenuSubButton>
                        </CollapsibleTrigger>

                        {subItem.items && subItem.items.length > 0 && (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {subItem.items.map((subSubItem) => (
                                <SidebarMenuSubItem key={subSubItem.title}>
                                  <SidebarMenuSubButton
                                    asChild
                                    href={subSubItem.url}
                                    className="text-[10px]"
                                  >
                                    <span className="text-[10px]">
                                      {subSubItem.title}
                                    </span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </SidebarMenuSubItem>
                    </Collapsible>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
