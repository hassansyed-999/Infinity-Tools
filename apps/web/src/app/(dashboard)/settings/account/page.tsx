import {
  AccountSettings,
  SettingsHeader,
  SettingsPageContainer,
} from "@/components/settings";

export default function AccountSettingsPage() {
  return (
    <SettingsPageContainer>
      <SettingsHeader
        title="Account Settings"
        description="Manage your personal account information."
      />

      <AccountSettings />
    </SettingsPageContainer>
  );
}