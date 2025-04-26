import "./style.css";
export default function WeldingMobile () {
  return (
    <div className="w-full" id="welding_mobile">
      <div id="bW_mobile" className="py-9 px-5">
        <div id="title" className="text-white text-2xl text-center p-4 mb-4">
          <h2> Custom Fabrication </h2>
        </div>
        <div className="blackBox text-white" id="bW_ls_explanation">
          <p className="text-xl">
            Custom welding from a team of professionals Whether you need bespoke
            machine parts made for your factory or a set of gates and railings
            created, our custom welding services are available to domestic and
            commercial clients across the North West.
          </p>
        </div>

        <div class="p-6 mt-4 bg-gray-100 flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
                <div class="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">Available Processes</h3>
                <ul class="space-y-2 text-gray-600 list-disc list-inside">
                    <li>MIG Welding</li>
                    <li>TIG Welding</li>
                    <li>Synergic MIG</li>
                    <li>Stud Welding</li>
                    <li>Weld Dressing</li>
                    <li>Polishing</li>
                </ul>
                </div>

                <div class="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">Metal Grades</h3>
                <ul class="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Stainless Steel</li>
                    <li>Titanium</li>
                    <li>Mild Steel</li>
                    <li>Zinc</li>
                    <li>Aluminium</li>
                </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
