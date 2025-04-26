import Header from "../../header/header";

export default function ServicesMobile () {
  return (
    <div id="services_mobile">
      <div id="centered">
        <div id="services_mb_content">

          <div className="p-4">
             <Header />
          </div>
         
          <div className="flex flex-col items-center justify-center">
            <h2 className="bg-blue-300 p-3 text-xl"> Sheet Metal Fabrication 1</h2>
            <h3> Specialists since 2001 </h3>
          </div>
          <div className="my-4">
            <p>
              NC plasma cutting, Plate Rolling & Press break Bespoke
              Fabrications of Cheshire are a family run business with over 70
              years of combined experience in the steel fabrication industry. We
              operate nationwide specializing in steel beams, sheet metal and
              all other forms of steel construction.  Fabrications Derby.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
