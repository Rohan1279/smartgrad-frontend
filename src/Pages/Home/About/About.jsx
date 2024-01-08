const About = () => {
  return (
    <section className="text-[#595959] py-10">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-3 items-center w-full  text-center justify-between">
          <hr className="border border-t-black  w-full"></hr>
          <h2 className="text-4xl font-bold text-center">About Us</h2>
          <hr className="border border-t-black w-full"></hr>
        </div>
        <div className="flex justify-between mt-28 space-x-24">
          <div>
            <h3 className="text-3xl font-bold">Mission</h3>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae illum eos reiciendis dicta! Nostrum, consectetur
              voluptas aliquam illum laboriosam vel sed beatae laudantium
              nesciunt consequuntur. Ex error nostrum maiores, aliquam
              accusantium repellendus illo pariatur tempore reiciendis
              recusandae consectetur. Non, aperiam.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Vision</h3>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae illum eos reiciendis dicta! Nostrum, consectetur
              voluptas aliquam illum laboriosam vel sed beatae laudantium
              nesciunt consequuntur. Ex error nostrum maiores, aliquam
              accusantium repellendus illo pariatur tempore reiciendis
              recusandae consectetur. Non, aperiam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
