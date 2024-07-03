import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { useMediaQuery, useTheme } from "@mui/material";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Testimonial from "../components/Testimonals";
import ServiceIntro from "../components/Services";
import services from "../data/services.json";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary bg-blue-450 mb-8">
      <div className="container">
        <h1 className="text-6xl text-white mb-4">{siteConfig.title}</h1>
        <p className="text-2xl text-white mb-4">{siteConfig.tagline}</p>
        {/* <p className="hero__subtitle">{siteConfig.customFields.tagline_02}</p> */}
        <div className="flex justify-center">
          <Link
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg"
            to="/blog"
          >
            어떤 문제들을 해결해드리고 있는지 궁금하시나요?
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iframeStyle = isMobile
    ? {
        width: "100%",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
    : {
        display: "flex",
        width: "100%",
        height: "500px",
        justifyContent: "center",
        alignItems: "center",
      };
  return (
    <Layout
      title={`${siteConfig.customFields.companyName}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <section
        style={{
          margin: "40px 0",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "2em" }}>
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
        <div style={{ marginTop: "2em" }}>
          <h1>고객 서비스 이용 후기</h1>
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

        <div style={iframeStyle}>
          <iframe
            src="https://slides.com/ilmokoo/code/embed"
            title="Code"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
