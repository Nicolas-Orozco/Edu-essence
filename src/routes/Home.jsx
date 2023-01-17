import Layout from "../components/Layout";
function Home() {
  return (
    <Layout>
      <div className="flex flex-1 justify-around items-center w-full flex-col-reverse md:flex-row mt-8">
        <img
          src="https://pngimg.com/d/book_PNG2105.png"
          width="300"
          className="p-2"
        />
        {/* <h1 className="text-4xl text-center font-bold p-10">
          ¡Bienvenido a EduEssence! Si eres nuevo, puedes revisar los pasos
          siguientes para orientarte mejor.
  </h1>*/}
        <h1 class="text-center text-4xl leading-relaxed xl:leading-[1.7] font-bold m-5">
          ¡Bienvenido a
          <span class="bg-sky-900 text-white p-2 m-2">EduEssence!</span> Si eres
          nuevo, puedes revisar los pasos siguientes para orientarte mejor.
        </h1>
      </div>
      <section className="bg-warning my-12 mx-6">
        <h2 className="text-2xl text-center p-4 font-semibold outline-dashed">
          Da click a algún tema general en la barra de arriba, para que puedas
          acceder a cualquiera de los subtemas y encuentres la información que
          sea de tu pertinencía.{" "}
        </h2>
      </section>
      <div className="flex flex-1 justify-around items-center flex-col md:flex-row">
        <h2 className="text-3xl text-center font-bold p-10">
          Esta "miniplataforma" será eventualmente actualizada con arreglos y
          adiciones que permitan un uso más desarrollado del mismo.
          <br />
          <strong>Finalmente, ¡espero que te ayude!</strong>
        </h2>
        <img
          width="300"
          className="p-2"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f416da27-6d39-4f69-9774-51542a594a98/d88sr5c-9e2dc95c-0f04-43d6-9816-2e225e745af2.png/v1/fill/w_1024,h_1349,strp/books_png_by_violettalestrange_d88sr5c-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM0OSIsInBhdGgiOiJcL2ZcL2Y0MTZkYTI3LTZkMzktNGY2OS05Nzc0LTUxNTQyYTU5NGE5OFwvZDg4c3I1Yy05ZTJkYzk1Yy0wZjA0LTQzZDYtOTgxNi0yZTIyNWU3NDVhZjIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SvN9SxH3bScwrSJTVPzOteUtNekHPF9GwPBOebbdSkI"
        />
      </div>
      <section className="bg-accent my-12 mx-6">
        <h2 className="text-2xl text-center p-4 font-semibold outline-dashed">
          Todos los subtemas están basados en estos sitios:{" "}
          <ul className="list-disc list-inside">
            <li>
              {" "}
              <a
                href="http://www.minedu.gob.pe/normatividad/reglamentos/DCBasicoSecundaria2004.pdf"
                className="link"
              >
                Diseño curricular Básico - MINEDU
              </a>
            </li>
            <li>
              <a
                href="https://matematicasn.blogspot.com/2019/07/san-marcos-historia-temario-deco-unmsm.html"
                className="link"
              >
                https://matematicasn.blogspot.com/2019/07/san-marcos-historia-temario-deco-unmsm.html
              </a>
            </li>
          </ul>
        </h2>
      </section>
    </Layout>
  );
}

export default Home;
