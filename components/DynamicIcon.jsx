"use client";

import { createElement } from "react";
import * as LucideIcons from "lucide-react";

const DynamicIcon = ({ iconName, ...props }) => {
  const IconComponent = LucideIcons[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in Lucide.`);
    return null;
  }

  return createElement(IconComponent, props);
};

export default DynamicIcon;
