import { about } from "../data";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-3xl mx auto text-left">
        {about.available && (
          <span className="inline-flex items-center gap-2 text-sm text-green-600 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for work
          </span>
        )}
        <h1 className="text-5xl font-bold text-white-900 mb-4">
          Hello World 🌎!!
        </h1>
        <h1 className="text-4xl font-semibold text-gray-700 text-align-left mb-6">
          I'm {about.name}
        </h1>
        <div className="text-purple-500 text-2xl font-bold tracking-widest">
          <Typewriter
            options={{
              strings: [
                "Freelancer",
                "Computer Engineer Student",
                "Web Developer",
              ],
              autoStart: true, //Inicia automáticamente el efecto de escritura
              loop: true, //Realiza el efecto de escritura en bucle
              deleteSpeed: 50, //Velocidad de eliminación del texto
            }}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="/#projects"
            className="bg-purple-500 text-white px-6 py-3
        rounded-full font-medium hover:bg-purple-600 transition-colors
        duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
