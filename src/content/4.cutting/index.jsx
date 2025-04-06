import "./style.css";
export default function Cutting() {
  return (
    <div id="plasmaCutting">
      <div id="pC_leftside">
        <h2> The Full Plasma Cutting Service </h2>
        <div id="pC_list">
          <div>
            <h3> Full Service </h3>
            <ul>
              <li> Draft </li>
              <li> Design </li>
              <li> Render </li>
              <li> Cutting </li>
              <li> Manafacture </li>
              <li> Fabrication </li>
            </ul>
          </div>
        </div>
        <div id="pC_img">
          <img src="./assets/images/hypertherm-inc-logo-vector.png" />
        </div>
      </div>
      <div id="pC_rightside">
        <div id="pC_rs_topLevel">
          <section>
            <div>
              <h2> Rapid turnaround </h2>
              <p>
                {" "}
                Using the latest plasma cutting machines, highly accurate, quick
                turn parts in as fast as 10 days.
              </p>
            </div>
          </section>
          <section>
            <div>
              <h2> Precision & QC </h2>
              <p>
                {" "}
                Twoshires Fabrication offers various tolerance options in
                accordance with ISO 2768 (standard, fine) and ISO 286 (Grades 8,
                7, 6). Our QA department performs strong quality assurance. We
                are ISO 9001 certified.
              </p>
            </div>
            <div id="enquireNow">
              <button> Enquire now </button>
            </div>
          </section>
        </div>
        <div id="pC_rs_bottomLevel">
          <section>
            <div>
              <h2>Custom Finishes</h2>
              <p>
                {" "}
                Plasma cut parts can be post-processed upon request with
                coatings, heat-treatments and others.
              </p>
            </div>
          </section>
          <section>
            <div>
              <h2> Material Selection </h2>
              <p>
                Choose from a variety of sheet metals across a wide range of
                strength, conductivity, weight, and corrosion-resistance.
              </p>
            </div>
            <div id="MaterialImgcontainer">
              <img
                src="./assets/images/0feb7f01-92ad-44fe-ba66-26e2894531d0.JPG"
                alt=""
                id="MaterialImg1"
              />
              <img
                src="./assets/images/PHOTO-2024-11-15-20-09-12.jpg"
                alt=""
                id="MaterialImg2"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
