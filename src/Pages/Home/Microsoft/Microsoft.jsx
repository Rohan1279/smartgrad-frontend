import microsoft from "../../../assets/microsoft.png";
import background from "../../../assets/background-shapes.png";

const Microsoft = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" text-[#595959] relative mb-[100px] px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 mmd:grid-cols-2 gap-y-8 mmd:space-x-20">
        <div className="flex justify-center">
          <img src={microsoft} alt="convocation-cap" className="w-[450px]" />
        </div>
        <div className="flex flex-col justify-center ">
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
