import { Helmet } from "react-helmet";
import { fakeData } from "../../Shared/fakeData";
import Temp1Banner from "../../components/GenericTemp/Temp1Banner";

const Temp1 = () => {
  const { meta, sections, ...heroData } = fakeData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.seo?.description || "Default description"} />
      </Helmet>

      <Temp1Banner {...heroData} />
    </>
  );
};

export default Temp1;
