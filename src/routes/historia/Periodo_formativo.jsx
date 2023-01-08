import Layout from "../../components/Layout";
import Periodos_historia from "../../assets/periodos_historia.png";
import Resources from "../../components/Resources";
function Periodo_formativo() {
  return (
    <Layout>
      <h1 className="title">Periodo formativo</h1>
      <p>
        El Formativo es el período comprendido entre el 2000 y el 200 a. C.,
        caracterizado por el surgimiento de la alfarería, la textilería en telar
        de lizo y la metalurgia.
      </p>
      <hr />
      <a
        className="link break-all"
        href="https://mnaahp.cultura.pe/exposiciones/salas-permanentes/formativo#:~:text=El%20Formativo%20es%20el%20per%C3%ADodo,de%20lizo%20y%20la%20metalurgia."
      >
        https://mnaahp.cultura.pe/exposiciones/salas-permanentes/formativo#:~:text=El%20Formativo%20es%20el%20per%C3%ADodo,de%20lizo%20y%20la%20metalurgia.
      </a>
      <h2 className="subtitle">Gráficos:</h2>
      <img
        width="500"
        alt="Mapa Mental de las Culturas del Período Formativo
        "
        src="http://2.bp.blogspot.com/-J2jrq_qyxmQ/UofVzaySO1I/AAAAAAAABHM/nNUwvPpf9_4/s1600/culturas+del+periodo+formativo.png"
      />
      <a
        className="link mb-10"
        href="http://culturasdeamerica.blogspot.com/2013/11/mapa-mental-de-las-culturas-del-periodo.html"
      >
        http://culturasdeamerica.blogspot.com/2013/11/mapa-mental-de-las-culturas-del-periodo.html
      </a>
      <img src={Periodos_historia} alt="Periodo preclásico" width="500" />
      <a
        href="https://www.mindomo.com/es/mindmap/periodos-de-la-historia-c1e80dd37dc261e0d01b527f38e3abf2"
        className="link"
      >
        https://www.mindomo.com/es/mindmap/periodos-de-la-historia-c1e80dd37dc261e0d01b527f38e3abf2
      </a>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iuJ_MEJP9kA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@amprieto5" className="link">
          Ana María Prieto Hernández
        </a>{" "}
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/FBV0jrLbhWc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          href="https://www.youtube.com/@Sigamos100preaprendiendo"
          className="link"
        >
          Sigamos 100pre aprendiendo
        </a>
      </p>
      <Resources>
        <li>
          <a
            href="https://mnaahp.cultura.pe/exposiciones/salas-permanentes/formativo#:~:text=El%20Formativo%20es%20el%20per%C3%ADodo,de%20lizo%20y%20la%20metalurgia."
            className="link"
          >
            Formativo | Museo Nacional de Arqueología, Antropología e Historia
            del Perú
          </a>
        </li>
        <li>
          <a
            href="http://culturasdeamerica.blogspot.com/2013/11/mapa-mental-de-las-culturas-del-periodo.html"
            className="link"
          >
            Los Blogs Educativos en el Área H.G.E - 2º: Mapa Mental de las
            Culturas del Período Formativo, por Olga Carrasco
          </a>
        </li>
        <li>
          <a
            href="https://www.mindomo.com/es/mindmap/periodos-de-la-historia-c1e80dd37dc261e0d01b527f38e3abf2"
            className="link"
          >
            Periodos de la historia, por AAHSJ JAJ
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@amprieto5/about" className="link">
            Ana María Prieto Hernández: Canal de apoyo para la enseñanza y el
            aprendizaje - Mesoamérica: periodo formativo o preclásico
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@Sigamos100preaprendiendo/about"
            className="link"
          >
            Sigamos 100pre aprendiendo: Canal mexicano en apoyo con tu
            educación, porque siempre podemos seguir aprendiendo - PRECLASICO |
            HORIZONTES CULTURALES | PARTE I
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Periodo_formativo;
