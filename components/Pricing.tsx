import { plans } from "../data/plans";
import Container from "./Container";
import PricingItem from "./PricingItem";

function Pricing() {
  return (
    <section className="my-24 px-4 sm:px-24 md:px-4 py-24 xl:p-24 bg-secondary flex items-center justify-center">
      <div>
        <h2 className="text-center text-4xl mx-auto md:text-5xl lg:text-5xl xl:text-6xl font-semibold">
          Fiyatlandırma ve Planlar
        </h2>
        <p className="text-center text-lg  lg:text-xl xl:text-2xl font-normal md:max-w-[70%]   mx-auto my-5">
          Kendiniz için ücretsiz kullanın, ekibinizin gelişmiş kontrole ihtiyacı
          olduğunda yükseltin.
        </p>
        <Container clas="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
          {plans.map((plan, index) => (
            <PricingItem
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
            />
          ))}
        </Container>
      </div>
    </section>
  );
}

export default Pricing;
