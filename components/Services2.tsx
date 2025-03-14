import AnimatedHeader from "./AnimatedHeader";
import Container from "./Container";
import Images from "./images";
import testone from "@/public/photos/testone.png";
import testtwo from "@/public/photos/testtwo.png";
import testthree from "@/public/photos/testthree.png";
import hasatwork from "@/public/photos/hasatwork.png";
import leftupone from "@/public/photos/leftupone.png";
import leftuptwo from "@/public/photos/leftuptwo.png";
import rightupone from "@/public/photos/rightupone.png";
import rightuptwo from "@/public/photos/rightuptwo.png";
import rightupthree from "@/public/photos/rightupthree.png";

function Services2() {
  return (
    <section className=" mt-16 lg:mt-12">
      <Container clas=" flex flex-col space-y-10 mb-12 ">
        <AnimatedHeader title="Nasıl Çalışır?" />
        <h3 className=" text-3xl md:text-4xl lg:text-5xl text-center mx-auto lg:max-w-[70%] font-fontRaleway font-medium">
          İlaçlama, gübreleme, stok yönetimi, gider takibi ve daha fazlası için
          bir çözüm.
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-7 font-fontRaleway gap-5 xs:px-10 sm:px-20 md:px-[15%] lg:px-2 2xl:px-0 3xl:px-28">
          <div className=" 2xl:col-span-3 xl:col-span-2 bg-bgColor shadow-xl rounded-xl py-2 ">
            <div className=" relative">
              <Images
                url={leftupone}
                addClass=" absolute left-[20%] translate-y-[10%]  2xl:left-[30%] 2xl:translate-y-[20%] -rotate-6  w-[220px] h-[220px] "
                clas=" object-cover rounded-xl object-top "
              />
              <Images
                url={leftuptwo}
                addClass=" absolute left-[25%] translate-y-[-20%]  2xl:left-[45%] 2xl:translate-y-[-30%] z-10  rotate-3 w-[240px] h-[220px] "
                clas=" object-cover rounded-xl object-center "
              />
              <div className="flex flex-col space-y-5 text-center pb-10 px-3">
                <h3 className="text-2xl text-primary font-medium"> 1.Adım </h3>
                <p className="text-black text-md  mx-auto xl:px-6">
                  İlk adım olarak siteye giriş yaparak kendi hesabınızı
                  oluşturuyorsunuz. Ardından, kişisel bilgilerinizi eksiksiz bir
                  şekilde dolduruyorsunuz. Daha sonra tarla, çiftlik veya şirket
                  bilgilerini (konum, isim, alan, vb.) sisteme ekliyorsunuz.
                </p>
              </div>
            </div>
          </div>
          <div
            className=" 2xl:col-span-4 xl:col-span-3 overflow-hidden flex flex-col items-center
           justify-center space-y-7 lg:space-y-24 xl:space-y-16 bg-bgColor shadow-xl rounded-xl pb-16  3xl:pb-12 "
          >
            <div className="flex justify-between items-center w-full pt-12 ">
              <Images
                url={rightupthree}
                clas=" object-cover "
                addClass=" w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] xl:h-[200px] xl:w-[200px] rounded-xl -ml-24 xl:-ml-10"
              />
              <Images
                url={rightuptwo}
                clas=" object-cover "
                addClass=" w-[170px] h-[150px] lg:w-[200px] lg:h-[200px] xl:h-[250px] z-[10] xl:w-[250px] scale-125 rounded-xl "
              />
              <Images
                url={rightupone}
                clas=" object-cover "
                addClass=" w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] xl:h-[200px] xl:w-[200px] rounded-xl -mr-24 xl:-mr-12 "
              />
            </div>
            <div className="flex flex-col space-y-5 text-center pt-16 ">
              <h3 className="text-2xl text-primary font-medium"> 2.Adım </h3>
              <p className="text-black text-md 3xl:max-w-[90%] mx-auto px-3 xl:px-10">
                Tarlaları ekledikten sonra, ekili ürünleri sisteme
                tanıtıyorsunuz. Ürünle ilgili analiz bilgileri (toprak, su,
                bitki analizi), gübreleme, ilaçlama, büyüme aşamaları ve
                kullanılan kaynak/maliyet bilgileri detaylı olarak giriliyor.
              </p>
            </div>
          </div>
          <div
            className=" 2xl:col-span-5 xl:col-span-3  overflow-hidden flex flex-col
           2xl:flex-row -space-y-16 xl:max-2xl:-space-y-28  bg-bgColor shadow-xl rounded-xl py-2"
          >
            <div className="flex flex-col space-y-7 justify-between  max-2xl:p-7 2xl:py-7 2xl:pl-7">
              <i className="ri-arrow-right-double-line text-6xl w-fit text-primary bg-white rounded-xl shadow-xl"></i>
              <div className="flex flex-col items-start space-y-5 text-start  ">
                <h3 className="text-2xl text-primary font-medium">3.Adım </h3>
                <p className="text-black text-md  ">
                  Sistem üzerinden sahip olduğunuz tüm arazileri kolayca
                  yönetebilir ve durumlarını düzenli olarak takip edebilirsiniz.
                  Her tarla ya da çiftlik için ayrı ayrı bilgi güncellemesi
                  yapılabilir.
                </p>
              </div>
            </div>
            <div className="relative ">
              <Images
                url={hasatwork}
                clas=" object-cover object-left "
                addClass=" absolute 2xl:top-52 top-28 left-10 w-[650px] h-[500px] rounded-xl "
              />
            </div>
          </div>
          <div className=" 2xl:col-span-2 xl:col-span-2 overflow-hidden flex flex-col  justify-between items-center justify-center bg-transparent border-2 border-textColor border-dashed shadow-xl rounded-xl py-2">
            <div className="flex -space-x-4 pt-10">
              <Images
                url={testone}
                clas=" object-cover "
                addClass=" h-[120px] w-[120px] shadow-xl -rotate-12 rounded-xl "
              />
              <Images
                url={testtwo}
                clas=" object-cover "
                addClass=" z-[10] h-[120px] w-[120px] -mt-3 shadow-xl rounded-xl "
              />
              <Images
                url={testthree}
                clas=" object-cover "
                addClass=" h-[120px] w-[120px] shadow-xl rotate-12 rounded-xl "
              />
            </div>
            <h3 className="font-medium text-center text-xl xl:text-2xl w-[90%] mx-auto py-12 ">
              Analiz sonuçları, kullanılan ilaçlar ve ürün detaylarına kolayca
              ulaşabilirsiniz.
            </h3>
            <div
              className=" -mb-12 -mr-12 w-[90%] h-[200px] border-2 border-white
             gap-1 p-1 bg-gray-400 grid rounded-xl grid-cols-3"
            >
              <div className="col-span-1 row-span-3 bg-white rounded-lg"></div>
              <div className="col-span-1  bg-white rounded-lg"></div>
              <div className="col-span-1  bg-white rounded-lg"></div>
              <div className="col-span-1  bg-white rounded-lg"></div>
              <div className="col-span-1 bg-white rounded-lg"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services2;
