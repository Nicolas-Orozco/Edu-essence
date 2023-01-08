function Resources({ children }) {
  return (
    <section className="bg-blue-200 text-center w-full border-dashed border-black border-4 pb-8">
      <h1 className="subtitle p-0">Recursos: </h1>
      <ul className="list-disc list-inside mx-20	">{children}</ul>
    </section>
  );
}

export default Resources;
