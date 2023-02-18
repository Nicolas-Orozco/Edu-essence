import Layout from "../../components/Layout";
import Resources from "../../components/Resources";
import useTitle from "../../hooks/useTitle";

function Tahuantinsuyo() {
  useTitle("El Tahuantinsuyo");
  return (
    <Layout>
      <h1 className="title">Tahuantinsuyo</h1>
      <p className="text-md lg:text-lg">
        "Alrededor del siglo XIII d.C. los incas se asentaron en el Cuzco, así
        se da inicio al Imperio Inca, desde ahí se expandieron por el territorio
        andino, logrando que el Imperio Inca dominase parte de los actuales
        territorios de Perú, Bolivia, Chile, Ecuador, Argentina y Colombia. La
        organización y administración impuesta por los incas se convirtió en el
        Estado más importante y poderoso antes de la presencia de los
        españoles".
        <br />
        <a
          href="https://historiaperuana.pe/periodo-autoctono/imperio-inca-tahuantinsuyo"
          className="link"
        >
          https://historiaperuana.pe/periodo-autoctono/imperio-inca-tahuantinsuyo
        </a>
      </p>
      <h2 className="subtitle">Gráficos</h2>
      <iframe
        src="//www.slideshare.net/slideshow/embed_code/key/3UyPhBMBAaYCTm"
        width="668"
        height="714"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
      >
        {" "}
      </iframe>{" "}
      <div className="mb-10">
        {" "}
        <a
          href="//www.slideshare.net/pillao/imperio-tahuantinsuyo"
          title="Imperio tahuantinsuyo"
          target="_blank"
          className="link"
        >
          Imperio tahuantinsuyo
        </a>{" "}
        de{" "}
        <a href="//www.slideshare.net/pillao" target="_blank" className="link">
          pillao
        </a>{" "}
      </div>
      <div>
        <a
          href="https://gallica.bnf.fr/ark:/12148/btv1b53213229q/f1.item.zoom"
          target="_blank"
        >
          <img src="https://gallica.bnf.fr/iiif/ark:/12148/btv1b53213229q/f1/490.70596931137766,717.7904191616767,8342.319760479042,12090.78083832335/523,758/0/native.jpg" />
        </a>
        <p className="text-center">
          En{" "}
          <a
            href="https://gallica.bnf.fr/ark:/12148/btv1b53213229q/f1.item.zoom"
            className="link"
          >
            {" "}
            Gallica
          </a>
        </p>
      </div>
      <h2 className="subtitle">Audiovisual</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5nYM2yYX4ew"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a className="link" href="https://www.youtube.com/@PROYECTOPANACA">
          Proyecto Panaca
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oMoJ-PB8U-8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a className="link" href="https://www.youtube.com/@stepsgenius4909">
          Steps Genius
        </a>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2ZJXXxEh_Hg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className="mb-10">
        Por{" "}
        <a
          className="link"
          href="https://www.youtube.com/@edinsonllampasicuro4311"
        >
          Edinson Llampasi Curo
        </a>
      </p>
      <Resources>
        <li>
          <a
            href="https://historiaperuana.pe/periodo-autoctono/imperio-inca-tahuantinsuyo"
            className="link"
          >
            López, Carlos y Aguilar, Julia (2014, 26 de julio). Imperio Inca o
            Tahuantinsuyo. Historia del Perú.
            https://historiaperuana.pe/periodo-autoctono/imperio-inca-tahuantinsuyo
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.slideshare.net/pillao/imperio-tahuantinsuyo"
          >
            https://www.slideshare.net/pillao/imperio-tahuantinsuyo
          </a>
          "
        </li>
        <li>
          <a
            className="link"
            href="https://gallica.bnf.fr/ark:/12148/btv1b53213229q/f1.item"
          >
            {" "}
            Mapa del Tahuantinsuyo (Imperio de los Incas) según los relates de
            los antiguos cronistas - los asertos de los arqueo-lógos y las
            cartas de los historiadores y geográfos / por el Dr Horacio H.
            Urteaga ; Dibujado por Camilo Vallejos,...
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@PROYECTOPANACA/about"
            className="link"
          >
            Proyecto Panaca es una propuesta educativa que busca fomentar el
            aprendizaje de la historia de una manera simple y entretenida
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@stepsgenius4909" className="link">
            Step Genius
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@edinsonllampasicuro4311/about"
            className="link"
          >
            @edinsonllampasicuro4311
          </a>
        </li>
      </Resources>
    </Layout>
  );
}

export default Tahuantinsuyo;
