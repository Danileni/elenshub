import React, { FC, ReactNode, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getPageWrapperClass } from "./styles";
import Preloader from "../Preloader/Preloader";
import Footer from "../../layouts/DashboardLayout/components/Footer/Footer";
import TopNavBar from "../../layouts/DashboardLayout/components/TopNavBar/TopNavBar";

type PageProps = {
  pageTitle: string;
  className?: string;
  children?: ReactNode;
};

const Page: FC<PageProps> = ({ pageTitle, className, children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <div className={getPageWrapperClass(className)}>
          <TopNavBar />
          {children}
          <Footer />
        </div>
      </Suspense>
    </HelmetProvider>
  );
};
export default Page;
