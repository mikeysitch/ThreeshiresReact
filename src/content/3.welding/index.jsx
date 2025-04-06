import "./style.css";
export default function Welding() {
  return (
    <div id="businessWelding">
      <div id="bW_leftside">
        <div id="title">
          <h2> Custom Fabrication </h2>
        </div>
        <div class="blackBox" id="bW_ls_explanation">
          <p>
            Custom welding from a team of professionals Whether you need bespoke
            machine parts made for your factory or a set of gates and railings
            created, our custom welding services are available to domestic and
            commercial clients across the North West.
          </p>
        </div>
        <div id="images">
          <img
            src="./assets/images/1fdba7d3-9f04-45db-9d5c-60ec909ffa9e.JPG"
            alt="metal cow"
            class="img"
          />
          <img
            src="./assets/images/d7020cad-3837-4d9f-9b5d-7aaeb7fcca5b.JPG"
            alt="digger attachment"
            class="img"
          />
          <img
            src="./assets/images/PHOTO-2023-10-14-18-55-15.jpg"
            alt="tractor attachment"
            class="img"
          />
        </div>
      </div>
      <div id="bW_rightside">
        <div id="bW_rs_middlecontainer">
          <div class="process_list">
            <h3> Available processes </h3>
            <ul>
              <li> MIG Welding </li>
              <li> TIG Welding </li>
              <li> Synergic MIG</li>
              <li> Stud Welding</li>
              <li> Weld Dressing</li>
              <li> Polishing</li>
            </ul>
          </div>
          <div class="process_list">
            <h3> Metal Grades </h3>
            <ul>
              <li> Stainless Steel </li>
              <li> Titanium </li>
              <li> Mild Steel </li>
              <li> Zinc</li>
              <li> Aluminium </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="./assets/images/19307468-e7ad-49f4-821f-2f77fa3dab76.JPG"
            id="process_img"
          />
        </div>
      </div>
    </div>
  );
}
