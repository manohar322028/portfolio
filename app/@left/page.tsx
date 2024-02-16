import Image from "next/image";

export default function Left() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src="./phuto.jpg"
          alt="Profile"
          className="rounded-full h-[280px] w-[280px] mb-4"
        />
        <div className="flex space-x-4">
          {/* Replace the following with your social media icons */}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              {/* Your social media icon */}
            </svg>
          </a>
          {/* Add more social media icons here */}
        </div>
      </div>
      <footer className="bg-gray-200 py-4 text-center">Contact Info</footer>
    </div>
  );
}
