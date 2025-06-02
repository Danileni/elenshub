import React, { FC } from "react";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";

import {
  descriptionClass,
  getMainSectionClass,
  greetingTextClass,
  headlineClass,
  introContainerClass,
  scrollButtonClass,
  socialClass,
} from "./styles";

import { Section } from "../../../layouts/DashboardLayout/components/Section/Section";
import SocialMedia from "../../SocialMedia/SocialMedia";
import {
  HighlightText,
  InlineLink,
  PrimaryButton,
  SlidingInUnderline,
} from "../../ReusableComponents";
import { useFadeInMounted } from "../../../hooks";

const WORK_LINK = "https://www.epignosishq.com/";

const MainSection: FC = () => {
  const { animationClass } = useFadeInMounted();
  const scrollToProjects = (): void => window.location.assign("#projects");

  const renderGreetingText = () => (
    <h2 className={greetingTextClass}>
      Hey there👋, I'm{" "}
      <SlidingInUnderline type="secondary" height="lg">
        Eleni Polikrati
      </SlidingInUnderline>
    </h2>
  );

  const renderHeadline = () => (
    <h1 className={headlineClass}>
      I turn ideas into dynamic <HighlightText>web solutions</HighlightText>, combining intuitive
      design with powerful <HighlightText>backend systems</HighlightText>.
    </h1>
  );

  const renderDescription = () => (
    <p className={descriptionClass}>
      Software Engineer at <InlineLink href={WORK_LINK}>Epignosis learning technologies</InlineLink>
    </p>
  );

  return (
    <Section className={getMainSectionClass(animationClass)}>
      <div className={introContainerClass}>
        {renderGreetingText()}
        {renderHeadline()}
        {renderDescription()}
        <SocialMedia className={socialClass} />
      </div>
      <PrimaryButton
        className={scrollButtonClass}
        icon={<ArrowDownSLineIcon />}
        onClick={scrollToProjects}
      >
        Featured projects
      </PrimaryButton>
    </Section>
  );
};
export default MainSection;
