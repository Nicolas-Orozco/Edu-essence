import Layout from "../../components/Layout";
import Cronologia_economico_social from "../../assets/Cronologia_economico_social.png";
import Resources from "../../components/Resources";
function Estados_regionales() {
  return (
    <Layout>
      <h1 className="title">Estados regionales</h1>
      <p>
        Entre el final del período Tiahuanaco y el comienzo del Incario se dio
        el llamado Segundo Período Intermedio, en el cual nuevamente se
        desarrollan culturas locales independientes.
      </p>
      <hr />
      <a href="http://intiyana.org/peru_arte_estados.html" className="link">
        http://intiyana.org/peru_arte_estados.html
      </a>
      <h2 className="subtitle">Gráficos</h2>
      <img
        src="https://d3tvd1u91rr79.cloudfront.net/1166af241e2d84cac09c4b3f6ab31e52/html/bg1.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM3R2ZDF1OTFycjc5LmNsb3VkZnJvbnQubmV0LzExNjZhZjI0MWUyZDg0Y2FjMDljNGIzZjZhYjMxZTUyL2h0bWwvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3MzI5NjgwMX19fV19&Signature=VXXfqWEPvQhs6OuJc0CidyhouAweWO3FpEXjtyN6ScfKxDBz3Yawde7XON8OJ8NwrHu70B6h0BRH5c90MR8~TaSO~hQE9Z9SLHjgkLzqOLGFTdfZkLd1gMPZ3KxzGqfYuFNKY0pDEBeixQ0sFPJP410-hGw74mZ8rORgbgmWiYIW7HDDp89iGTxNaG~eoivXEeClbJw11xXfdWeg50dkosy1SH0KqGViUe9WOfqamiBGUbX2GEXMFJHeSrcmdpR9~tC4hcWskCXstVn4bXedvbqEGHJ1maU93V4Gon-jzJYzfx0RHj0eHhPw~FtEQq7ZOWjvccSz6xLDA~MJal82BQ__&Key-Pair-Id=APKAJ535ZH3ZAIIOADHQ"
        alt="Estados Regionales Tardíos"
        width="500"
      />
      <a
        href="https://www.studocu.com/pe/n/17925607?sid=01673210726"
        className="link mb-10"
      >
        https://www.studocu.com/pe/n/17925607?sid=01673210726
      </a>
      <img src={Cronologia_economico_social} alt="Cuadro cronológico" />
      <a
        href="https://www.uv.es/~fores/Cuadrocronologico.html"
        className="link"
      >
        https://www.uv.es/~fores/Cuadrocronologico.html
      </a>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XrzDkTs9sbE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a href="https://www.youtube.com/@RogerGarciape" className="link">
          Roger García
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UV0_H6RaAHg"
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
          Creciendo con la Historia
        </a>
      </p>
      <Resources>
        <li>
          <a href="http://intiyana.org/peru_arte_estados.html" className="link">
            IntiYana - Perú - Estados Regionales
          </a>
        </li>
        <li>
          <a
            href="https://www.studocu.com/pe/document/universidad-tecnologica-del-peru/problemas-y-desafios-en-el-peru-actual/historia-del-peru-estados-regionales-tardios/17925607?shared=n&sid=01673210726"
            className="link"
          >
            Estados Regionales Tardíos - Universidad Tecnológica del Perú
          </a>
        </li>
        <li>
          <a
            href="https://www.uv.es/~fores/Cuadrocronologico.html"
            className="link"
          >
            Cuadro cronológico, por Luis Guillermo Lumbreras
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=XrzDkTs9sbE"
            className="link"
          >
            Historia del Perú │Intermedio Tardío (Estados Regionales) 9/33 - por
            Roger García
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=UV0_H6RaAHg"
            className="link"
          >
            Creciendo con la historia: Primer Desarrollo Regional - Culturas
            peruanas: Nazca, Moche y Lima - Canal dedicado a la distribución de
            información, educación y entretenimiento sobre las ciencias
            sociales.
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Estados_regionales;
