import ServiceItem from "@site/src/components/Services/ServiceItem";
import services from "@site/src/data/services.json";

export default function Services() {
  return (
    <div className="p-8 md:p-24 text-center mb-24">
      <h1 className="text-3xl sm:text-5xl text-bold mb-12">
        쿠스랩은 어떤 서비스를 제공하나요?
      </h1>
      {services.map((service) => (
        <ServiceItem
          imgSrc={service.imgSrc}
          title={service.title}
          desc_1={service.desc_1}
          desc_2={service.desc_2}
        />
      ))}
    </div>
  );
}
