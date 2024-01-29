import Image from "next/image";

export default function Left() {
  return (
    <div className="relative flex flex-col items-center">
      <Image
        src="/phuto.jpg"
        alt="image"
        width={300}
        height={300}
        className="rounded-full mt-10"
      />
      <div className="mt-10">Contact Me</div>
    </div>
  );
}
