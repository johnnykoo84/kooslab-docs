import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "조직 업무 프로세스 분석",
    Svg: require("@site/static/img/investigate.svg").default,
    description: (
      <>
        현재 조직에서 어떻게 업무가 진행되고 있는지 분석하여 프로세스 리포트를
        제공해 드립니다. 이후 리포트 기반으로 개선점을 제안해 드립니다.
      </>
    ),
  },
  {
    title: "최적화 도구 소개, 비교, 선택",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        분석된 문제와 개선 계획에 가장 적합한 IT 도구들을 소개하고, 기능별 비교
        테이블을 제공해 드립니다. 이후 조직에 맞는 도구를 선택하실 수 있도록
        결정을 도와드립니다.
      </>
    ),
  },
  {
    title: "조직 프로세스에 맞게 도구 세팅",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        선택하신 도구를 개편 업무 프로세스에 맞게 직접 최적화 세팅을 진행해
        드립니다. 이후 조직 내부에서 계속 운영해 나갈 수 있도록 매뉴얼 제공 및
        교육을 제공해 드립니다.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
