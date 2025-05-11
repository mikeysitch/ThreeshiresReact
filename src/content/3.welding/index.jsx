export default function Welding() {
  return (
    <div>
      {/* CTA Button */}
      <div className="flex justify-center my-7 bg-primary">
        <h1 className="text-5xl md:text-4xl font-bold  py-4 px-8 rounded-md text-white">
          Our Services
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full" id="welding">
        {/* Left Side with Background Image */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center text-white flex flex-col py-7 gap-5"
          style={{ backgroundImage: "url('/assets/images/weld-grad.gif')" }}
        >
          <div className="p-5 flex flex-col justify-center items-center lg:items-start ">
            <h2 className="text-5xl font-bold drop-shadow-lg">Custom</h2>
            <h2 className="mt-2 text-5xl font-bold drop-shadow-lg">
              {" "}
              Fabrication{" "}
            </h2>
          </div>

          <div className="bg-black p-5 py-10 flex justify-center lg:justify-start">
            <p className="text-lg w-3/4 text-center lg:text-left">
              Custom welding from a team of professionals. Whether you need
              bespoke machine parts made for your factory or a set of gates and
              railings created, our custom welding services are available to
              domestic and commercial clients across the North West.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <img
              src="/assets/images/1fdba7d3-9f04-45db-9d5c-60ec909ffa9e.JPG"
              alt="metal cow"
              className="w-[30%] object-cover rounded-lg shadow"
            />
            <img
              src="/assets/images/d7020cad-3837-4d9f-9b5d-7aaeb7fcca5b.JPG"
              alt="digger attachment"
              className="w-[30%] object-cover rounded-lg shadow"
            />
            <img
              src="/assets/images/PHOTO-2023-10-14-18-55-15.jpg"
              alt="tractor attachment"
              className="w-[30%] object-cover rounded-lg shadow"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 p-6 space-y-6 ">
          <div className="bg-white shadow-md rounded-xlborder border-gray-200 gap-7 flex flex-col p-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Available Processes
              </h3>
              <ul className="space-y-1 text-gray-600  grid grid-cols-2 gap-y-1">
                <li>MIG Welding</li>
                <li>TIG Welding</li>
                <li>Synergic MIG</li>
                <li>Stud Welding</li>
                <li>Weld Dressing</li>
                <li>Polishing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Metal Grades
              </h3>
              <div className=" grid grid-cols-2 gap-y-1">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex flex-col gap-2">
                    Stainless Steel
                    <span className="text-gray-400">(304, 316, 4003)</span>
                  </li>

                  <li className="flex flex-col gap-2">
                    Mild Steel
                    <span className="text-gray-400"> S275 (hot rolled)</span>
                    <span className="text-gray-400"> S355 (hot rolled) </span>
                    <span className="text-gray-400"> CR4 , Zintec </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex flex-col">
                    Titanium
                    <span className="text-gray-400"> Brass , Copper </span>
                  </li>
                  <li>Zinc</li>
                  <li>Aluminium</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/images/19307468-e7ad-49f4-821f-2f77fa3dab76.JPG"
              alt="process visual"
              className="w-[40%] h-auto object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
