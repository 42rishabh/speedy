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
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-semibold mb-6">Theme Customizer</h1>
      <div className="space-y-6">
        <SelectLayout />
        <SelectTheme />
        <RtlSwitcher />
        <ThemeChange />
        <SidebarChange />
        <SidebarImage />
        <RadiusInit />
        <HeaderStyle />
        <FooterStyle />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Button asChild className="w-full md:w-auto">
          <Link href="https://1.envato.market/vNaJR3">Buy Now</Link>
        </Button>
        <Button asChild className="w-full md:w-auto">
          <Link
            href="https://themeforest.net/user/codeshaperbd/portfolio"
            target="__blank"
          >
            Our Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}