function Footer() {
  return (
    <footer className="bg-neutral-focus mt-10 pb-10 text-neutral-content">
      <h1 className="text-2xl p-6 text-center w-full bg-neutral shadow-sm mb-7">
        Notas
      </h1>
      <div className="max-w-xl text-center mx-auto px-10 font-semibold">
        <p>
          Este sitio fue hecho por Nícolas Orozco <span>&#9829;.</span>
        </p>
        <br />
        <p>
          Todos los derechos están reservados a sus respectivos autores. El uso
          de este contenido con fines educativos e informativos está autorizado
          mediante{" "}
          <a
            href="https://www.termsfeed.com/live/bc70914c-cea9-48f7-ab3e-025d61b53438"
            className="link"
          >
            este "Disclaimer" de <i>Fair Use</i>
          </a>
          . Esto con ninguna intención de apropiarse del mismo.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
