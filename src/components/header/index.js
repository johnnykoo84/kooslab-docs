import Link from "@docusaurus/Link";
import { Link as ScrollLink } from "react-scroll";

export default function HomepageHeader() {
  return (
    <header className="p-8 sm:p-8">
      <div className="text-center">
        <div className="flex flex-col my-12">
          <div className="flex flex-col sm:flex-row justify-center w-full">
            <h1 className="w-full sm:w-auto text-5xl sm:text-6xl mb-4 sm:mb-0 sm:mr-4">
              시간과 인력
            </h1>
            <h1 className="w-full sm:w-auto text-5xl sm:text-6xl mb-4">
              낭비를 줄여주는
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center mb-4">
            <div>
              <h1 className="text-center text-5xl sm:text-6xl mb-4 md:mr-4">
                <p>중소기업 전문 IT</p>
              </h1>
              <h1 className="text-center text-5xl sm:text-6xl mb-4">
                아웃소싱 전문가
              </h1>
            </div>
          </div>
        </div>

        <p className="text-2xl mb-8">
          운영 효율화를 위한 조직 맞춤형 백오피스 운영 시스템을 개발,
          제공합니다.
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
