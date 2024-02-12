
import Temp1Banner from "../../components/GenericTemp/Temp1Banner";
import { fakeData } from "../../Shared/fakeData";

const Temp1 = () => {

  const {meta, sections, ...heroData} = fakeData;

  return (
        <>
         <Temp1Banner {...heroData} />   
        </>
    );
};

export default Temp1;