import { useState } from "react";
import { baseUrl } from "./wp-config/config";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count === 0) return alert("Não é possível subtrair mais");
    setCount((prev) => prev - 1);
  };

  return (
    <main className="max-w-screen-xl w-full mx-auto">
      <section className="w-full min-h-screen px-4 py-10 flex flex-col h-full justify-center items-center gap-8">
        <div className="flex gap-5 w-full justify-center">
          <a
            href="https://vitejs.dev/"
            target="_blank"
            title="ViteJS"
            className="transition-scale duration-200 hover:scale-105"
          >
            <img
              src={baseUrl + "/vite.svg"}
              alt="ViteJS Logo"
              width={100}
              height={50}
              className="w-full h-16 object-contain"
            />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            title="ReactJS"
            className="transition-scale duration-200 hover:scale-105"
          >
            <img
              src={baseUrl + "/react.svg"}
              alt="ReactJS Logo"
              width={100}
              height={50}
              className="w-full h-16 object-contain animate-spin-slow"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            title="TailwindCSS"
            className="transition-scale duration-200 hover:scale-105"
          >
            <img
              src={baseUrl + "/tailwind.svg"}
              alt="TailwindCSS Logo"
              width={100}
              height={50}
              className="w-full h-16 object-contain"
            />
          </a>
          <a
            href="https://wordpress.org/"
            target="_blank"
            title="WordPress"
            className="transition-scale duration-200 hover:scale-105"
          >
            <img
              src={baseUrl + "/wordpress.svg"}
              alt="WordPress Logo"
              width={100}
              height={50}
              className="w-full h-16 object-contain"
            />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-center text-slate-700">
          Wordpress React Plugin
        </h1>
        <h2 className="text-2xl text-center text-slate-400">
          Vite ReactJS + Typescript + TailwindCSS
        </h2>
        <p className="text-base text-center text-slate-400">
          Um plugin Wordpress ClientSide
        </p>
        <div className="flex flex-col self-center w-full max-w-xl p-4 sm:p-7 rounded-lg items-center gap-5 border border-slate-300">
          <div className="flex flex-wrap sm:flex-nowrap w-full max-w-lg gap-4">
            <button
              className="basis-full border-none transition-scale duration-200 hover:scale-105 sm:basis-1/2 h-11 w-full px-4 bg-green-500 rounded-lg text-white cursor-pointer uppercase font-medium"
              onClick={increment}
            >
              Somar
            </button>
            <button
              className="basis-full border-none transition-scale duration-200 hover:scale-105 sm:basis-1/2 h-11 w-full px-4 bg-red-500 rounded-lg text-white cursor-pointer uppercase font-medium"
              onClick={decrement}
            >
              Subtrair
            </button>
          </div>
          <p className="text-lg uppercase font-light">
            Contagem: <span className="font-bold">{count}</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
