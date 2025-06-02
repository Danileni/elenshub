import React, { FC } from "react";
import {
  backToTopButtonClass,
  contentRowClass,
  creditTextClass,
  footerWrapperClass,
  navSocialWrapperClass,
  titleSectionClass,
} from "./styles";
import ArrowUpSLineIcon from "remixicon-react/ArrowUpFillIcon";
import SocialMedia from "../../../../components/SocialMedia/SocialMedia";
import { NavLinks, PrimaryButton, Title } from "../../../../components/ReusableComponents";
import useScrollToTop from "../../../../hooks/useScrollToTop";

const Footer: FC = () => {
  return (
    <footer className={footerWrapperClass}>
      <PrimaryButton
        onClick={useScrollToTop}
        className={backToTopButtonClass}
        icon={<ArrowUpSLineIcon />}
      >
        Back to top
      </PrimaryButton>
      <div className={titleSectionClass}>
        <Title size="lg" />
      </div>
      <div className={contentRowClass}>
        <p className={creditTextClass}>Made with ❤️ by Eleni</p>
        <div className={navSocialWrapperClass}>
          <NavLinks />
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
