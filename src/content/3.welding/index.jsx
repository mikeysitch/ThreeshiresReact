export default function Welding() {
  return (
    <div className="flex flex-col lg:flex-row w-full" id="welding">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-black text-white p-6 flex flex-col gap-6">
        <div>
          <h2 className="text-4xl font-bold text-blue-400">Custom Fabrication</h2>
        </div>

        <div className="bg-zinc-900 p-4 rounded-lg shadow-md">
          <p className="text-white text-lg">
            Custom welding from a team of professionals. Whether you need bespoke
            machine parts made for your factory or a set of gates and railings
            created, our custom welding services are available to domestic and
            commercial clients across the North West.
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
      <div className="w-full lg:w-1/2 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Available Processes
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>MIG Welding</li>
              <li>TIG Welding</li>
              <li>Synergic MIG</li>
              <li>Stud Welding</li>
              <li>Weld Dressing</li>
              <li>Polishing</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Metal Grades
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Stainless Steel</li>
              <li>Titanium</li>
              <li>Mild Steel</li>
              <li>Zinc</li>
              <li>Aluminium</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/images/19307468-e7ad-49f4-821f-2f77fa3dab76.JPG"
            alt="process visual"
            className="w-[80%] h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
