import LinkButton from "../../components/LinkButton";

export default function HeroFeature() {
  return (
    <div
      className="relative bg-cover bg-center min-h-[500px] md:min-h-[700px] flex flex-col justify-between px-6 py-10"
      style={{
        backgroundImage: "url('/assets/images/b786ae40-b78c-4dfc-bfed-b5062350cd16.JPG')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-6 max-w-4xl mx-auto text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-2xl leading-tight">
          Cutting Edge Metal Fabrications,
          <br />
          Laser Cutting Services & Design
        </h2>

        <div className="mt-6 text-center md:text-left text-lg md:text-xl font-light text-white/90">
          <p>
            Specialising in Sheet Metal Fabrication, Precision Machining,
            Project Management,
          </p>
          <p className="mt-2">Universal Fabrications</p>
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
            <LinkButton href="#contact" mobileHref="#contact_mobile">
              Contact Us
            </LinkButton>
        </div>
      </div>
    </div>
  );
}
