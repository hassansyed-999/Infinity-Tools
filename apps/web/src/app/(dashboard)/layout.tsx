import { ReactNode } from "react";

import {
  AppShell,
  Sidebar,
  SidebarFooter,
  SidebarItem,
  SidebarSection,
  Topbar,
} from "../../components/dashboard/layout";

import {
  NotificationButton,
  SearchBar,
  ThemeToggle,
  UserMenu,
} from "../../components/dashboard/topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <AppShell
      sidebar={
        <Sidebar>
          <SidebarSection title="General">
            <SidebarItem href="/dashboard">
              Dashboard
            </SidebarItem>

            <SidebarItem href="/dashboard/ui-demo">
              UI Demo
            </SidebarItem>

            <SidebarItem href="/analytics">
              Analytics
            </SidebarItem>
          </SidebarSection>

          <SidebarSection title="AI">
            <SidebarItem href="#">
              AI Tools
            </SidebarItem>

            <SidebarItem href="#">
              AI Agents
            </SidebarItem>

            <SidebarItem href="#">
              Workflows
            </SidebarItem>
          </SidebarSection>

          <SidebarFooter>
            Infinity Tools v1.0
          </SidebarFooter>
        </Sidebar>
      }
      topbar={
        <Topbar
          left={
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              Infinity Tools
            </h1>
          }
          right={
            <>
              <SearchBar />
              <NotificationButton />
              <ThemeToggle />
              <UserMenu />
            </>
          }
        />
      }
    >
      {children}
    </AppShell>
  );
}