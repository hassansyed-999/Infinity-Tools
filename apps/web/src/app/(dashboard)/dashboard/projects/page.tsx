import { FolderOpen } from "lucide-react";

import { EmptyState } from "../../../../components/ui";

export default function ProjectsPage() {
  return (
    <EmptyState
      icon={
        <FolderOpen
          size={32}
          className="text-blue-600"
        />
      }
      title="No Projects Yet"
      description="Create your first project to start building websites, games, automations, and AI workflows."
    />
  );
}