import { Button } from "@/components/ui/button";

function Landing() {
  return (
    <section className="relative w-full overflow-hidden h-[93vh] lg:h-[89vh]  3xl:h-[89vh] ">
      <div className=" inset-0 bg-black bg-opacity-30  w-full h-full flex items-center justify-center relative overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className=" w-full h-full object-cover z-[-1]  "
        >
          <source src="/videos/farming2.mp4" />
          <source src="/videos/farming2.mp4" />
          <source src="/videos/farming2.mp4" />
          <source src="/videos/farming2.mp4" />
        </video>
        <div className="absolute z-10 flex flex-col space-y-8 max-w-[90%]">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center max-lg:leading-10">
            <span className=" text-4xl md:text-5xl lg:text-6xl font-bold pr-3 text-primary">
              Wingardium
            </span>
            ile Tarımda Verimliliği Yükseltin!
          </h1>
          <h2 className="text-textColor text-lg md:text-xl lg:text-2xl  ml-1 text-center">
            Tarladan hasada, tüm süreçler bir arada.
          </h2>
          <Button
            className="animate-shimmer rounded-full py-6 px-8 text-[18px] hover:text-gray-200 
             bg-[linear-gradient(110deg,#567d46,45%,#6b8f5a,55%,#567d46)]
             bg-[length:200%_100%]  text-white w-max self-center"
          >
            Hemen Dene
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
