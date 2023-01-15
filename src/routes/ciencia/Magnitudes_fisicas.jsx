import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
function Magnitudes_fisicas() {
  return (
    <Layout>
      <h1 className="title">Magnitudes físicas fundamentales</h1>
      <p>
        Es todo aquello que puede ser medido, y se puede representar por un
        número, además pueden ser estudiados en las ciencias experimentales.
        <hr />
        Cuando las magnitudes se pueden medir mediante un instrumento de medida,
        se dice que dichas magnitudes son magnitudes físicas. <hr />
        Las magnitudes fundamentales son muy importantes y nos sirven de base
        para escribir las demás magnitudes. Estas magnitudes fundamentales son:
        la longitud, masa, tiempo, temperatura termodinámica, intensidad de
        corriente eléctrica, intensidad luminosa y cantidad de sustancia
      </p>
      <a
        href="http://www.cepb.una.py/web/images/pdf/2020/ejercitarios/1curso/FISICA.pdf"
        className="link"
      >
        http://www.cepb.una.py/web/images/pdf/2020/ejercitarios/1curso/FISICA.pdf
      </a>
      <h2 className="subtitle">Gráficos</h2>
      <iframe
        src="//www.slideshare.net/slideshow/embed_code/key/wGXjZq1FeLR6Dp"
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
            href="//www.slideshare.net/jbd85/magnitudes-fisicas-15852074"
            title="Magnitudes fisicas"
            target="_blank"
          >
            Magnitudes fisicas
          </a>{" "}
        </strong>{" "}
        de{" "}
        <strong>
          <a href="//www.slideshare.net/jbd85" target="_blank">
            jbd85
          </a>
        </strong>{" "}
      </div>
      <iframe
        src="https://www.slideserve.com/embed/4868450"
        width="600"
        height="497"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
      >
        {" "}
      </iframe>
      <a
        href="https://www.slideserve.com/lynda/magnitudes-f-sicas-y-su-medici-n"
        className="link"
      >
        https://www.slideserve.com/lynda/magnitudes-f-sicas-y-su-medici-n
      </a>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qFOTQ7yMtzk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@ScienzaEducacion" className="link">
          Scienza Educación
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZmWqGttbVdU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@Unprofesor" className="link">
          unProfesor
        </a>
      </p>
      <Resources>
        <li>
          <a href="http://www.cepb.una.py/web/" className="link">
            CEPB - Colegio Experimental Paraguay - Brasil: Magnitudes Físicas
          </a>
        </li>
        <li>
          <a
            href="https://www.slideshare.net/jbd85?utm_campaign=profiletracking&utm_medium=sssite&utm_source=ssslideview"
            className="link"
          >
            Magnitudes físicas, por jbd85
          </a>
        </li>
        <li>
          <a href="https://www.slideserve.com/lynda" className="link">
            MAGNITUDES FÍSICAS Y SU MEDICIÓN - Lynda Lincoln
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=qFOTQ7yMtzk"
            className="link"
          >
            Magnitudes Físicas | Fundamentales y derivadas | Escalares y
            vectoriales: Scienza Educación
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=ZmWqGttbVdU"
            className="link"
          >
            Magnitudes físicas fundamentales: unProfesor es una página web donde
            podrás encontrar las clases que se enseñan en el colegio de las
            principales asignaturas y explicadas a través de vídeos por otros
            profesores, tanto de Educación Primaria como de Educación
            Secundaria.
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Magnitudes_fisicas;
