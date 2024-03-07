import fb from "@/public/facebook.svg";
import inst from "@/public/instagram.svg";
import git from "@/public/github.svg";
import phone from "@/public/phone.svg";
import mail from "@/public/mail.svg";
import Image from "next/image";

export default function Left() {
  return (
    <div className="h-full flex flex-col justify-between bg-leftcolor bg-opacity-80">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Image
          src="/phuto.jpg"
          alt="Profile picture of Manohar Dahal"
          width={200}
          height={200}
          priority={true}
          className="rounded-full my-6"
        />
        <div className="flex space-x-4 mb-4">
          <a href="#" className="opacity-70 hover:opacity-90">
            <Image src={fb.src} alt="Facebook" width={40} height={40} />
          </a>

          <a href="#" className="opacity-70 hover:opacity-90">
            <Image src={inst.src} alt="Instagram" width={40} height={40} />
          </a>

          <a href="#" className="opacity-70 hover:opacity-90">
            <Image src={git.src} alt="Github" width={39} height={39} />
          </a>
        </div>
      </div>
      <footer className="bg-transparent text-left opacity-80">
        <div className="pb-2 mx-4 px-4">
          <hr className="w-[100%] h-[0.15px] mx-auto bg-leftTextColor border-0 mb-4 rounded" />
          <span className="text-2xl text-leftTextColor font-audiowide my-2 ">
            Contact Me
          </span>
          <div className="text-leftTextColor text-lg font-julee my-2">
            <a href="#" className="flex flex-row space-x-2">
              {/* icon */}

              <Image src={phone.src} alt="Phone" width={20} height={20} />
              {/* text */}
              <p>9861322028</p>
            </a>

            <a href="#" className="flex flex-row space-x-2">
              {/* icon */}

              <Image src={mail.src} alt="Mail" width={20} height={20} />

              {/* text */}
              <p>manohardahal40@gmail.com</p>
            </a>

            <a href="#" className="flex flex-row space-x-2">
              {/* icon */}
              <Image src={mail.src} alt="Mail" width={20} height={20} />
              {/* text */}
              <p>manohardahal@elytrasolutions.com</p>
            </a>
          </div>

          <section className="text-black text-xl text-center font-julee bg-[#D9D9D9] w-[100%] mx-auto p-8 my-4 bg-opacity-60">
            "I believe in process"
          </section>
        </div>
      </footer>
    </div>
  );
}
