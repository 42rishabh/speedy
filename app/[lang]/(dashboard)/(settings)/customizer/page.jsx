"use client";

import SelectLayout from "../customizer/select-layout";
import SelectTheme from "../customizer/select-theme";
import RtlSwitcher from "../customizer/rtl-switch";
import ThemeChange from "../customizer/theme-change";
import SidebarChange from "../customizer/sidebar-change";
import SidebarImage from "../customizer/sidebar-image";
import RadiusInit from "../customizer/radius";
import HeaderStyle from "../customizer/header-style";
import FooterStyle from "../customizer/footer-style";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThemeCustomizerPage() {
  return (
    <div className="p-6 bg-white rounded-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">Theme Customizer</h1>
      <div className="flex flex-col">
        <SelectLayout />
        <hr className="mb-4"/>
        <SelectTheme />
        <hr className="mb-4"/>
        <RtlSwitcher />
        <hr className="mb-4"/>
        <ThemeChange />
        <hr className="mb-4"/>
        <SidebarChange />
        <hr className="mb-4"/>
        <SidebarImage />
        <hr className="mb-4"/>
        <RadiusInit />
        <hr className="mb-4"/>
        <HeaderStyle />
        <hr className="mb-4"/>
        <FooterStyle />
      </div>
    </div>
  );
}