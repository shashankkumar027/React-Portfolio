import React from 'react'

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Abhishek"}
          feedback={"Your projects are quit attractive and mobile responsive."}
        />
        <TestimonialCard
          name={"Kevin"}
          feedback={"Xcrypto make easy to check the rates, and dual theme makes user experience cool."}
        />
        <TestimonialCard
          name={"Montu"}
          feedback={"video hub's layout is very eyecatchy and carousel moves nicely."}
        />
      </section>
    </div>
  );
}

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt={name}
    />

    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);


export default Testimonial