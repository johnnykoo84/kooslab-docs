import Link from "@docusaurus/Link";
import { Link as ScrollLink } from "react-scroll";

export default function HomepageHeader() {
  return (
    <header className="p-8 sm:p-8">
      <div className="text-center">
        <div className="my-12">
          <h1 className="text-center text-5xl sm:text-6xl mb-4">
            시간과 인력 낭비를 줄여주는
          </h1>
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <div>
              <h1 className="text-center text-5xl sm:text-6xl mb-4 md:mr-4">
                중소기업 전문 IT
              </h1>
              <h1 className="text-center text-5xl sm:text-6xl mb-4">
                아웃소싱 전문가
              </h1>
            </div>
          </div>
        </div>

        <p className="text-2xl mb-8">
          소프트웨어 개발부터 데이터 분석까지 중소기업에게 꼭 필요한 만큼만
          서비스를 제공합니다.
        </p>

        <div className="flex justify-center mb-8">
          <ScrollLink to="contact" smooth={true} duration={500}>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg shadow-lg cursor-pointer">
              지금 무료 컨설팅 신청하기
            </button>
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}
