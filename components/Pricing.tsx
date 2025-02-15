import { plans } from "@/data/allData";
import Container from "./Container";
import PricingItem from "./PricingItem";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { animatedPlansTwo, animatedPlansOne } from "@/utils/motionObjects";

function Pricing() {
  return (
    <section
      id="plan"
      className="my-24 px-4 sm:px-24 md:px-4 py-24 xl:p-24 bg-secondary flex items-center justify-center"
    >
      <div>
        <MotionH2
          {...animatedPlansOne}
          className="text-center font-fontNunito text-4xl mx-auto md:text-5xl lg:text-5xl xl:text-6xl font-semibold"
        >
          Fiyatlandırma ve Planlar
        </MotionH2>
        <MotionH2
          {...animatedPlansOne}
          transition={{ ...animatedPlansOne.transition, delay: 0.7 }}
          className="text-center text-lg font-fontRaleway lg:text-xl xl:text-2xl font-normal md:max-w-[70%]   mx-auto my-5"
        >
          Kendiniz için ücretsiz kullanın, ekibinizin gelişmiş kontrole ihtiyacı
          olduğunda yükseltin.
        </MotionH2>
        <Container clas="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
          {plans.map((plan, index) => (
            <MotionDiv
              key={index}
              {...animatedPlansTwo}
              transition={{
                ...animatedPlansTwo.transition,
                delay: index * 0.4,
              }}
            >
              <PricingItem
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
              />
            </MotionDiv>
          ))}
        </Container>
      </div>
    </section>
  );
}

export default Pricing;
