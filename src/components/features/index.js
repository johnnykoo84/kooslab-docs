import Heading from "@theme/Heading";
import featuresData from "@site/src/data/features";

function Feature({ imgSrc, title, description }) {
  return (
    <div className="bg-gray-700 border-gray-700 rounded-md shadow-lg p-4 m-4">
      <Heading as="h1" className="text-2xl font-bold mb-4">
        {title}
      </Heading>
      <p className="text-xl text-left">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="bg-primary p-8 md:p-24 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">WHY 쿠스랩</h1>
      <p className="text-2xl text-center mb-8">
        누구보다 중소기업 고객들을 이해할 수 있는 경험을 쌓아왔습니다.
      </p>
      <div className="flex flex-col md:flex-row">
        <img
          className="md:w-1/2 p-8 md:p-24 object-contain min-w-256"
          src="/img/interview.png"
          alt="profile"
        />
        <div className="md:w-1/2 flex flex-col justify-center">
          {featuresData.map((props, idx) => (
            <div key={idx} className="mx-2 my-2">
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
