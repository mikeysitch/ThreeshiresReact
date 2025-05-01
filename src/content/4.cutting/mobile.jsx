import LinkButton from "../../components/LinkButton";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function MaterialCarousel() {
  const images = [
    "/assets/images/0feb7f01-92ad-44fe-ba66-26e2894531d0.JPG",
    "/assets/images/PHOTO-2024-11-15-20-09-12.jpg",
  ];

  return (
    <div className="relative mt-8">
      <Fade duration={2500} arrows={true} pauseOnHover={false}>
        {images.map((src, idx) => (
          <div key={idx} className="flex justify-center">
            <img
              src={src}
              alt={`Material ${idx + 1}`}
              className="w-2/3 h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
}


export default function CuttingMobile() {
    return (
      <div className="flex flex-col lg:flex-row w-full  text-white bg-black" id="cutting_mobile">
        {/* Left Side */}
        <div className="w-full lg:w-2/5 p-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400">
            The Full Plasma Cutting Service
          </h2>
  
          <div className="bg-gray-900 border-b-4 border-blue-500 rounded-xl p-4">
            <h3 className="text-2xl font-semibold text-center bg-blue-500 rounded-md py-2 mb-4">
              Full Service
            </h3>
            <ul className="space-y-2 text-lg text-center">
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
              src="./assets/images/hypertherm-inc-logo-vector.png"
              alt="Hypertherm Logo"
              className="w-1/2 h-20 object-contain"
            />
          </div>
        </div>
  
        {/* Right Side */}
        <div className="w-full lg:w-3/5 flex flex-col">
  
          {/* Top Level */}
          <div
            className="flex flex-col gap-6 p-6 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('../../../public/assets/images/imageedit_3_5213956773.gif')",
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
                  accordance with ISO 2768 and ISO 286. Our QA department ensures
                  quality and we are ISO 9001 certified.
                </p>
                <div className="flex justify-end mt-4">
                      <LinkButton href="#contact" mobileHref="#contact_mobile">
                         Enquire Now
                      </LinkButton>
                </div>
              </div>
            </section>
          </div>
  
          {/* Bottom Level */}
          <div className="bg-blue-500 text-white p-6 space-y-6">
            <section className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold">Custom Finishes</h2>
                <p className="mt-2">
                  Plasma cut parts can be post-processed upon request with
                  coatings, heat-treatments, and others.
                </p>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold">Material Selection</h2>
                <p className="mt-2">
                  Choose from a variety of sheet metals with different strengths,
                  weights, and corrosion resistance.
                </p>
                <MaterialCarousel />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  