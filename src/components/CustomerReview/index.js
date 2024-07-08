import Testimonial from "@site/src/components/CustomerReview/TestimonialItem";

export default function CustomerReview() {
  return (
    <div className="bg-primary text-white p-8 md:px-64 text-center mb-12 sm:mb-24">
      <h1 className="text-3xl font-bold mb-8">고객사 리뷰</h1>
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
  );
}
