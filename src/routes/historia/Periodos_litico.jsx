import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
import useTitle from "../../hooks/useTitle";

function Periodos_litico() {
  useTitle("Periodos lítico y arcaico");
  return (
    <Layout>
      <h1 className="title">Periodos lítico y arcaico</h1>
      <p className="text-md lg:text-lg">
        "Lítico: Fue un periodo en el que el hombre llegado al Perú se dedico a
        la caza y recolección para poder sobrevivir. <br />
        Arcaico: Periodo de transición en el que el hombre pasa a desarrollar
        una economía productora al descubrir la agricultura y ganadería". <br />{" "}
        (Recurso es el link de abajo)
      </p>
      <h2 className="subtitle">Gráficos</h2>
      <iframe
        src="//www.slideshare.net/slideshow/embed_code/key/bI9Sv5ZI4Zm3u5"
        width="595"
        height="485"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        allowfullscreen
      >
        {" "}
      </iframe>{" "}
      <div className="mb-10">
        {" "}
        <a
          href="//www.slideshare.net/cristihancachay/litico-arcaico"
          title="Litico, arcaico"
          target="_blank"
          className="link"
        >
          Litico, arcaico
        </a>{" "}
        de{" "}
        <a
          href="//www.slideshare.net/cristihancachay"
          target="_blank"
          className="link"
        >
          cristihancachay
        </a>{" "}
      </div>
      <div>
        <div>
          <a
            href="https://www.calameo.com/books/002310639127040959004"
            target="_blank"
          >
            PERIODOS LITICO Y ARCAICO
          </a>
        </div>
        <iframe
          src="//v.calameo.com/?bkcode=002310639127040959004"
          width="300"
          height="194"
          frameborder="0"
          scrolling="no"
          allowtransparency
          allowfullscreen
        ></iframe>
        <div>
          <a href="http://www.calameo.com/" className="link">
            Publish at Calameo
          </a>
        </div>
      </div>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2AThj9TlOaU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          href="https://www.youtube.com/@josemanuelbazalarchistoric8887"
          className="link"
        >
          Jose Manuel Bazalar [Chistorico]
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KjZGeIz9eGU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          href="https://www.youtube.com/@prof.sonyvalenciapena-hist3757"
          className="link"
        >
          PROF. SONY VALENCIA PEÑA - HISTORIA Y GEOGRAFIA
        </a>
      </p>
      <Resources>
        <li>
          <a href="https://www.slideshare.net/cristihancachay" className="link">
            Lítico, arcaico de cristihancachay
          </a>
        </li>
        <li>
          <a
            href="https://es.calameo.com/read/002310639127040959004?page=1"
            className="link"
          >
            Periodos lítico y arcaico por Urbano Quispe Flores - 5to Katiuska
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=2AThj9TlOaU"
            className="link"
          >
            Lítico y arcaico en el Perú - José Manuel Bazalar
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=KjZGeIz9eGU"
            className="link"
          >
            PERIODO LÍTICO - ARCAICO/Historia del Perú por PROF. SONY VALENCIA
            PEÑA - HISTORIA Y GEOGRAFIA
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Periodos_litico;
