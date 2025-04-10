import "./style.css";
export default function HeroFeature() {
  return (
    <div id="hero-img">
      <div class="container">
        <h2 class="hero-text">
          Cutting Edge Metal Fabrications,
          <br />
          Laser Cutting Services & Design
        </h2>
        <div class="small-text">
          <p>
            {" "}
            Specialising in Sheet Metal Fabrication, Precision Machining,
            Project Management,
          </p>
          Universal Fabrications
        </div>
      </div>
      <div class="call_to_action">
        <button class="button">
          <a href="/contact">Contact us</a>
        </button>
      </div>
    </div>
  );
}
