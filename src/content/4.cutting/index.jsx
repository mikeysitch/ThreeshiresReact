import LinkButton from "../../components/LinkButton";

export default function Cutting() {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-black text-white" id="cutting">
      {/* Left Side */}
      <div className="w-full lg:w-2/5 p-6 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400">
          The Full Plasma Cutting Service
        </h2>

        <div className="bg-zinc-900 p-4 rounded-lg border-b-4 border-blue-500">
          <h3 className="text-2xl text-center font-semibold bg-blue-500 py-2 rounded mb-4">
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

      {/* Right Side */}
      <div className="w-full lg:w-3/5 flex flex-col">
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
              <div className="flex gap-4 mt-4">
                <img
                  src="/assets/images/0feb7f01-92ad-44fe-ba66-26e2894531d0.JPG"
                  alt="Material 1"
                  className="w-1/2 h-36 object-cover rounded-lg"
                />
                <img
                  src="/assets/images/PHOTO-2024-11-15-20-09-12.jpg"
                  alt="Material 2"
                  className="w-1/2 h-36 object-cover rounded-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
