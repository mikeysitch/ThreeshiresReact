import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Services() {
  const images = [
    "/assets/images/9ee06405-5b28-4471-b0db-f755869565b1.JPG",
    "/assets/images/PHOTO-2023-10-14-18-55-15.jpg",
    "/assets/images/1fdba7d3-9f04-45db-9d5c-60ec909ffa9e.JPG",
  ];

  return (
    <div className="w-full bg-white py-16 px-6 flex flex-col gap-10" id="services">
      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Sheet Metal Fabrication Specialists since 2001
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            NC plasma cutting, plate rolling & press brake. Bespoke Fabrications
            of Cheshire are a family-run business with over 70 years of combined
            experience in the steel fabrication industry. We operate nationwide,
            specializing in steel beams, sheet metal, and all other forms of
            steel construction. Fabrications Derby.
          </p>
        </div>

        {/* Carousel */}
        <div className="lg:w-1/2 w-full max-w-[500px] rounded-xl shadow-md overflow-hidden">
          <Fade duration={4000} arrows={false} pauseOnHover={false}>
            {images.map((src, idx) => (
              <div key={idx} className="w-full h-[300px]">
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

      {/* CTA Button */}
      <div className="flex justify-center">
        <h1 className="text-5xl md:text-5xl font-bold text-blue-600">
          Our Services
        </h1>
      </div>
    </div>
  );
}
