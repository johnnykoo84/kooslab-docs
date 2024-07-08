import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";
import Header from "@site/src/components/Header";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Services from "@site/src/components/Services";
import Customers from "@site/src/components/Customers";
import CustomerReview from "@site/src/components/CustomerReview";
import SalesDeck from "@site/src/components/SalesDeck";
import Contact from "@site/src/components/Contact";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.customFields.companyName}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header />
      <main>
        <HomepageFeatures />
        <Services />
        <Customers />
        <CustomerReview />
        <SalesDeck />
      </main>
      <Contact />
    </Layout>
  );
}
