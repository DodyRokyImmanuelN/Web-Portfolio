import DataImage from "./data";

function App() {

  return (
    <>
     <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 ">
      <div>
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.LogoImage} alt="Kuro" className="w-10 rounded-md" />
        <q>Quiet minds build loud ideas.</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi,I'm Dody Roky 👋</h1>
        <p className="text-base/loose mb-6 opacity-50">Software Engineer</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
            Project 
          </a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Kuro" className="w-[500px] md:ml-auto " />
     </div>

    {/* about */}
    <div className="about mt-32 py-10" >
      <div className="w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
      <img src={DataImage.LogoImage} alt="Kuro" className="w-12 rounded-md mb-10 sm:hidden" />
        <p className="text-base/loose mb-10">
          Fullstack Developer by passion and problem-solver by nature. I love building things that make an impact — whether it's web applications, digital products, or creative ideas. Currently exploring everything that sparks curiosity: collaborating on startups, crafting clean code, and helping others grow through mentoring and content creation.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.LogoImage} alt="Kuro" className="w-12 rounded-md sm:block hidden" />
        </div>
      </div>
    </div>
    {/* about */}

    </>
  );
}

export default App;
