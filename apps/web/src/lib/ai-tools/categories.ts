export interface AIToolCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const AI_TOOL_CATEGORIES: AIToolCategory[] = [
  {
    id: "chat",
    name: "AI Chat",
    icon: "MessageSquare",
    description: "Conversational AI assistants and chatbots.",
  },
  {
    id: "image",
    name: "Image Generation",
    icon: "Image",
    description: "Generate and edit images with AI.",
  },
  {
    id: "video",
    name: "Video Generation",
    icon: "Video",
    description: "Create AI videos and animations.",
  },
  {
    id: "audio",
    name: "Audio",
    icon: "Music",
    description: "Speech, voice cloning, and music generation.",
  },
  {
    id: "writing",
    name: "Writing",
    icon: "PenSquare",
    description: "Content writing and copy generation.",
  },
  {
    id: "coding",
    name: "Coding",
    icon: "Code2",
    description: "Programming assistants and code generation.",
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: "Briefcase",
    description: "Work, business, and automation tools.",
  },
  {
    id: "developer",
    name: "Developer",
    icon: "Terminal",
    description: "Developer-focused AI utilities.",
  },
  {
    id: "design",
    name: "Design",
    icon: "Palette",
    description: "Graphic, UI, and UX design tools.",
  },
  {
    id: "education",
    name: "Education",
    icon: "GraduationCap",
    description: "Learning and educational AI tools.",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "Megaphone",
    description: "SEO, advertising, and marketing AI.",
  },
  {
    id: "other",
    name: "Other",
    icon: "Sparkles",
    description: "Miscellaneous AI tools.",
  },
];