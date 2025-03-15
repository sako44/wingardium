import Images from "./images";
import { StaticImageData } from "next/image";
import { Link } from "@/i18n/navigation";

type BenefitsItemProps = {
  title: string;
  description: string;
  icon: string | StaticImageData;
};

function BenefitsItem({ title, description, icon }: BenefitsItemProps) {
  return (
    <div
      className="flex flex-col text-center font-fontRaleway
      items-center justify-center space-y-5 bg-[#f1f1f1] border
       border-primary shadow-lg px-5 py-7 rounded-lg"
    >
      <Images url={icon} addClass=" w-16 h-16 " clas="" />
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <p className="max-w-[80%] text-slate-700 font-normal">{description}</p>
      <p className="font-semibold border-b border-zinc-900 uppercase text-gray-700 hover:text-primary transition-all duration-300 ease-in-out">
        <Link href="/features">More</Link>
      </p>
    </div>
  );
}

export default BenefitsItem;
