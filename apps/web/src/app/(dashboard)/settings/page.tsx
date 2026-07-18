import {
  GeneralSettings,
  SettingsHeader,
  SettingsNavigation,
  SettingsPageContainer,
  SettingsSection,
} from "@/components/settings";

export default function SettingsPage() {
  return (
    <SettingsPageContainer>
      <SettingsHeader />

      <SettingsSection
        title="Settings"
        description="Manage your account and application preferences."
      >
        <SettingsNavigation />
      </SettingsSection>

      <SettingsSection
        title="General Preferences"
        description="Configure your language and timezone preferences."
      >
        <GeneralSettings />
      </SettingsSection>
    </SettingsPageContainer>
  );
}