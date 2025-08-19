import React from "react";
import Link from "next/link";
import logo from "@/assets/imgs/logo/logo-2.png";
import Image from "next/image";
import menuData from "@/data/menu-data";

type IProps = {
  isOpen: boolean;
  onSideToggle: () => void;
  showMobileMenu?: boolean;
};

export default function SideToggle({ isOpen, onSideToggle,showMobileMenu }: IProps) {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <React.Fragment>
      <aside className="fix">
        <div className={`side-info ${isOpen ? "info-open" : ""}`}>
          <div className="side-info-content">
            <div className="offset-widget offset-header">
              <div className="offset-logo">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="site logo"
                    style={{ height: "auto" }}
                  />
                </Link>
              </div>
              <button
                onClick={onSideToggle}
                id="side-info-close"
                className="side-info-close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            {/* mobile menu */}
            <div className={`mobile-menu ${showMobileMenu?'':'d-xl-none'} fix mean-container`}>
              <div className="mean-bar">
                <nav className="mean-nav">
                  <ul>
                    {menuData.map((menu, index) => (
                      <li
                        key={index}
                        className={`${
                          menu.children ? "menu-item-has-children" : ""
                        }`}
                      >
                        <Link href={menu.href}>{menu.title}</Link>
                        {menu.children && (
                          <ul
                            className="dp-menu"
                            style={{
                              display:
                                navTitle === menu.title ? "block" : "none",
                            }}
                          >
                            {menu.children.map((subMenu, subIndex) => (
                              <li key={subIndex}>
                                <Link href={subMenu.href}>{subMenu.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {menu.children && (
                          <a
                            className="mean-expand"
                            onClick={() => openMobileMenu(menu.title)}
                            style={{ fontSize: "28px",cursor:"pointer" }}
                          >
                            {navTitle === menu.title ? "-" : "+"}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            {/* mobile menu */}
            <div className="offset-button">
              <Link href="/contact" className="rr-btn hover-bg-theme">
                <span className="btn-wrap">
                  <span className="text-one">{"Let's"} Talk</span>
                  <span className="text-two">{"Let's"} Talk</span>
                </span>
              </Link>
            </div>
            <div className="offset-widget-box">
              <h2 className="title">Contact US</h2>
              <div className="contact-meta">
                <div className="contact-item">
                  <span className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span className="text">3891 Ranchview Dr. Richardson</span>
                </div>
                <div className="contact-item">
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className="text">
                    <a href="mailto:hello@redoxagency.com">
                      hello@redoxagency.com
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <span className="text">
                    <a href="tel:(505)555-0125">(505) 555-0125</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div
        onClick={onSideToggle}
        className={`offcanvas-overlay ${isOpen ? "overlay-open" : ""}`}
      ></div>
    </React.Fragment>
  );
}
