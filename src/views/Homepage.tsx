//assets
import reactIcon from "@/assets/react.svg";
import typescriptIcon from "@/assets/typescript.svg";

export default function RootMain() {
  return (
    <div className="containers h-screen bg-white pt-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-5">
          <img src={reactIcon} alt="" className="w-[25%] md:w-[10%]" />{" "}
          <span className="text-[32px]">+</span>
          <img src={typescriptIcon} alt="" className="w-[25%] md:w-[10%]" />
        </div>
        <h1 className="font-bold text-center leading-relaxed py-5">
          Boost Your Web Application Development <br /> with My React Components
        </h1>
        <p className="sub-title text-center pb-3">
          Resource for React components in TypeScript language with tailwind CSS
          style.
        </p>
        <p className="text-violet-main font-bold">
          Design & Develop by BANXDEV
        </p>
      </div>
    </div>
  );
}
