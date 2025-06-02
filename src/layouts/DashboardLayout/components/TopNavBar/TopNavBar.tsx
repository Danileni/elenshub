import React, { FC } from "react";
import { useToggle } from "ahooks";
import Menu3FillIcon from "remixicon-react/Menu3FillIcon";

import {
  containerClass,
  mobileMenuWrapperClass,
  navBarClass,
  navItemsWrapperClass,
} from "./styles";

import ThemeSwitcher from "../../../../components/ThemeSwitcher/ThemeSwitcher";
import { Dropdown, IconButton, NavLinks, Title } from "../../../../components/ReusableComponents";

import useMobileScreenToggle from "../../../../hooks/useMobileScreenToggle";

const TopNavBar: FC = () => {
  const isMobileScreen = useMobileScreenToggle();

  const [isDropdownVisible, { toggle: toggleDropdown }] = useToggle(false);

  const onThemeButtonClick = (): void => toggleDropdown();

  return (
    <nav className={navBarClass}>
      <div className={containerClass}>
        <Title size="sm" />
        <div className={navItemsWrapperClass}>
          {!isMobileScreen && <NavLinks />}
          {isMobileScreen && (
            <div className={mobileMenuWrapperClass}>
              <IconButton
                icon={<Menu3FillIcon size={20} />}
                screenReaderText="Toggle dropdown"
                onClick={onThemeButtonClick}
              />
              {isDropdownVisible && <Dropdown />}
            </div>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
export default TopNavBar;
