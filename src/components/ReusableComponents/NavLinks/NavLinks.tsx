import React, { FC, JSX } from "react";
import { NavLink } from "react-router-dom";
import { navLinkItemClass, navLinksWrapperClass } from "./styles";
import { PrimaryButton } from "../index";
import { navItems } from "../../../constants/navItems";
import { NavItemsProps } from "../../../types/common";

const NavLinks: FC = () => {
  const links = navItems.map(
    (item: NavItemsProps, index: number): JSX.Element => (
      <li className={navLinkItemClass} key={index}>
        <NavLink key={index} to={item.href}>
          {({ isActive }) => <PrimaryButton active={isActive}>{item.name}</PrimaryButton>}
        </NavLink>
      </li>
    ),
  );

  return <ul className={navLinksWrapperClass}>{links}</ul>;
};
export default NavLinks;
