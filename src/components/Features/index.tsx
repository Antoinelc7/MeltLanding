import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="SLOW SMOKED BARBECUE"
            paragraph="Enrichi des enseignements de Jeffrey Howard, pitmaster de l’un des barbecues les plus réputés du
            Texas (Pecan Lodge) et d’Alexander Smith, pointure du barbecue à New York (Mighty Quinn’s Surf
            BBQ), nous avons pu perpétuer et surtout faire voyager le BBQ Texan jusqu’à vos papilles."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
