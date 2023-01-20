import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
import useTitle from "../../hooks/useTitle";

function Desarrollo_regional() {
  useTitle("Período de desarrollos regionales");
  return (
    <Layout>
      <h1 className="title">Periodo de desarrollos regionales</h1>
      <p>
        "Los desarrollos regionales (200 a.C. - 500 d.C.) Si bien se conoce a
        este periodo con el clásico nombre de Intermedio Temprano acuñado por
        John Rowe, otros investigadores han acuñado, a lo largo del siglo XX,
        diversos nombres para tan compleja y diversa etapa. La variedad de
        culturas que surgieron y se desarrollaron a lo largo de todo el
        territorio nacional no impide se encuentre entre ellas muchas
        similitudes, relaciones e intercambios".
      </p>
      <a
        href="https://educared.fundaciontelefonica.com.pe/sites/peru-prehispanico/i_temprano.htm"
        className="link"
      >
        https://educared.fundaciontelefonica.com.pe/sites/peru-prehispanico/i_temprano.htm
      </a>
      <h2 className="subtitle">Gráficos</h2>
      <img
        src="http://2.bp.blogspot.com/-Y_cVvbxr2jE/Um0fVpV6gbI/AAAAAAAAB5E/Vg2wF7QaKxc/s1600/desarrollos+regionales+history-peru.blogspot.com.png"
        alt="Desarrollos regionales"
        width="500"
      />
      <a
        href="http://history-peru.blogspot.com/2013/10/periodo-de-los-desarrollos-regionales.html"
        className="link"
      >
        http://history-peru.blogspot.com/2013/10/periodo-de-los-desarrollos-regionales.html
      </a>
      <img
        src="https://sisbib.unmsm.edu.pe/exposiciones/fundlima/limaprehisp/images/pag78.jpg"
        alt="Aldea"
        width="500"
      />
      <a
        href="https://sisbib.unmsm.edu.pe/exposiciones/fundlima/limaprehisp/pueblos3.htm"
        className="link"
      >
        Reconstrucción hipotética de una aldea compacta del Periodo Intermedio
        Temprano. La Gestación de los Desarrollos Regionales -
        https://sisbib.unmsm.edu.pe/
      </a>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5RwevnLxyeQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@cicleros23" className="link">
          Entre cicleros
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NTHmZLFrmdA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          href="https://www.youtube.com/@belinaauccapucllaroman2227/about"
          className="link"
        >
          Beliña Auccapuclla roman
        </a>
      </p>
      <Resources>
        <li>
          <a
            className="link"
            href="https://educared.fundaciontelefonica.com.pe/sites/peru-prehispanico/i_temprano.htm"
          >
            Intermedio temprano - Historia del Perú: Telefónica Fundación
          </a>
        </li>
        <li>
          <a
            className="link"
            href="http://history-peru.blogspot.com/2013/10/periodo-de-los-desarrollos-regionales.html"
          >
            Período de los desarrollos reigonales, por Leiner - Aprenda Historia
            de la Humanidad
          </a>
        </li>
        <li>
          <a
            href="https://sisbib.unmsm.edu.pe/exposiciones/fundlima/limaprehisp/pueblos3.htm"
            className="link"
          >
            II.3 La Gestación de los Desarrollos Regionales, por UNMSM - Oficina
            General del Sistema de Bibliotecas y Biblioteca Central
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=5RwevnLxyeQ"
            className="link"
          >
            4 PERIODO DE DESARROLLOS REGIONALES (NAZCA, MOCHE YRECUAY) PROF ALEX
            QUINTO
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=NTHmZLFrmdA"
            className="link"
          >
            Los desarrollos regionales, por Beliña Auccapuclla roman
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Desarrollo_regional;
