import teamMember1 from "../../../assets/TeamImages/team-member-1.png";
const Team = () => {
  return (
    <section className="text-[#595959] mb-[100px]">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between mb-7">
          <div className="grid grid-cols-2 space-x-10 ">
            <div>
              <h3 className="font-bold text-3xl my-4">
                Meet Our <span className="text-[#09D5D7]">Founder</span>, Sakib
              </h3>
              <p>
                Loves teaching so much that he has been doing it for 20+ years,
                in addition to his corporate and startup career. Sakib is an
                Oxford alumnus and holds a 1st Class Economics & Finance
                bachelors degree from Brunel. He holds a young people's mental
                health certification and an enhanced DBS certification. Sakib is
                a British Mensa member too! He is passionate about social
                entrepreneurship and devotes his time in leveraging technology
                in the education and mental health space.
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-1">
              <div className="col-span-1 row-span-2 border h-80 rounded-xl overflow-hidden group shadow-md">
                <img
                  src={teamMember1}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="col-span-1 row-span-1 border h-40 rounded-xl overflow-hidden group shadow-md">
                <img
                  src={teamMember1}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="col-span-1 row-span-1 border h-40 rounded-xl overflow-hidden group shadow-md">
                <img
                  src={teamMember1}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
