import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
function Rutas_migratorias() {
  return (
    <Layout>
      <h1 className="title">
        Hipótesis sobre las rutas migratorias del poblamiento americano
      </h1>
      <p>
        1. El contexto ambiental de la Tierra corresponde a épocas de grandes
        glaciaciones. Esto provoca variaciones en el nivel del mar.
        <hr /> 2. Recordar que las sociedades durante el periodo Paleolítico
        eran nómades, es decir, estaban en constante movimiento buscando un
        hábitat favorable (clima, alimentos, menor cantidad de amenazas
        naturales)
        <hr /> 3. Si bien los primeros homínidos se originaron en África, el
        Homo Erectus es el primero en salir de este continente y el Homo Sapiens
        Sapiens (humano actual) fue el que llegó a poblar el continente
        americano. <hr /> 4. Las teorías del poblamiento americano se respaldan
        por evidencias arqueológicas que consisten las técnicas de fabricación
        de herramientas (tecnología clovis), el estudio genético de los restos
        humanos y a la evidencia geológica de las glaciaciones
      </p>
      <br />
      <a
        href="https://www.secst.cl/colegio-online/docs/25032020_206pm_5e7bb9c0a2db0.pdf"
        className="link"
      >
        https://www.secst.cl/colegio-online/docs/25032020_206pm_5e7bb9c0a2db0.pdf
      </a>
      <h2 className="subtitle">Gráficos</h2>
      <img
        src="https://1.bp.blogspot.com/-lAq7NAmgCJI/UFEZeVEBwOI/AAAAAAAABxs/kdZWrcc0-Og/s1600/631.jpg"
        alt="Teoría asiática"
        width="500"
      />
      <img
        src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/8879532/Teor%C3%ADa_de_Antonio_M%C3%A9ndez..jpg?1474942565"
        alt="Teoría australiana"
        width="500"
      />
      <p>
        Ambas de{" "}
        <a
          href="https://iberoamericasocial.com/teorias-del-poblamiento-americano-1/"
          className="link"
        >
          https://iberoamericasocial.com/teorias-del-poblamiento-americano-1/
        </a>
      </p>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Q9CsK95hWAA"
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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HATmbFv8RLQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>
        Por{" "}
        <a
          href="https://www.youtube.com/@edinsonllampasicuro4311"
          className="link"
        >
          Edinson Llampasi Curo
        </a>
      </p>
      <Resources>
        <li>
          <a
            className="link"
            href="https://www.secst.cl/colegio-online/docs/25032020_206pm_5e7bb9c0a2db0.pdf"
          >
            Teorías del poblamiento americano
          </a>
        </li>
        <li>
          <a
            href="https://iberoamericasocial.com/author/julian-cordoba-toroa/"
            className="link"
          >
            Las teorías del poblamiento americano 1/3 - Julián Córdoba Toro
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.youtube.com/watch?v=Q9CsK95hWAA"
          >
            Lifeder Educación: Canal educativo - El POBLAMIENTO DE AMÉRICA: los
            primeros pobladores del continente (rutas y teorías)
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.youtube.com/watch?v=HATmbFv8RLQ"
          >
            TEORÍAS SOBRE EL POBLAMIENTO DE AMÉRICA (Autoctonista, Asiática,
            Oceánica y Australiana) - Edinson Llampasi Curo
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Rutas_migratorias;
