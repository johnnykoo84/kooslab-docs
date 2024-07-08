import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Header from "@site/src/components/Header";
import Services from "../components/Services";
import CustomerReview from "../components/CustomerReview";
import Contact from "../components/Contact";
import SalesDeck from "../components/SalesDeck";
import Customers from "../components/Customers";

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
      </main>
      <section className="my-10 py-5 sm:px-48 text-center">
        <Services />
        <Customers />
        <CustomerReview />
        <SalesDeck />
        <Contact />
      </section>
    </Layout>
  );
}
