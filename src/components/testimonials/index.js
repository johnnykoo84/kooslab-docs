import Testimonial from "@site/src/components/testimonials/TestimonialItem";

export default function Testimonials() {
  return (
    <div className="bg-primary text-white p-8 md:px-64 text-center mb-12 sm:mb-24">
      <h1 className="text-3xl font-bold mb-8">고객사 리뷰</h1>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
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
        <Testimonial
          logo="/img/logo-bunnyrate.png"
          testimonial_1="고객사의 요구사항을 명확히 이해하고 본질적인 문제 해결에 집중합니다."
          testimonial_2="실무적으로 매일 반복해야 하는 업무에 대한 리소스를 크게 줄일 수 있어서 정말 만족스럽습니다. 휴먼에러 위험성이 있던 반복적 업무에 대해 신경 쓸 필요가 없어져서 업무 질 향상에도 큰 도움이 될 것 같습니다.
협업 과정에서 피드백에 대한 즉각적이고 정확한 대응을 해주셔서 감사했습니다."
          client="버니레이트 CEO 양원석 & 노해주 매니저"
        />
        <Testimonial
          logo="/img/safetyon.avif"
          testimonial_1="IT 제품 개발 전문가의 퍼실리테이팅으로 막연했던 제품 개발 요구사항 문서를 하루만에 작성할 수 있었습니다. 특히 이 과정을 통해 필요한 기능과 우선순위를 전문가의 도움을 받아 명확히 정리할 수 있었습니다."
          testimonial_2="워크샵을 통해 IT 및 SW 제품 개발 초기 단계에서의 요구사항 정의가 성공적인 프로젝트의 핵심임을 명확히 인식하게 해준 유익한 경험이었습니다."
          client="SafetyOn 제품 개발사 프로젝트 매니저"
        />
      </div>
    </div>
  );
}
