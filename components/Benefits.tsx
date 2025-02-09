import Container from "./Container";
const benefitsData = [];

function Benefits() {
  return (
    <section>
      <Container clas=" flex flex-col lg:flex-row justify-center items-center py-20 ">
        <div className="flex flex-col space-y-8">
          <h2>Avantajlar ve Faydalar</h2>
          <h3>
            Fikirlerinizi Wingardium ile gerçeğe dönüştürün. Birçok güçlü
            Avantajlar ile sadelik ve netliği garanti ediyoruz.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 "></div>
      </Container>
    </section>
  );
}

export default Benefits;
