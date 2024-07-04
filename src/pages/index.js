import { useEffect } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { useMediaQuery, useTheme } from "@mui/material";

import Testimonial from "../components/Testimonals";
import ServiceIntro from "../components/Services";
import services from "../data/services.json";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";

    const load = () => {
      // Load Tally embeds
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
        return;
      }

      // Fallback if window.Tally is not available
      document
        .querySelectorAll("iframe[data-tally-src]:not([src])")
        .forEach((iframeEl) => {
          iframeEl.src = iframeEl.dataset.tallySrc;
        });
    };

    // If Tally is already loaded, load the embeds
    if (typeof Tally !== "undefined") {
      load();
      return;
    }

    // If the Tally widget script is not loaded yet, load it
    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement("script");
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
      return;
    }
  }, []);
  return (
    <header className="bg-blue-500 p-8 sm:p-12 mb-8">
      <div className="text-center">
        <h1 className="text-center text-5xl sm:text-6xl text-white mb-4">
          아웃소싱 개발
        </h1>
        <h1 className="text-center text-5xl sm:text-6xl text-white mb-4">
          믿을만한 파트너
        </h1>
        <h1 className="text-center text-5xl sm:text-6xl text-white mb-4">
          찾기 힘드시죠
        </h1>

        <p className="text-2xl text-white mb-8">
          적극적인 소통과 유연한 요구사항 반영으로 인하우스 팀처럼
          개발해드립니다
        </p>
        {/* <p className="hero__subtitle">{siteConfig.customFields.tagline_02}</p> */}
        <div className="flex justify-center mb-8">
          <Link
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg"
            to="/blog"
          >
            고객 사례 확인하기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.customFields.companyName}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <section className="my-10 py-5 sm:px-48 text-center">
        <div className="mb-24">
          <h1 className="text-3xl sm:text-5xl text-bold mb-12">
            쿠스랩은 어떤 서비스를 제공하나요?
          </h1>
          {services.map((service) => (
            <ServiceIntro
              imgSrc={service.imgSrc}
              title={service.title}
              desc_1={service.desc_1}
              desc_2={service.desc_2}
            />
          ))}
        </div>
        <div className="mb-12 sm:mb-24">
          <h1 className="text-3xl font-bold mb-8">고객 서비스 이용 후기</h1>
          <Testimonial
            logo="/img/logo-myworkpspace.png"
            testimonial_1="쿠스랩 시스템 통합 및 업무 프로세스 제안으로 업무 효율성이 크게 좋아졌습니다."
            testimonial_2="서비스 이후 제공되는 작업 산출물 매뉴얼도 쉽게 이해하고 활용할 수 있었습니다."
            client="마이워크스페이스 양희영 대표"
          />
          <Testimonial
            logo="/img/logo-mindlogic.png"
            testimonial_1="저희 요구사항을 구체적이고 정확하게 파악하고자 애써주셔서, 생각지 못했던 부분까지 검토할 수 있었습니다.
            "
            testimonial_2="의뢰 후 빠르게 솔루션 검토 및 회신을 주시고, 검토 중인 솔루션을 마치 침투하듯 확인해 주셨습니다."
            client="마인드로직 박미현 HR팀 Manager"
          />
        </div>

        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold mb-4">쿠스랩 서비스 소개서</h1>
          <iframe
            src="https://slides.com/ilmokoo/code/embed"
            title="Code"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            className="w-full sm:w-2/3 h-48 sm:h-96 p-2"
          ></iframe>
        </div>
        <div className="flex flex-col items-center mb-8 border mx-auto p-4">
          <h1 className="text-4xl font-bold mb-2 sm:mb-4">Contact Kooslab</h1>
          <iframe
            data-tally-src="https://tally.so/embed/waGeNy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="276"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Contact Kooslab"
            className="w-full sm:w-2/3 p-8"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
