export default function Player() {
  return (
    <section className="player">
      <div className="controls">
        {" "}
        <i className="fas fa-2x fa-step-backward"></i>
        <i className="fas fa-2x fa-fast-backward"></i>
        {/* <i className="fas fa-2x fa-backward"></i> */}
        <i className="fas fa-2x fa-play"></i>
        <i className="fas fa-2x fa-pause"></i>
        <i className="fas fa-2x fa-stop"></i>
        {/* <i className="fas fa-2x fa-forward"></i> */}
        {/* <i className="fas fa-2x fa-fast-forward"></i> */}
        <i className="fas fa-2x fa-step-forward"></i>
        <input type="range" min="0" max="1" step=".01" className="slider" />
      </div>
    </section>
  );
}
