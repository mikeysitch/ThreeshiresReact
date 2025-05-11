export default function Footer() {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center bg-primary text-white p-6 gap-6 md:gap-0">
        <div className="text-center">
          <h3 className="text-lg font-bold">Email:  </h3>
          <h4 className="mt-2 font-light">twoshires.fabrication@outlook.com</h4>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">Phone</h3>
          <h4 className="mt-2 font-light">07725910601</h4>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">Address</h3>
          <h4 className="mt-2 font-light">
            Holme Farm, Marsh Lane, Ince, Chester CH2 4NR
          </h4>
        </div>
      </section>
    );
}