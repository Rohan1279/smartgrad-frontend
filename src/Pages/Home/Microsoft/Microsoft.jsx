import microsoft from "../../../assets/microsoft.png";
const Microsoft = () => {
  return (
    <section className=" text-[#595959] pt-36 pb-64  relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 space-x-20">
        <div className="">
          <img src={microsoft} alt="convocation-cap" className="w-[450px]" />
        </div>
        <div>
          <h3 className="font-bold text-3xl">
            {" "}
            Proud Partner With Microsoft For Startups
          </h3>
          <p className="mt-[10px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit ipsum possimus tempore voluptatum provident illo
            cumque nam dolorem, facere fugiat labore autem deserunt accusamus
            impedit nobis veritatis hic quos tenetur?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Microsoft;
