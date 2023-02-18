import Layout from "../../components/Layout";
import Metodo_cientifico from "../../assets/metodo_cientifico.png";
import Resources from "../../components/Resources";
import useTitle from "../../hooks/useTitle";

function Metodologia() {
  useTitle("Metodología científica");
  return (
    <Layout>
      <h1 className="title">Metología científica</h1>
      <p className="text-md lg:text-lg">
        "La Metodología de la Investigación (M.I.) o Metodología de la
        Investigación Científica es aquella ciencia que provee al investigador
        de una serie de conceptos, principios y leyes que le permiten encauzar
        de un modo eficiente y tendiente a la excelencia el proceso de la
        investigación científica. El objeto de estudio de la M.I. Lo podemos
        definir como el proceso de Investigación Científica, el cual está
        conformado por toda una serie de pasos lógicamente estructurados y
        relacionados entre si. Este estudio se hace sobre la base de un conjunto
        de características y de sus relaciones y leyes".
        <br />
        <br />
        En la Educación Superior la Investigación Científica tiene doble
        función: contribuye a la formación del profesional y es, además una vía
        para resolver los problemas que se presentan en la sociedad. Con el
        objetivo de formar profesionales con un alto grado de competencia y
        desempeño en las universidades latinoamericanas es necesario lograr que
        los procesos que en ella se desarrollan alcancen la excelencia académica
        y la excelencia científica
      </p>
      <a
        href="https://www.unacar.mx/contenido/gaceta/ediciones/metodologia_investigacion.pdf"
        className="link"
      >
        https://www.unacar.mx/contenido/gaceta/ediciones/metodologia_investigacion.pdf
      </a>
      <h2 className="subtitle">Gráficos</h2>
      <img
        src={Metodo_cientifico}
        alt="Mapa del Método científico"
        width="500"
      />
      <a
        href="https://www.mindmeister.com/es/413896467/m-todo-cientifico?fullscreen=1"
        className="link mb-10"
      >
        https://www.mindmeister.com/es/413896467/m-todo-cientifico?fullscreen=1
      </a>
      <iframe
        src="//www.slideshare.net/slideshow/embed_code/key/LpLLo4aR1emSgG"
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
      <div>
        {" "}
        <a
          href="//www.slideshare.net/danieladebenedetto/mapa-conceptual-sobre-metodo-cientifico"
          title="Mapa conceptual sobre Método Científico "
          target="_blank"
          className="link"
        >
          Mapa conceptual sobre Método Científico{" "}
        </a>{" "}
        de{" "}
        <a
          href="//www.slideshare.net/danieladebenedetto"
          target="_blank"
          className="link"
        >
          Daniela De Benedetto
        </a>{" "}
      </div>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hJOypWMQqvs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@EsCiencia./about" className="link">
          Es ciencia
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4hfhDBAJ7bU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@AprenderaInvestigar" className="link">
          Aprender a Investigar
        </a>
      </p>
      <Resources>
        <li>
          <a
            href="https://www.unacar.mx/contenido/gaceta/ediciones/metodologia_investigacion.pdf"
            className="link"
          >
            Generalidades sobre Metodología de la Investigación Manuel E. Cortés
            Cortés Miriam Iglesias León
          </a>
        </li>
        <li>
          <a
            href="https://www.mindmeister.com/es/413896467/m-todo-cientifico?fullscreen=1"
            className="link"
          >
            MÉTODO CIENTIFICO por Maximo Peche
          </a>
        </li>
        <li>
          <a
            href="https://www.slideshare.net/danieladebenedetto?utm_campaign=profiletracking&utm_medium=sssite&utm_source=ssslideview"
            className="link"
          >
            Daniela De Benedetto - Mapa conceptual sobre el Método Científico
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=hJOypWMQqvs"
            className="link"
          >
            ¿Qué es el método científico? Planteamiento del problema,
            investigación, documental, hipótesis, experimentación, análisis de
            resultados, informe - Es ciencia
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=4hfhDBAJ7bU"
            className="link"
          >
            MÉTODOS CIENTÍFICOS 😲- ¿Cuáles son? - 🔥DEFINICIÓN - Aprender a
            investigar: por Juan Diego Mejía Henao
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Metodologia;
