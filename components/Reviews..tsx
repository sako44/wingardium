"use client";
import Container from "./Container";
import Autoplay from "embla-carousel-autoplay";
import { reviews } from "@/data/reviews";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Images from "./images";

function Reviews() {
  return (
    <section className=" mb-32 mt-44  ">
      <Container>
        <div className="flex flex-col  space-y-6 lg:space-y-8 xl:space-y-12 ">
          <h3 className="text-center font-fontNunito text-4xl uppercase md:text-5xl xl:text-6xl font-sofiaProSemiBold text-black  pb-8 border-b border-black">
            Kullanıcı Yorumları
          </h3>
          <div className="mt-10 w-full">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full flex flex-col justify-center "
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className=" font-fontRaleway sm:basis-1/2 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                  >
                    <div className="flex flex-col bg-secondary border border-primary rounded-[15px] h-[210px] p-5 space-y-3  ">
                      <div className="flex items-center space-x-4">
                        <Images
                          url={review.icon}
                          addClass=" w-12 h-12 rounded-full"
                          clas=" object-cover object-center  "
                        />
                        <div>
                          <h1 className="text-xl font-semibold">
                            {review.name}
                          </h1>
                          <h4 className="font-light text-md">Client Review</h4>
                        </div>
                      </div>
                      <p>{review.review}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="relative w-full sm:flex justify-center items-center hidden gap-10 mt-7">
                <CarouselPrevious className=" bg-white shadow-none border-none outline-none " />
                <CarouselNext className="  bg-white shadow-none border-none outline-none" />
              </div>
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Reviews;
