import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import { Switch } from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import { MoonIcon } from "../DarkmodeBtn/MoonIcon";
import { SunIcon } from "../DarkmodeBtn/SunIcon";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Resume", link: "/resume" },
    { text: "Contact", link: "/contact" },
    { text: "Give Feedback", link: "/feedback" },
  ];
  const setDarkmodeTheme = (isSelected: Boolean) => {
    if (isSelected) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const router = useRouter()
  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen} className="font-bold ">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="text-2xl font-bold text-inherit">RUBEL BOSU</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className="ml-1 mr-1">
            <Link
              color="foreground"
              href={item.link}
              className={`border-green-400 hover:border-b-3 text-lg font-semibold ${(router.pathname === item.link)? "text-green-400":""}`}
            >
              {item.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Switch
          defaultSelected
          size="lg"
          color="success"
          onValueChange={(isSelected) => {
            setDarkmodeTheme(isSelected);
          }}
          thumbIcon={({ isSelected }) =>
            isSelected ? <MoonIcon /> : <SunIcon />
          }
        ></Switch>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              href={item.link}
              className={`dark:hover:text-green-400 hover:text-green-600 font-bold ${(router.pathname === item.link)? "text-green-400":""}`}
            >
              {item.text}
            </Link>
            <Divider className="my-4" />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
