import { Helmet } from "react-helmet";
import { fakeData } from "../../Shared/fakeData";
import BriefDetails from "../../components/GenericTemp/BriefDetails";
import Temp1Banner from "../../components/GenericTemp/Temp1Banner";
import Temp1Slider from "../../components/GenericTemp/Temp1Slider";

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

      {sections.map((section, index) => {
        if (section.type === "generic") {
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              {section.data.map((data, index) => {
                return (
                 <BriefDetails key={index} data={data} index={index} />
                );
              })}
            </div>
          );
        } else if (section.type === "slider") {
          return (
            <Temp1Slider data={section?.data} />
          );
        } else if (section.type === "gallery") {
          return (
            "gallery"
          );
        }
      })}
    </>
  );
};

export default Temp1;
