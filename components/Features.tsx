import Container from "./Container";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Features() {
  return (
    <Container clas=" my-16 ">
      <div
        id="#ozellik"
        className="flex flex-col  space-y-6 lg:space-y-8 xl:space-y-12 "
      >
        <h3 className="text-center text-4xl uppercase md:text-5xl xl:text-6xl font-sofiaProSemiBold text-black  pb-8 border-b border-black">
          Uygulamanın özellİklerİ
        </h3>
        <div className=" max-w-6xl mx-auto  ">
          <HoverEffect items={projects} />
        </div>
      </div>
    </Container>
  );
}
export const projects = [
  {
    title: "Satın Alma Yönetimi",
    description: "Girdi maliyetlerinin ve sipariş süreçlerinin takibi.",
    link: "#",
  },
  {
    title: "Hasat Planlama ve Takibi",
    description: "Verim analizleri ve hasat zamanı yönetimi",
    link: "#",
  },
  {
    title: "Ürün ve Parsel Takibi",
    description: "Parsel bazlı verimlilik takibi",
    link: "#",
  },
  {
    title: "İlaçlama ve Gübreleme Yönetimi",
    description: "Doğru zamanlamayla ısıslama ve gübreleme bildirimleri.",
    link: "#",
  },
  {
    title: "Stok ve Envanter Takibi",
    description: "Tarım girdilerinin stok kontrolü",
    link: "#",
  },
  {
    title: "Anlık Bildirimler ve Raporlar",
    description: "Gerçek zamanlı analiz ve raporlama.",
    link: "#",
  },
];
