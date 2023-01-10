import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
function Conquista_espacio() {
  return (
    <Layout>
      <h1 className="title">La conquista del espacio</h1>
      <p>
        El 21 de julio de 1969 el astronauta Michael Collins observó la primera
        caminata lunar desde el módulo de mando del Apollo 11, estacionado en el
        Mar de la Tranquilidad. No tuvo la fortuna de pisar la superficie de la
        Luna como Neil Armstrong y Buzz Aldrin, ni su nombre ha gozado de
        protagonismo en la historia mundial. Sin embargo se debe recordar que
        Collins fue parte de la legendaria misión Apolo 11, que consagró el
        anhelo de alcanzar y pisar la Luna, dando “un pequeño paso para el
        hombre, pero un gran salto para la humanidad”.
        <hr />
        <a
          href="https://www.tierraadentro.cultura.gob.mx/la-conquista-del-espacio-y-la-idea-de-la-frontera/"
          className="link"
        >
          https://www.tierraadentro.cultura.gob.mx/la-conquista-del-espacio-y-la-idea-de-la-frontera/
        </a>
      </p>
      <h2 className="subtitle">Gráficos</h2>
      <img
        src="https://www.elheraldo.co/sites/default/files/styles/width_1180/public/files_infografia/2019/07/19/la_historia_de_la_conquista_espacial.jpg?itok=InNtZknI"
        alt="La historia de la conquista espacial en un organizador"
        width="700"
      />
      <a
        href="https://www.elheraldo.co/sites/default/files/styles/width_1180/public/files_infografia/2019/07/19/la_historia_de_la_conquista_espacial.jpg?itok=InNtZknI"
        className="link break-all mb-10"
      >
        https://www.elheraldo.co/sites/default/files/styles/width_1180/public/files_infografia/2019/07/19/la_historia_de_la_conquista_espacial.jpg?itok=InNtZknI
      </a>
      <iframe
        src="https://prezi.com/p/embed/pdyilkcfc-s9/"
        id="iframe_container"
        frameborder="0"
        webkitallowfullscreen=""
        mozallowfullscreen=""
        allowfullscreen=""
        allow="autoplay; fullscreen"
        height="315"
        width="560"
      ></iframe>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZtD9Rbqs5zg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/watch?v=ZtD9Rbqs5zg" className="link">
          Encuentro de divulgación
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-hnF_JgDLBU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@telemadrid" className="link">
          Telemadrid
        </a>
      </p>
      <Resources>
        <li>
          <a
            href="https://www.tierraadentro.cultura.gob.mx/la-conquista-del-espacio-y-la-idea-de-la-frontera/"
            className="link"
          >
            Ayamel Fernández García: LA CONQUISTA DEL ESPACIO Y LA IDEA DE LA
            FRONTERA
          </a>
        </li>
        <li>
          <a
            href="https://www.elheraldo.co/infografias/la-historia-de-la-conquista-espacial-651023"
            className="link"
          >
            AFP Agencia: La historia de la conquista espacial (infografía)
          </a>
        </li>
        <li>
          <a
            href="https://prezi.com/pdyilkcfc-s9/la-conquista-del-espacio/"
            className="link"
          >
            Marcela Vazquez: La Conquista del Espacio (Prezi)
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=ZtD9Rbqs5zg"
            className="link"
          >
            Encuentro de divulgación: La carrera espacial y la conquista del
            espacio.
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=-hnF_JgDLBU"
            className="link"
          >
            ConCiencia: La conquista del espacio
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Conquista_espacio;
