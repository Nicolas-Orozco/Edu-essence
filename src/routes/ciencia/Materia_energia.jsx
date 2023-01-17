import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
function Materia_energia() {
  return (
    <Layout>
      <h1 className="title">Materia y energía</h1>
      <p>
        "La materia es la sustancia que forma los cuerpos físicos. En otras
        palabras, se trata de todo aquello que tiene masa y que ocupa un lugar
        en el espacio. Al hablar de masa nos estamos refiriendo a la materia que
        tiene un cuerpo, por lo que se trata de una magnitud fundamental a la
        hora de entender y trabajar con la materia".
        <br />
        [...]"La definición clásica de la energía es la capacidad para realizar
        un trabajo. En este sentido, la energía deberá ser entendida como la
        capacidad de los cuerpos a la hora de realizar un trabajo, que podrá
        implicar un cambio de posición de cuerpos (pasando de estado estático a
        uno móvil, al revés, o cambiando su velocidad de desplazamiento), o un
        cambio de estado de los cuerpos, por ejemplo, pasar de líquido a
        gaseoso".
      </p>
      <a
        href="https://www.universidadviu.com/es/actualidad/nuestros-expertos/que-son-materia-y-energia"
        className="link"
      >
        https://www.universidadviu.com/es/actualidad/nuestros-expertos/que-son-materia-y-energia
      </a>
      <h2 className="subtitle">Gráficos</h2>
      <img
        src="https://sites.google.com/site/100ciasquimicas/_/rsrc/1503816893777/bloque-2-interrelaciones-entre-materia-y-energia/materia.png"
        alt="Interrelaciones entre materia y energia - QUIMICA"
        width="500"
      />
      <a
        href="https://sites.google.com/site/100ciasquimicas/_/rsrc/1503816893777/bloque-2-interrelaciones-entre-materia-y-energia/materia.png"
        className="link mb-10"
      >
        https://sites.google.com/site/100ciasquimicas/_/rsrc/1503816893777/bloque-2-interrelaciones-entre-materia-y-energia/materia.png
      </a>
      <img
        src="https://organizadoresgraficos.net/wp-content/uploads/2021/04/ejemplo-organizador-grafico-energia.jpg"
        alt="Organizador gráfico sobre los Tipos de Energía"
        width="500"
      />
      <a
        href="https://organizadoresgraficos.net/wp-content/uploads/2021/04/ejemplo-organizador-grafico-energia.jpg"
        className="link mb-10"
      >
        https://organizadoresgraficos.net/wp-content/uploads/2021/04/ejemplo-organizador-grafico-energia.jpg
      </a>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JXNVG3mAKHw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          className="link"
          href="https://www.youtube.com/@tebaevvideoseducativos3399"
        >
          TEBAEV VIDEOS EDUCATIVOS
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/boJpgNIY54Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a className="link" href="https://www.youtube.com/@EsCiencia.">
          Es Ciencia
        </a>
      </p>
      <Resources>
        <li>
          <a
            href="https://www.universidadviu.com/es/actualidad/nuestros-expertos/que-son-materia-y-energia"
            className="link"
          >
            Dr. Pedro Cassiano Viana Ribeiro Monteiro Almeida - ¿Qué son materia
            y energía?
          </a>
        </li>
        <li>
          <a
            href="https://sites.google.com/site/100ciasquimicas/bloque-2-interrelaciones-entre-materia-y-energia"
            className="link"
          >
            BLOQUE 2: Interrelaciones entre materia y energia
          </a>
        </li>
        <li>
          <a
            href="https://organizadoresgraficos.net/organizador-grafico-sobre-los-tipos-de-energia/"
            className="link"
          >
            Uriel en abril 13, 2021. ORGANIZADOR GRÁFICO SOBRE LOS TIPOS DE
            ENERGÍA
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=JXNVG3mAKHw"
            className="link"
          >
            TEBAEV VIDEOS EDUCATIVOS: Materia y energia
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=boJpgNIY54Y"
            className="link"
          >
            Tipos de Energía, por Es Ciencia
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Materia_energia;
