const Home = () => {
  return (
    <section
      id="home"
      className="pt-35 md:pt-60 pb-10 flex justify-center items-center md:justify-start bg-fixed bg-cover bg-center bg-[url(/images/heroBackground.png)] w-7/8 mx-auto border-2 border-white">
      <div className="bg-[#7B7B7B]/85 w-[320px] md:w-137.5 flex flex-col items-center py-5 rounded-lg text-center md:ml-20 lg:ml-40">
        <h1 className="underline text-white text-2xl underline-offset-4 pb-20 font-bold">Kimi Leminaho</h1>
        <p className="text-white text-xl font-medium">I'm a frontend developer student who loves to understand.</p>
      </div>
    </section>
  );
};

export default Home;
