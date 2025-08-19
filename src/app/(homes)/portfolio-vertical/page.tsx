import { Metadata } from "next";
import MainWrapper from "@/components/wrapper/main-wrapper";
import HeaderEight from "@/layout/header/header-eight";
import PortfolioVerticalSlider from "@/components/portfolio-slider/portfolio-vertical-slider";

export const metadata: Metadata = {
  title: "Redox - Portfolio vertical and Portfolio Next js Template",
  description:
    "Redox is a agency and portfolio template built with Next.js, designed to showcase your work and services effectively.",
};

export default function PortfolioVerticalPage() {
  return (
    <>
      {/* Header area start */}
      <HeaderEight />
      {/* Header area end */}

      {/* Main wrapper start */}
      <MainWrapper
        bodyCls={[
          "body-wrapper",
          "body-portfolio-agency",
          "font-heading-bdogrotesk-regular",
        ]}
      >
        <main>

          {/* portfolio area start */}
          <PortfolioVerticalSlider/>
          {/* portfolio area end */}

        </main>

        {/* Footer area start */}
        {/* Footer area end */}
      </MainWrapper>
      {/* Main wrapper end */}
    </>
  );
}
