import Header from "../../header/header";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function ServicesMobile() {
  const images = [
    "/assets/images/9ee06405-5b28-4471-b0db-f755869565b1.JPG",
    "/assets/images/PHOTO-2023-10-14-18-55-15.jpg",
    "/assets/images/weld-grad.gif",
  ];

  return (
    <>
      <section id="services_mobile" className="bg-white py-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Logo/Header */}
          <div className="p-6 flex justify-center">
            <Header />
          </div>

          {/* Title and Subtitle */}
          <div className="text-center px-6 pb-6 space-y-2">
            <h2 className="inline-block bg-blue-600 text-white text-2xl font-bold px-4 py-2 rounded-lg">
              Sheet Metal Fabrication
            </h2>
            <h3 className="text-lg italic text-gray-600">
              Specialists since 2001
            </h3>
          </div>

          {/* Description */}
          <div className="px-6 pb-8 space-y-4">
            <p className="text-gray-700 text-center mb-4">
              CNC plasma cutting, Plate Rolling & Press break
            </p>
            <p className="text-gray-700 text-center">
              Bespoke Fabrications of Cheshire are a family run business with over 70 years of combined experience in the steel fabrication industry. We operate nationwide specializing in steel beams, sheet metal, and all other forms of steel construction.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <div className="relative w-full py-4 mb-[70px]">
        {/* Black background stripe */}
        <div className="absolute inset-x-0 top-20 h-48 bg-black" />

        <div className="relative flex justify-center items-center">
          <div className="w-11/12">
            <Fade duration={1000} arrows={true} pauseOnHover={false}>
              {images.map((src, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="w-1/2 h-[300px]">
                    <img
                      src={src}
                      alt={`Service slide ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-md mx-auto"
                    />
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
