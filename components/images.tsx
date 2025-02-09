import Image, { StaticImageData } from "next/image";
import MotionDiv from "./MotionDiv";
type ImageProps = {
  url: string | StaticImageData;
  addClass?: string;
  clas?: string;
};

function Images({ url, addClass, clas }: ImageProps) {
  return (
    <div
      className={` ${addClass}
    } " aspect-square relative overflow-hidden "`}
    >
      <Image fill alt={"image"} priority src={url} className={` ${clas} `} />
    </div>
  );
}

export default Images;
