import LinkButton from "../../components/LinkButton";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


export default function Cutting() {
  const images = [
    "/assets/images/9ee06405-5b28-4471-b0db-f755869565b1.JPG",
    "/assets/images/PHOTO-2023-10-14-18-55-15.jpg",
    "/assets/images/1fdba7d3-9f04-45db-9d5c-60ec909ffa9e.JPG",
  ];
  return (
    <div className="w-full flex flex-col lg:flex-row bg-black text-white" id="cutting">
      {/* Left Side */}
      <div className="w-full  p-6 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          The Full Plasma Cutting Service
        </h2>

        <div className="bg-zinc-900 p-4 rounded-lg border-b-4 border-primary">
          <h3 className="text-2xl text-center font-semibold bg-primary py-2 rounded mb-4">
            Full Service
          </h3>
          <ul className="space-y-2 text-center text-lg">
            <li>Draft</li>
            <li>Design</li>
            <li>Render</li>
            <li>Cutting</li>
            <li>Manufacture</li>
            <li>Fabrication</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/images/hypertherm-inc-logo-vector.png"
            alt="Hypertherm Logo"
            className="h-20 object-contain"
          />
        </div>
      </div>

      {/* middle Side */}
      <div className="w-full flex flex-col">
        {/* Top Level */}
        <div
          className="p-6 space-y-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/images/imageedit_3_5213956773.gif')",
          }}
        >
          <section className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-white">Rapid Turnaround</h2>
              <p className="mt-2 font-medium text-white">
                Using the latest plasma cutting machines, highly accurate, quick
                turn parts in as fast as 10 days.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-white">Precision & QC</h2>
              <p className="mt-2 font-medium text-white">
                Twoshires Fabrication offers various tolerance options in
                accordance with ISO 2768 (standard, fine) and ISO 286 (Grades 8,
                7, 6). Our QA department performs strong quality assurance. We
                are ISO 9001 certified.
              </p>
              <div className="flex justify-end mt-4">
                  <LinkButton href="#contact" className="bg-white text-black hover:bg-gray-200">
                    Enquire Now
                  </LinkButton>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Level */}
        <div className="bg-blue-500 text-white px-6 py-10 space-y-8">
          <section className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">Custom Finishes</h2>
              <p className="mt-2">
                Plasma cut parts can be post-processed upon request with
                coatings, heat-treatments and others.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold">Material Selection</h2>
              <p className="mt-2">
                Choose from a variety of sheet metals across a wide range of
                strength, conductivity, weight, and corrosion-resistance.
              </p>
            </div>
          </section>
        </div>
      </div>
      
      {/* right Side */}
      <div className="w-full rounded-xl shadow-md overflow-hidden p-5">
            <Fade duration={4000} arrows={false} pauseOnHover={false}>
              {images.map((src, idx) => (
                <div key={idx} className="w-full h-[520px]">
                  <img
                    src={src}
                    alt={`Service slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Fade>
      </div>
    </div>
  );
}
