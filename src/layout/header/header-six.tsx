"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MainMenu from "./main-menu";
import logo from "@/assets/imgs/logo/logo-2.png";
import SideToggle from "@/components/common/side-toggle";

export default function HeaderSix() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="header-area-8">
        <div className="header-main">
          <div className="container large">
            <div className="header-area-8__inner">
              <div className="header__logo">
                <Link href="/">
                  <Image
                    src={logo}
                    className="normal-logo"
                    alt="imageSite Logo"
                    style={{ height: "auto" }}
                  />
                </Link>
              </div>
              <div className="header__nav pos-center">
                <MainMenu />
              </div>
              <div className="header__navicon">
                <button onClick={() => setIsMobileMenuOpen(true)} className="side-toggle">
                  <Image
                    src="/assets/imgs/icon/icon-10.webp"
                    alt="imageimage"
                    width={30}
                    height={10}
                  />
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* side toggle bar */}
      <SideToggle
        isOpen={isMobileMenuOpen}
        onSideToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      {/* side toggle bar */}
    </>
  );
}
