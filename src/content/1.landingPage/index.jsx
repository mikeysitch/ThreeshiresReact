import LinkButton from "../../components/LinkButton";

export default function HeroFeature() {
  return (
    <div
      className="relative bg-cover bg-center min-h-[300px] md:min-h-[500px] flex flex-col"
      style={{
        backgroundImage: "url('/assets/images/b786ae40-b78c-4dfc-bfed-b5062350cd16.JPG')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col max-w-4xl mx-auto text-white flex-grow">
        <div className="mt-16 px-4 md:px-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-2xl leading-tight text-center md:text-left">
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
        </div>

        {/* Button fixed at bottom */}
        <div className="mb-12 flex justify-center mt-5">
          <LinkButton href="#contact" mobileHref="#contact_mobile" className="p-8">
            Contact Us
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
