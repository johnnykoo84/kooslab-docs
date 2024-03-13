import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Testimonial from "../components/Testimonals";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <p className="hero__subtitle">{siteConfig.customFields.tagline_02}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about"
          >
            📘 쿠스랩 디지털 핸드북이 궁금하신가요? 📘
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
      <section
        style={{
          margin: "40px 0",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>고객 서비스 이용 후기</h1>
        <Testimonial
          logo="/img/myworkspace-logo.png"
          testimonial="쿠스랩 시스템 통합 및 업무 프로세스 제안으로 업무 효율성이 크게 좋아졌습니다. 서비스 이후 제공되는 작업 산출물 매뉴얼도 잘 정리되어있어, 이후에 찾아보기에 좋습니다."
          client="마이워크스페이스 양희영 대표"
        />
      </section>
    </Layout>
  );
}
