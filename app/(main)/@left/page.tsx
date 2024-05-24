import fb from "@/public/facebook.svg";
import inst from "@/public/instagram.svg";
import git from "@/public/github.svg";
import phone from "@/public/phone.svg";
import mail from "@/public/mail.svg";
import Image from "next/image";
import { Info } from "@/backend/models/models";
import { IInfo } from "@/backend/models/interfaces";
import { dbConnect } from "@/backend/db";

export const dynamic = "force-dynamic";

export default async function Left() {
  await dbConnect();
  const info: IInfo[] = await Info.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  const bio = info[0].bio;
  return (
    <div className="h-full flex flex-col justify-between bg-leftcolor bg-opacity-80">
      <div className="relative flex-1 flex flex-col items-center justify-center">
        <div className="rounded-full overflow-hidden h-auto w-[60%] flex items-center justify-center my-6">
          <Image
            src="/profile_picture.png"
            alt="Profile picture of Manohar Dahal"
            width={200}
            height={200}
            priority={true}
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="opacity-70 hover:opacity-90">
            <Image src={fb.src} alt="Facebook" width={40} height={40} />
          </a>

          <a href="#" className="opacity-70 hover:opacity-90">
            <Image src={inst.src} alt="Instagram" width={40} height={40} />
          </a>

          <a
            href="github.com/manohar322028"
            className="opacity-70 hover:opacity-90"
          >
            <Image src={git.src} alt="Github" width={39} height={39} />
          </a>
        </div>
      </div>
      <footer className="bg-transparent text-left opacity-80">
        <div className="pb-2 mx-4 md:px-4 px-2">
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
            <p>{bio}</p>
          </section>
        </div>
      </footer>
    </div>
  );
}
