import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Services() {
  const images = [
    "/assets/images/9ee06405-5b28-4471-b0db-f755869565b1.JPG",
    "/assets/images/PHOTO-2023-10-14-18-55-15.jpg",
    "/assets/images/1fdba7d3-9f04-45db-9d5c-60ec909ffa9e.JPG",
  ];

  return (
    <div className="w-full mt-[30px] bg-white py-16 px-6 flex flex-col gap-10" id="services">

      <div className="absolute left-0 w-full h-[430px] bg-black"></div>

      {/* Content Section */}
      <div className="z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center ">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-4 md:flex md:flex-col md:items-center md:text-center sm:py-8 md:p-0 md:pt-8 lg:pt-0 lg:relative bottom-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary relative">
            Sheet Metal Fabrication 
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary relative bottom-15">
          Specialists since 2001
          </h3>
          <p className="text-lg text-white leading-relaxed md:py-4 w-full md:w-1/2 lg:w-2/3 py-6">
            NC plasma cutting, plate rolling & press brake. Bespoke Fabrications
            of Cheshire are a family-run business with over 70 years of combined
            experience in the steel fabrication industry. We operate nationwide,
            specializing in steel beams, sheet metal, and all other forms of
            steel construction. Fabrications Derby.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative bottom-0 md:bottom-7 lg:bottom-10 left-0 lg:w-1/2 w-full max-w-[500px] rounded-xl shadow-md overflow-hidden">
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
    </div>
  );
}
