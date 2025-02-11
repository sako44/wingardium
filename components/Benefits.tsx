import BenefitsItem from "./BenefitsItem";
import Container from "./Container";
import zaman from "@/public/photos/zaman.svg";
import maliyet from "@/public/photos/maliyet.svg";
import verim from "@/public/photos/verimlilik.svg";
import hata from "@/public/photos/hata.svg";
import { Button } from "./ui/button";
const benefitsData = [
  {
    title: "Zaman Tasarrufu",
    description: "Süreçlerin dijitalleşmesiyle hızlı yönetim.",
    icon: zaman,
  },
  {
    title: "Maliyet Kontrolü",
    description: "Girdi maliyetlerinin ayrıntılı takibi.",
    icon: maliyet,
  },
  {
    title: "Verimlilik Artışı",
    description: "Doğru zamanlamalarla artan verim.",
    icon: verim,
  },
  {
    title: "Hataları Minimize Etme",
    description: "Manuel hataların işlemlerini önlenmesi.",
    icon: hata,
  },
];

function Benefits() {
  return (
    <section className="md:px-3 2xl:px-16 3xl:px-32  my-32 ">
      <Container clas=" flex flex-col max-lg:space-y-16 lg:flex-row justify-center items-center  ">
        <div className="flex flex-col max-lg:items-center max-lg:text-center space-y-16 lg:max-xl:max-w-[45%]">
          <h2 className=" text-5xl md:text-6xl lg:text-7xl/[90px] font-semibold text-primary max-w-[70%] 2xl:max-w-[48%] tracking-[6px]">
            Avantajlar ve Faydalar
          </h2>
          <h3 className="text-xl md:text-2xl/[45px] font-normal sm:max-w-[70%] lg:max-w-[80%] 2xl:max-w-[70%] ">
            Fikirlerinizi Wingardium ile gerçeğe dönüştürün. Birçok güçlü
            Avantajlar ile sadelik ve netliği garanti ediyoruz.
          </h3>
          <Button
            className="animate-shimmer rounded-full py-6 px-8 text-[18px] hover:text-gray-200 
             bg-[linear-gradient(110deg,#567d46,45%,#6b8f5a,55%,#567d46)]
             bg-[length:200%_100%]  text-white w-max"
          >
            Hemen Dene
          </Button>
        </div>

        <div className="flex flex-col md:flex-row max-xl:space-y-5  md:space-x-5 lg:grow lg:max-2xl:w-full 2xl:max-3xl:w-[80%]">
          <div className="flex flex-col gap-y-5">
            {benefitsData.map((item, index) =>
              index === 0 || index == 2 ? (
                <BenefitsItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  id={index}
                />
              ) : null
            )}
          </div>
          <div className="flex flex-col gap-y-5">
            {benefitsData.map((item, index) =>
              index === 1 || index == 3 ? (
                <BenefitsItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  id={index}
                />
              ) : null
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
