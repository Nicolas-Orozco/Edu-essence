import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
import useTitle from "../../hooks/useTitle";

function Estados_panandinos() {
  useTitle("Estados panandinos");
  return (
    <Layout>
      <h1 className="title">Estados panandinos</h1>
      <p className="text-md lg:text-lg">
        "Las investigaciones arqueológicas precolombinas sobre América señalan a
        Mesoamérica y los Andes centrales y sureños, actuales repúblicas andinas
        del Ecuador, Perú y Bolivia, como dos de las áreas nucleares que
        generaron los procesos culturales más complejos. Aquí la ciudad y el
        estado son las expresiones culturales y políticas más logradas en su
        evolución. Las otras regiones, próximas o distantes a estas dos áreas,
        alcanzaron poca complejidad, siendo el curacazgo en muy pocos lugares la
        organización política más alta y, más bien, la banda y la tribu, las
        formas más comunes de organización social y política".
      </p>
      <hr />
      <a
        href="https://arqueologiadelperu.com/los-estados-panandinos-wari-y-tiwanaku/"
        className="link"
      >
        https://arqueologiadelperu.com/los-estados-panandinos-wari-y-tiwanaku/
      </a>
      <h2 className="subtitle">Gráficos</h2>
      <img
        src="https://i0.wp.com/arqueologiadelperu.com/wp-content/uploads/2020/01/territorios-wari-tiwanaku.jpg?resize=330%2C330&ssl=1"
        width="500"
      />
      <a
        href="https://i0.wp.com/arqueologiadelperu.com/wp-content/uploads/2020/01/territorios-wari-tiwanaku.jpg?resize=330%2C330&ssl=1"
        className="link mb-10"
      >
        Mapa de territorios Wari y Tiwanaku. (Basado en Lanning 1967, Lumbreras
        1969 y Moseley 1992).
      </a>
      <iframe
        src="//www.slideshare.net/slideshow/embed_code/key/IssIL0dLVZ11IP"
        width="595"
        height="485"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
      >
        {" "}
      </iframe>{" "}
      <div>
        {" "}
        <strong>
          {" "}
          <a
            href="//www.slideshare.net/RonaldMiguelRiveraCueva/periodo-de-los-estados-panandinos-u-horizonte-medio"
            title="Periodo de los estados panandinos u horizonte medio"
            target="_blank"
            className="link"
          >
            Periodo de los estados panandinos u horizonte medio
          </a>{" "}
        </strong>{" "}
        de{" "}
        <strong>
          <a
            href="//www.slideshare.net/RonaldMiguelRiveraCueva"
            target="_blank"
            className="link"
          >
            Ronald
          </a>
        </strong>{" "}
      </div>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bNECoMGeM78"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          href="https://www.youtube.com/@CreciendoconlaHistoria"
          className="link"
        >
          Creciendo con la historia
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BgArUqYoRF8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          href="https://www.youtube.com/@carloschiroquealejandrolih6753"
          className="link"
        >
          Carlos Chiroque (Alejandro Li Hon)
        </a>
      </p>
      <Resources>
        <li>
          <a
            href="https://arqueologiadelperu.com/los-estados-panandinos-wari-y-tiwanaku/"
            className="link"
          >
            Los Estados Panandinos: Wari y Tiwanaku | Arqueología del Perú
          </a>
        </li>
        <li>
          <a
            href="//www.slideshare.net/RonaldMiguelRiveraCueva/periodo-de-los-estados-panandinos-u-horizonte-medio"
            title="Periodo de los estados panandinos u horizonte medio"
            target="_blank"
            className="link"
          >
            Periodo de los estados panandinos u horizonte medio
          </a>{" "}
          de{" "}
          <a
            href="//www.slideshare.net/RonaldMiguelRiveraCueva"
            target="_blank"
            className="link"
          >
            Ronald
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=bNECoMGeM78"
            className="link"
          >
            Segundo Horizonte: Tiahuanaco y Wari, por Creciendo con la Historia
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=BgArUqYoRF8"
            className="link"
          >
            Sesión 13: Transformación panandina - Contenido informativo de
            Teoría de la Arquitectura y Miscelánea de Arte, Crítica y
            Literatura: Por Carlos Chiroque (Alejandro Li Hon)
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Estados_panandinos;
