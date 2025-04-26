
export default function ContactMap () {
  return (
    <div className="w-full flex flex-col mt-12" id="contact">
      {/* Contact Title Section */}
      <section className="text-center text-white bg-black py-6 space-y-2 text-3xl font-bold">
        <h3 className="bg-blue-500 inline-block px-4 py-1 rounded-md">Contact &</h3>
        <h3>Location</h3>
      </section>

      {/* Map + Info Section */}
      <section className="flex flex-col md:flex-row min-h-[500px] bg-gray-100">
        {/* Map Image */}
        <div className="w-full md:w-3/5 flex justify-center items-center p-6">
          <img
            src="/assets/images/Screenshot 2024-11-21 at 14.21.18.png"
            alt="Map"
            className="h-[320px] w-[85%] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Map Info */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center p-6 space-y-4">
            <img
              src="/assets/images/dc5ca6fb-1c54-45a1-b3c7-fa31f12c31c2.JPG"
              alt="Business Logo"
              className="h-24 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Holme Farm, Marsh Lane, Chester, CH2 4NR
            </h3>
            <p>
              <span className="font-bold">Opening Hours:</span> <br />
              Monday - Friday: 9am - 5pm <br />
              Saturday: 10am - 4pm <br />
              Sunday: Closed
            </p>
            <p>
              Enquire at twoshires.fabrication@outlook.com <br />
              or call 07725910601 
            </p>
            <p>
              <span className="font-bold">Two Shires Fabrication</span> is a family-run business with over 20 years of experience in the fabrication industry. <br />
              We pride ourselves on our quality workmanship and customer service. Whether you're looking for bespoke metalwork, repairs, or custom fabrication,
            </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-blue-500 text-white p-6 flex flex-col md:flex-row justify-around items-center gap-6 text-center">
        <div>
          <h3 className="text-lg font-bold">Email</h3>
          <h4 className="mt-2 font-light">twoshires.fabrication@outlook.com</h4>
        </div>
        <div>
          <h3 className="text-lg font-bold">Phone</h3>
          <h4 className="mt-2 font-light">07725910601</h4>
        </div>
        <div>
          <h3 className="text-lg font-bold">Address</h3>
          <h4 className="mt-2 font-light">
            Holme Farm, Marsh Lane, Ince, Chester CH2 4NR
          </h4>
        </div>
      </section>
    </div>
  );
}
