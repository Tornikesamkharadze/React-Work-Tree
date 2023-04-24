import Tour from "./Tour";

const Tours = ({ tours, filterTour }) => {
  
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} filterTour={filterTour} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Tours;
