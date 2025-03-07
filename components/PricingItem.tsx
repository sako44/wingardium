import right from "@/public/icon/right.svg";
import Images from "./images";
import { Button } from "./ui/button";

type PricingItemProps = {
  title: string;
  price: string | number;
  description: string;
  features: string[];
  buttonTitle: string;
};

function PricingItem({
  title,
  price,
  description,
  features,
  buttonTitle,
}: PricingItemProps) {
  return (
    <div
      className={`" ${
        price == 30 && " bg-primary scale-110 text-white "
      }  border font-fontRaleway border-textColor shadow-xl rounded-2xl px-8 py-10 flex flex-col space-y-5"`}
    >
      <div className="flex flex-col space-y-2 pb-7">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <h3 className="text-xl font-normal">{description}</h3>
      </div>
      <div className="flex flex-col space-y-7 py-7 border-y border-textColor">
        <p className="text-2xl text-textColor font-fontNunito font-normal ">
          <span
            className={` ${
              price == 30 && " text-white "
            } " text-5xl text-black font-bold "`}
          >
            ${price}
          </span>
          /mo
        </p>
        <Button
          className={`" ${
            price == 30
              ? " bg-white font-medium text-black hover:bg-black hover:text-white "
              : " bg-primary text-white hover:bg-black hover:text-white "
          }  p-5 font-medium w-max"`}
        >
          {buttonTitle}
        </Button>
      </div>
      <ul className="space-y-2 pt-12 pb-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center  space-x-2">
            <Images url={right} addClass="w-5 h-5" clas=" object-contain" />
            <p className="text-lg font-normal">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingItem;
