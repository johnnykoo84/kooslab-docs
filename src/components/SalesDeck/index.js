export default function SalesDeck() {
  return (
    <div className="flex flex-col items-center mb-12 md:px-48">
      <h1 className="text-4xl font-bold mb-4">쿠스랩 서비스 소개서</h1>
      <iframe
        src="https://slides.com/ilmokoo/code/embed"
        title="Code"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        className="sm:w-2/3 h-48 sm:h-96 p-2"
      ></iframe>
    </div>
  );
}
