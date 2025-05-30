import React, { FC, JSX } from "react";
import { NavLink } from "react-router-dom";
// import clsx from "clsx"
import { navItems } from "../../../constants/navItems";
import { NavItemsProps } from "../../../types/common";
import { getDropdownContainerClass, getListItemClass, getNavLinkClass } from "./styles";

const Dropdown: FC = () => {
  const links = navItems.map(
    (item: NavItemsProps, index: number): JSX.Element => (
      <NavLink key={index} className={({ isActive }) => getNavLinkClass(isActive)} to={item.href}>
        <li className={getListItemClass()}>
          <span>{item.name}</span>
        </li>
      </NavLink>
    ),
  );

  return <ul className={getDropdownContainerClass()}>{links}</ul>;
};
export default Dropdown;
