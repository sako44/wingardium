import bildirim from "@/public/photos/bildirim.png";
import ilac from "@/public/photos/ilac.png";
import parsel from "@/public/photos/parsel.png";
import satin from "@/public/photos/satin.png";
import Container from "./Container";
import { Timeline } from "@/components/ui/timeline";
import Images from "./images";

const data = [
  {
    title: "1. Adım",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
          Parsel ve ürün tanımlama.
        </p>
        <Images
          url={parsel}
          addClass="w-full  h-[250px] md:h-[170px] md:w-[330px] lg:w-[480px] lg:h-[250px] xl:w-[600px] xl:h-[250px] 2xl:w-[750px] 2xl:h-[300px] "
          clas=" object-contain object-center  "
        />
      </div>
    ),
  },
  {
    title: "2. Adım",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
          İlaçlama ve gübreleme planlarını yapma.
        </p>
        <Images
          url={ilac}
          addClass="w-full  h-[250px] md:h-[170px] md:w-[330px] lg:w-[480px] lg:h-[150px] xl:w-[600px] 2xl:w-[750px] 2xl:h-[300px] "
          clas=" object-contain object-center  "
        />
      </div>
    ),
  },
  {
    title: "3. Adım",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-4">
          Hasat ve satın alma süreçlerini takip etme.
        </p>
        <Images
          url={satin}
          addClass=" w-full  h-[250px] md:h-[170px] md:w-[330px] lg:w-[480px] lg:h-[150px] xl:w-[600px]  2xl:w-[750px] 2xl:h-[300px] "
          clas=" object-contain object-center  "
        />
      </div>
    ),
  },
  {
    title: "4. Adım",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-4">
          Anlık bildirimlerle yönetim.
        </p>
        <Images
          url={bildirim}
          addClass="w-full  h-[250px] md:h-[170px] md:w-[330px] lg:w-[480px] lg:h-[150px] xl:w-[600px] xl:h-[200px] 2xl:w-[750px] 2xl:h-[300px] "
          clas=" object-contain object-center  "
        />
      </div>
    ),
  },
];
export default function Services() {
  return (
    <div id="hizmet" className="w-full bg-secondary">
      <Container>
        <div id="#hizmet" className="w-full">
          <Timeline data={data} />
        </div>
      </Container>
    </div>
  );
}
