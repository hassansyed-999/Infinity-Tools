import {
  NotificationsSettings,
  SettingsHeader,
  SettingsPageContainer,
} from "@/components/settings";

export default function NotificationsSettingsPage() {
  return (
    <SettingsPageContainer>
      <SettingsHeader
        title="Notification Settings"
        description="Choose which notifications you want to receive."
      />

      <NotificationsSettings />
    </SettingsPageContainer>
  );
}