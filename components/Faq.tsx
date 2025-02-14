import Container from "./Container";
import { faq } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section className="w-full mx-auto my-24">
      <Container clas=" flex flex-col  space-y-12 ">
        <h2 className="text-center font-fontNunito text-4xl uppercase md:text-5xl xl:text-6xl font-sofiaProSemiBold text-black pb-8 border-b border-black">
          FAQ
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-[90%] md:w-[80%] xl:md:w-[70%] 3xl:w-[60%] mx-auto"
        >
          {faq.map((Item, index) => (
            <AccordionItem
              className="my-5"
              key={index}
              value={`item-${index + 1}`}
            >
              <AccordionTrigger className="text-xl font-fontNunito">
                {Item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg font-normal font-fontRaleway">
                {Item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

export default Faq;
