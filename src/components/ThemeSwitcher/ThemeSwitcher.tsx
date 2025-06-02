import React, { FC } from "react";
import { toggleThemeButtonClass } from "./styles";
import SunLineIcon from "remixicon-react/SunLineIcon";
import MoonLineIcon from "remixicon-react/MoonLineIcon";
import { IconButton } from "../ReusableComponents";
import { useThemeToggle } from "../../hooks";

const ThemeSwitcher: FC = () => {
  const { isDark, toggleTheme } = useThemeToggle();
  const buttonIcon = isDark ? <MoonLineIcon size={20} /> : <SunLineIcon size={20} />;

  return (
    <IconButton
      className={toggleThemeButtonClass}
      icon={buttonIcon}
      screenReaderText="Toggle theme"
      onClick={toggleTheme}
    />
  );
};
export default ThemeSwitcher;
