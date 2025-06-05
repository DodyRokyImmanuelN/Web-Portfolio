import DataImage from "./data";

function App() {

  return (
    <>
     <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 ">
      <div>
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.HeroImage} alt="Kuro" className="w-10 rounded-md" />
        <q>Kode yang indah, lahir dari ketekunan.</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi,I'm Dody Roky 👋</h1>
        <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang programming, terutama web development, role saya adalah fullstack developer.</p>
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
    </>
  );
}

export default App;
