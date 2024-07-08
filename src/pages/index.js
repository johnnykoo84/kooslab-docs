import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";
import Header from "@site/src/components/header";
import Features from "@site/src/components/features";
import Services from "@site/src/components/services";
import Customers from "@site/src/components/customers";
import Testimonials from "@site/src/components/testimonials";
import SalesDeck from "@site/src/components/salesdeck";
import Contact from "@site/src/components/contact";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.customFields.companyName}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header />
      <main>
        <Features />
        <Services />
        <Customers />
        <Testimonials />
        <SalesDeck />
      </main>
      <Contact />
    </Layout>
  );
}
