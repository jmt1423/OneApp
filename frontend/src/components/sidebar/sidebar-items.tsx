import { Icon } from "@iconify/react";

/**
 * Please check the https://nextui.org/docs/guide/routing to have a seamless router integration
 */

export const items = [
  {
    key: "home",
    href: "/home",
    icon: "solar:home-2-linear",
    title: "Home",
  },
  {
    key: "projects",
    href: "/",
    icon: "solar:widget-2-outline",
    title: "Projects",
    endContent: (
      <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    ),
  },
  {
    key: "tasks",
    href: "/home",
    icon: "solar:checklist-minimalistic-outline",
    title: "Tasks",
    endContent: (
      <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    ),
  },
  {
    key: "analytics",
    href: "/analytics",
    icon: "solar:chart-outline",
    title: "Analytics",
  },
  {
    key: "settings",
    href: "/home",
    icon: "solar:settings-outline",
    title: "Settings",
  },
];


