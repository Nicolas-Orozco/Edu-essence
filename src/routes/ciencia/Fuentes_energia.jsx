import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
import useTitle from "../../hooks/useTitle";
function Materia_energia() {
  useTitle("Fuentes de energía y conservación del ambiente");
  return (
    <Layout>
      <h1 className="title">Fuentes de energía y conservación del ambiente</h1>
      <p className="text-lg">
        "Este tipo de energías contribuyen eficazmente en el cuidado del
        medioambiente, permitiendo un desarrollo sostenible sin que nuestro
        entorno se vea afectado negativamente. Estas energías, al contrario de
        las convencionales, no dejan una huella perjudicial en la naturaleza, la
        atmósfera y el conjunto del planeta".
        <br />
        <br />
        "El crecimiento de las energías renovables es totalmente imparable e
        imprescindible si queremos contrarrestar con eficacia situaciones que
        precisan de soluciones urgentes: el cambio climático, el efecto
        invernadero y el calentamiento global que está sufriendo el planeta y
        cuyos efectos son cada vez más devastadores".
        <br />
        <a
          href="https://lucera.es/blog/como-ayudan-las-energias-alternativas-al-medio-ambiente"
          className="link"
        >
          https://lucera.es/blog/como-ayudan-las-energias-alternativas-al-medio-ambiente
        </a>
      </p>
      <h2 className="subtitle">Gráficos</h2>
      <iframe
        src="//www.slideshare.net/slideshow/embed_code/key/wLHL6BemFHZrcU"
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
        <strong>
          {" "}
          <a
            href="//www.slideshare.net/Maripeach/la-energa-y-el-medio-ambiente"
            title="LA ENERGÍA Y EL MEDIO AMBIENTE"
            target="_blank"
          >
            LA ENERGÍA Y EL MEDIO AMBIENTE
          </a>{" "}
        </strong>{" "}
        de{" "}
        <strong>
          <a href="//www.slideshare.net/Maripeach" target="_blank">
            Maripeach
          </a>
        </strong>{" "}
      </div>
      <div>
        <div>
          <a
            href="https://www.calameo.com/books/006096048a131d0365b52"
            target="_blank"
          >
            Organizador grafico del Medio Ambiente
          </a>
        </div>
        <iframe
          src="//v.calameo.com/?bkcode=006096048a131d0365b52"
          width="300"
          height="194"
          frameborder="0"
          scrolling="no"
          allowtransparency
          allowfullscreen
        ></iframe>
        <div>
          <a href="http://www.calameo.com/">Publish at Calameo</a>
        </div>
      </div>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/FUqvuEJj3tM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@Aulachachi" className="link">
          Aula chachi
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eQljVrVs5R0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/watch?v=eQljVrVs5R0" className="link">
          Profa. Kempis
        </a>
      </p>
      <Resources>
        <li>
          <a
            href="https://lucera.es/blog/como-ayudan-las-energias-alternativas-al-medio-ambiente"
            className="link"
          >
            Lucera: ¿Cómo ayudan las energías alternativas al medio ambiente?
          </a>
        </li>
        <li>
          <a
            href="https://www.slideshare.net/Maripeach?utm_campaign=profiletracking&utm_medium=sssite&utm_source=ssslideview"
            className="link"
          >
            LA ENERGÍA Y EL MEDIO AMBIENTE - Maripeach
          </a>
        </li>
        <li>
          <a
            href="https://es.calameo.com/books/006096048a131d0365b52"
            className="link"
          >
            Organizador grafico del Medio Ambiente por Jared Cardenas Cardenas
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=FUqvuEJj3tM"
            className="link"
          >
            Aula chachi: Fuentes de Energía | Aula chachi - Vídeos educativos
            para niños
          </a>
        </li>
        <li>
          <a href="https://youtu.be/eQljVrVs5R0" className="link">
            Profa. Kempis: La energía, tipos de energía, la transformación, sus
            consecuencias en el medio ambiente.
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Materia_energia;
