import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "꼼꼼한 요구사항 리뷰",
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
    title: "고객이 익숙한 도구 활용",
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
    title: "쉬운 언어로 자주 소통",
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
    <div className="p-2">
      <div className="flex justify-center ">
        <img src={imgSrc} className="mx-auto max-w-48 mb-4" alt={title} />
      </div>
      <div className="text-center max-w-60">
        <Heading as="h1" className="text-2xl font-bold mb-4">
          {title}
        </Heading>
        <p className="text-xl text-left">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="">
      <div className="flex flex-wrap justify-around">
        {FeatureList.map((props, idx) => (
          <div key={idx} className="mx-4 my-2">
            <Feature {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}
