import fb from "@/public/facebook.svg";
import inst from "@/public/instagram.svg";
import git from "@/public/github.svg";
export default function Left() {
  return (
    <div className="h-screen flex flex-col justify-between bg-leftcolor">
      <div className="flex-1 flex flex-col items-center justify-center bg-transparent">
        <img
          src="./phuto.jpg"
          alt="Profile"
          className="rounded-full h-[180px] w-[180px] mb-4"
        />
        <div className="flex space-x-4">
          <a href="#" className="opacity-80 hover:opacity-100">
            <img src={fb.src} alt="Facebook" className="w-8 h-8" />
          </a>

          <a href="#" className="opacity-80 hover:opacity-100">
            <img src={inst.src} alt="Instagram" className="w-9 h-9" />
          </a>

          <a href="#" className="opacity-80 hover:opacity-100">
            <img src={git.src} alt="Github" className="w-7 h-7" />
          </a>
        </div>
      </div>
      <footer className="bg-transparent py-4 text-center">Contact Info</footer>
    </div>
  );
}
