import DataImage from "./data";
import {listTools, listProject} from "./data";

function App() {

  return (
    <>
     <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 ">
      <div>
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.LogoImage} alt="Kuro" className="w-10 rounded-md" loading="lazy" />
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
      <img src={DataImage.HeroImage} alt="Kuro" className="w-[500px] md:ml-auto "  loading="lazy"/>
     </div>

    {/* about */}
    <div className="about mt-32 py-10" >
      <div className="w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
      <img src={DataImage.LogoImage} alt="Kuro" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className="text-base/loose mb-10">
          Fullstack Developer by passion and problem-solver by nature. I love building things that make an impact — whether it's web applications, digital products, or creative ideas. Currently exploring everything that sparks curiosity: collaborating on startups, crafting clean code, and helping others grow through mentoring and content creation.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.LogoImage} alt="Kuro" className="w-12 rounded-md sm:block hidden" />
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4">Tools that I use</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"> Here are some of the tools I frequently use in my development workflow.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

        {listTools.map((tool) =>(
          <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="Tools Image"  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
        ))}

          
        </div>
      </div>
      
    </div>
    {/* about */}

    {/* Project */}
        <div className="project mt-32 py-10">
          <h1 className="text-center text-4xl font-bold mb-2">My Projects</h1>
          <p className="text-base/loose text-center opacity-50">Here are a few things I've been working on recently.</p>
          <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProject.map((project) => (
              <div className="p-4 bg-zinc-800 rounded-md" key={project.id}>
                <img src={project.gambar} alt="Project" loading="lazy"/>
                <div>
                  <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                  <p className="text-base/loose mb-4">{project.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600" href="#">Take a look</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    {/* Project */}

    </>
  );
}

export default App;
