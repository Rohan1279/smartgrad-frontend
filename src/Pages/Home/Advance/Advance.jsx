import student4 from "../../../assets/Students/student 4.png";
import student5 from "../../../assets/Students/student 5.png";
import student6 from "../../../assets/Students/student 6.png";
import advance from "../../../assets/advance.png";

const Advance = () => {
  return (
    <section className=" text-[#595959] my-36">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <img src={advance} alt="advance-icon" className="w-8 h-8 mr-2" />
            <div>
              <h2 className="text-2xl font-bold">Accelerate</h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="pr-24">
              IELTS Academic: Purpose: Primarily for individuals seeking
              admission to higher education institutions. Focus: Assesses a
              candidate's ability to undertake academic tasks, including complex
              texts and formal writing. IELTS General Training: Purpose:
              Designed for work, immigration, or secondary education purposes.
              Focus: Evaluates practical, everyday English language skills used
              in work and social environments.
            </p>
            <button className="bg-[#00D4D6] w-fit h-10 px-4 rounded-xl text-white mt-8">
              Explore
            </button>
          </div>
          <div className=" flex relative justify-center">
            <img
              src={student6}
              alt=""
              className="w-5/12 absolute -translate-x-32 -translate-y-20 z-30 hover:scale-105  transition-transform"
            />
            <img
              src={student5}
              alt=""
              className="w-5/12 absolute -translate-x-18 -translate-y-10 z-20 hover:z-30 hover:scale-105 transition-transform"
            />
            <img
              src={student6}
              alt=""
              className="w-5/12 absolute translate-x-32  z-10 hover:z-30 hover:scale-105  transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advance;
