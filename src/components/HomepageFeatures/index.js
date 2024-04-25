import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "친절한 고객 요구사항 리뷰",
    imgSrc: require("@site/static/img/checklist.png").default,
    description: (
      <>
        현재 러프하게 가지고 계신 고객 요구사항 및 spec을 원하시는 목적에 맞게
        자세히 검토해 드립니다. 이후 고객이 원하시는 방향으로 요구사항을
        보완해드립니다. 완성된 요구사항 바탕으로 적절한 개발 기간과 비용 견적을
        제공해드립니다.
      </>
    ),
  },
  {
    title: "고객 시스템 내에서 문제 해결",
    imgSrc: require("@site/static/img/configure.png").default,
    description: (
      <>
        고객 담당자께서 충분히 스스로 운영 가능하도록 가급적 기존에 익숙하게
        사용하고 계시던 시스템과 도구를 활용하여 문제를 해결해드리거나 개발을
        진행해 드립니다. 꼭 필요한 부분에서만 직접 코드로 개발하거나 최소로
        합니다.
      </>
    ),
  },
  {
    title: "적극적인 고객과의 소통",
    imgSrc: require("@site/static/img/conversation.png").default,
    description: (
      <>
        프로젝트 진행 중 고객과의 소통은 매우 중요합니다. 고객 요구사항을 정확히
        이해하고, 고객이 원하는 방향으로 프로젝트를 이끌어 나갈 수 있도록
        지나치다 싶을정도로 적극적으로 소통하고 확인합니다.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h1">{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
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
