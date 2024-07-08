import Link from "@docusaurus/Link";

export default function HomepageHeader() {
  return (
    <header className="bg-blue-500 p-8 sm:p-12 mb-8">
      <div className="text-center">
        <h1 className="text-center text-5xl sm:text-6xl text-white mb-4">
          아웃소싱 개발
        </h1>
        <div className="flex flex-col md:flex-row justify-center">
          <h1 className="text-center text-5xl sm:text-6xl text-white mb-4 md:mr-4">
            믿을만한 파트너
          </h1>
          <h1 className="text-center text-5xl sm:text-6xl text-white mb-4">
            찾기 힘드시죠
          </h1>
        </div>

        <p className="text-2xl text-white mb-8">
          적극적인 소통과 유연한 요구사항 반영으로 인하우스 팀처럼
          개발해드립니다
        </p>
        <div className="flex justify-center mb-8">
          <Link
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg"
            to="/blog"
          >
            블로그 읽기
          </Link>
        </div>
      </div>
    </header>
  );
}
