import Image from "next/image";

const partners = [
  { src: "/images/partners/partner-1.svg", width: 167, height: 41 },
  { src: "/images/partners/partner-2.svg", width: 168, height: 41 },
  { src: "/images/partners/partner-3.svg", width: 170, height: 41 },
  { src: "/images/partners/partner-4.svg", width: 170, height: 41 },
  { src: "/images/partners/partner-5.svg", width: 169, height: 42 },
];

const PartnerLogos = () => {
  return (
    <section aria-label="Our partners" className="bg-shuttle-gray-50 py-12 md:py-20">
      <ul className="container-page flex flex-wrap items-end justify-center gap-x-8 gap-y-6 md:gap-x-18">
        {partners.map((p, i) => (
          <li key={p.src} className="shrink-0">
            <Image
              src={p.src}
              alt={`Partner logo ${i + 1}`}
              width={p.width}
              height={p.height}
              unoptimized
              className="h-8 w-auto sm:h-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnerLogos;
