import dj0 from "../imgs/radio_imgs/aviladj-1-768x1122.jpg";
import dj1 from "../imgs/radio_imgs/dj-Tigre-1-768x1122.jpg";
import dj2 from "../imgs/radio_imgs/djcarlos-768x1122.jpg";
import dj3 from "../imgs/radio_imgs/djfrancis-el-original-768x1122.jpg";
import dj4 from "../imgs/radio_imgs/djfrancisco-1-768x1122.jpg";
import dj5 from "../imgs/radio_imgs/djplomo-768x1122.jpg";
import dj6 from "../imgs/radio_imgs/micromix-768x1122.jpg";
import dj7 from "../imgs/radio_imgs/toritodj-768x1122.jpg";
export default function DJS() {
  return (
    <section>
      <h4>DJ's En Latin Music Radio Online</h4>
      <div className="djs">
        <img src={dj0} alt="DJ Avila, Jueves 8pm y Domingo 12pm" />
        <img src={dj1} alt="DJ Tigre, Viernes 4pm" />
        <img src={dj2} alt="DJ Carlos" />
        <img
          src={dj3}
          alt="DJ Francis, Lunes 4pm, Martes 4pm, Miercoles 4am, y Jueves 6am"
        />
        <img src={dj4} alt="DJ Francisco" />
        <img src={dj5} alt="DJ Plomo" />
        <img src={dj6} alt="DJ MicroMix" />
        <img
          src={dj7}
          alt="DJ Torito, Miercoles 8pm, Viernes 8pm, Sabado 8am, y Domingo 10am"
        />
      </div>
    </section>
  );
}
