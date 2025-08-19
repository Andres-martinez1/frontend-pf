import { Tabs, Tab } from "@heroui/tabs";

type TabItem = {
  key: string;
  title: string;
  content: React.ReactNode;
};

type CustomTabsProps = {
  tabs: TabItem[];
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "underlined" | "bordered" | "light";
};

export default function CustomTabs({
  tabs,
  size = "md",
  radius = "md",
  color = "default",
  variant = "solid",
}: CustomTabsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs
        size={size}
        radius={radius}
        color={color}
        variant={variant}
        aria-label="Custom Tabs"
      >
        {tabs.map((tab) => (
          <Tab key={tab.key} title={tab.title}>
            {tab.content}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
