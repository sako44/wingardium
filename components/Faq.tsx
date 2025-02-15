import Container from "./Container";
import { faq } from "@/data/allData";
import AnimatedHeader from "./AnimatedHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MotionDiv from "./MotionDiv";
import { animatedBenfitOne } from "@/utils/motionObjects";

function Faq() {
  return (
    <section className="w-full mx-auto my-24">
      <Container clas=" flex flex-col  space-y-12 ">
        <AnimatedHeader title="FAQ" />
        <Accordion
          type="single"
          collapsible
          className="w-[90%] md:w-[80%] xl:md:w-[70%] 3xl:w-[60%] mx-auto"
        >
          {faq.map((Item, index) => (
            <MotionDiv
              {...animatedBenfitOne}
              transition={{
                ...animatedBenfitOne.transition,
                delay: index * 0.5,
              }}
              key={index}
            >
              <AccordionItem className="my-5" value={`item-${index + 1}`}>
                <AccordionTrigger className="text-xl font-fontNunito">
                  {Item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal font-fontRaleway">
                  {Item.answer}
                </AccordionContent>
              </AccordionItem>
            </MotionDiv>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

export default Faq;
