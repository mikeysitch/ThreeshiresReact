import Footer from "../../components/footer/index";

export default function ContactMapMobile() {
  return (
    <div className="w-full flex flex-col mt-12" id="contact_mobile">
      {/* Title Section */}
      <section className="text-center text-white bg-black py-6 space-y-2 text-3xl font-bold p-3">
        <h3 className="bg-primary inline-block px-4 py-3 w-full">Contact &</h3>
        <h3>Location</h3>
      </section>

      {/* Map Section */}
      <section className="flex flex-col md:flex-row min-h-[500px] bg-white">
        {/* Map Image */}
        <div className="w-full md:w-3/5 flex justify-center items-center p-6">
          <img
            src="./assets/images/Screenshot 2024-11-21 at 14.21.18.png"
            alt="Map"
            className="w-[85%] h-[320px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Map Info */}
        <div className="flex flex-col items-center justify-center gap-4 p-6 md:w-2/5 ">
          <img
            src="./assets/images/dc5ca6fb-1c54-45a1-b3c7-fa31f12c31c2.JPG"
            alt="Logo"
            className="h-24 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Holme Farm, Marsh Lane, Chester, CH2 4NR
          </h3>
        </div>
      </section>

      {/* Contact Info */}
      <Footer />
    </div>
  );
}
