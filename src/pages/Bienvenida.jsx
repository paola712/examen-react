import mundial1 from "../assets/mundial1.jpg";
import mundial2 from "../assets/mundial2.jpg";
import mundial3 from "../assets/mundial3.jpg";
import mundial4 from "../assets/mundial4.jpg";
import mundial5 from "../assets/mundial5.jpg";

function Bienvenida() {
  return (
    <div>

      <h4 className="text-center mb-3">
        Inauguración Mundial 2026
      </h4>

      <div
        id="carouselMundial"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src={mundial1}
              className="d-block w-100"
              alt=""
              height="300"
            />
          </div>

          <div className="carousel-item">
            <img
              src={mundial2}
              className="d-block w-100"
              alt=""
              height="300"
            />
          </div>

          <div className="carousel-item">
            <img
              src={mundial3}
              className="d-block w-100"
              alt=""
              height="300"
            />
          </div>

          <div className="carousel-item">
            <img
              src={mundial4}
              className="d-block w-100"
              alt=""
              height="300"
            />
          </div>

          <div className="carousel-item">
            <img
              src={mundial5}
              className="d-block w-100"
              alt=""
              height="300"
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMundial"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselMundial"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </div>
  );
}

export default Bienvenida;