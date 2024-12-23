import FileBrowser from "./components/FileBrowser";
import useData from "./lib/useData";

const youtubeURL_S003 =
  "https://www.youtube.com/playlist?list=PLNGLpHQhvGrvUJ4ddNRL8VjVbdUPdAjTQ";
const youtubeURL_S006 =
  "https://www.youtube.com/playlist?list=PLNGLpHQhvGrthL1FV0OZIUQw_yZpv8Rkv";
const youtubeURL_S001 =
  "https://youtube.com/playlist?list=PLNGLpHQhvGrtGIPj6MzHepMhwr8KuQ5VZ&si=gUOXeBr_a4Bjs-cw";
const youtubeURL_S005 =
  "https://youtube.com/playlist?list=PLNGLpHQhvGrvKecKTi5o0kjLaYbUOZIjF&si=_Egf8nVoaZOSKs0s";
const yourtubeURL_project =
  "https://www.youtube.com/playlist?list=PLNGLpHQhvGrtqn6UYxUYXm7C0auAYrh_O";
function App() {
  useData();
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col gap-3 items-start lg:flex-row lg:items-center lg:justify-between">
        <div className="font-extrabold text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
          Prodsup 67
        </div>
        <div className="flex gap-2">
          <a
            href={youtubeURL_S001}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            VDO (Sec 001)
          </a>
          <a
            href={youtubeURL_S005}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            VDO (Sec 005)
          </a>
          <a
            href={youtubeURL_S003}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            VDO (Sec 003)
          </a>
          <a
            href={youtubeURL_S006}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            VDO (Sec 006)
          </a>
          <a
            href={yourtubeURL_project}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-purple-600 text-white text-sm lg:text-lg font-bold"
          >
            Project
          </a>
        </div>
      </div>
      <div className="mt-8">
        <FileBrowser />
      </div>
    </div>
  );
}

export default App;
