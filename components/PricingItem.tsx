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
    <div className="border font-fontRaleway border-zinc-700 shadow-xl rounded-lg px-8 py-10 flex flex-col space-y-5">
      <div className="flex flex-col space-y-5">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <h3 className="text-xl font-normal">{description}</h3>
      </div>
      <p
        className={` ${
          price == 30 && " text-primary "
        }" text-xl font-fontNunito font-normal"`}
      >
        <span className="text-5xl font-bold">${price}</span>/month
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center  space-x-2">
            <Images url={right} addClass="w-5 h-5" clas=" object-contain" />
            <p className="text-xl font-normal">{feature}</p>
          </li>
        ))}
      </ul>
      <Button
        className={`" ${price == 30 && " bg-primary "}  text-white p-5 w-max"`}
      >
        {buttonTitle}
      </Button>
    </div>
  );
}

export default PricingItem;
