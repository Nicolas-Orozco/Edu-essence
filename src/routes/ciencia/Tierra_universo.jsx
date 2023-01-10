import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
function Tierra_universo() {
  return (
    <Layout>
      <h1 className="title">La tierra y el universo</h1>
      <p>
        "Comprender de forma cualitativa la noción de movimiento relativo, en
        grado suficiente para poder explicar el movimiento aparente de los
        astros como consecuencia de la rotación y traslación terrestre. Explicar
        en función de esos mismos movimientos la sucesión de los días y las
        noches, así como las estaciones del año. Conocer los componentes del
        Sistema Solar y algunas de sus propiedades más interesantes. Comprender
        la naturaleza análoga entre el Sol y otras estrellas, así como adquirir
        una noción sobre su origen, causas de su emisión de energía y su
        probable destino. Explicar el cielo nocturno como una forma de ver
        nuestra galaxia, la Vía Láctea Entender la enorme cantidad de galaxias
        existentes en un Universo percibido con su carácter evolutivo".
        <hr />
        <a
          href="http://newton.cnice.mec.es/materiales_didacticos/tierrayuniverso/objetivos.htm"
          className="link"
        >
          Aquí:
          http://newton.cnice.mec.es/materiales_didacticos/tierrayuniverso/objetivos.htm
        </a>
      </p>
      <h2 className="subtitle">Gráficos</h2>
      <img
        src="http://agrega.juntadeandalucia.es/repositorio/27092016/14/es-an_2016092712_9172410/Planetas_del_Sistema_Solar_a_escala..png"
        alt="Orden de los planetas de acuerdo a cercanía al Sol"
        width="500"
      />
      <a
        href="http://agrega.juntadeandalucia.es/repositorio/27092016/14/es-an_2016092712_9172410/Planetas_del_Sistema_Solar_a_escala..png"
        className="link mb-10"
      >
        http://agrega.juntadeandalucia.es/repositorio/27092016/14/es-an_2016092712_9172410/Planetas_del_Sistema_Solar_a_escala..png
      </a>
      <img
        src="https://image.slidesharecdn.com/sesion1componentesdelsistemasolar-111115091530-phpapp02/85/componentes-del-sistema-solar-3-320.jpg?cb=1666696871"
        alt="Gráfico de componentes del Sistema Solar"
      />
      <a
        href="https://image.slidesharecdn.com/sesion1componentesdelsistemasolar-111115091530-phpapp02/85/componentes-del-sistema-solar-3-320.jpg?cb=1666696871"
        className="link"
        width="300"
      >
        https://image.slidesharecdn.com/sesion1componentesdelsistemasolar-111115091530-phpapp02/85/componentes-del-sistema-solar-3-320.jpg?cb=1666696871
      </a>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3nuuSF4M_pc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          href="https://www.youtube.com/@PlanetariodeMadridoficial"
          className="link"
        >
          Planetario de Madrid oficial
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8dy27u_kX1I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@LifederEducacion" className="link">
          Lifeder Educación
        </a>
      </p>
      <Resources>
        <li>
          <a
            href="http://recursostic.educacion.es/newton/web/"
            className="link"
          >
            Proyecto Newton: La Tierra y el Universo
          </a>
        </li>
        <li>
          <a
            className="link"
            href="http://agrega.juntadeandalucia.es/repositorio/27092016/14/es-an_2016092712_9172410/5_resumen.html"
          >
            Junta de Andalucía: 5. Resumen | La Tierra en el Universo: El
            Universo y la Tierra{" "}
          </a>
        </li>
        <li>
          <a
            href="https://es.slideshare.net/iescincovillas/sesion1-componentes-del-sistema-solar"
            className="link"
          >
            IES Cinco Villas: Componentes del sistema solar
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=3nuuSF4M_pc"
            className="link"
          >
            Planetario de Madrid oficial: LA TIERRA Y EL UNIVERSO
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=8dy27u_kX1I"
            className="link"
          >
            Lifeder Educación: El SISTEMA SOLAR: los planetas, el Sol,
            características y origen☀️🌍🌕
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Tierra_universo;
