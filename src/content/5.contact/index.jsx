import "./style.css";
export default function ContactMap() {
  return (
    <div id="contactmap">
      <section id="contacttitle">
        <h3> Contact & </h3>
        <h3> Location </h3>
      </section>
      <section id="map">
        <div id="map_img_container">
          <img
            src="./assets/images/Screenshot 2024-11-21 at 14.21.18.png"
            alt="Map"
          />
        </div>
        <div id="map_info">
          <img
            src="./assets/images/dc5ca6fb-1c54-45a1-b3c7-fa31f12c31c2.JPG"
            alt=""
          />
          <h3> Holme Farm, Marsh Lane, Chester, CH2 4NR </h3>
          <button> Enquire Now </button>
        </div>
      </section>
      <section id="contactInfo">
        <div>
          <h3> Email </h3>
          <h4> twoshires.fabrication@outlook.com </h4>
        </div>
        <div>
          <h3> Phone </h3>
          <h4>07725910601 </h4>
        </div>
        <div>
          <h3> Address </h3>
          <h4>Holme Farm, Marsh Lane, Ince, Chester CH2 4NR</h4>
        </div>
      </section>
    </div>
  );
}
