function Resources({ children }) {
  return (
    <section className="bg-info text-info-content text-center w-full border-black border-dashed border-4 pb-8">
      <h1 className="font-bold text-4xl my-6">Recursos: </h1>
      <ul className="list-disc list-inside mx-20">{children}</ul>
    </section>
  );
}

export default Resources;
