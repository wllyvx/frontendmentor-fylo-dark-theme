import React from "react";
import featuresData from "../data/FeaturesData";
import FeatureItems from "./FeatureItems";

function Features() {
  const featureElements = featuresData.map((item) => {
    return (
      <FeatureItems
        key={item.id}
        icon={item.icon}
        title={item.title}
        desc={item.desc}
      />
    );
  });

  console.log(featureElements);

  return (
    <section className="flex flex-col justify-center items-center mt-24 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-[6.5rem] max-w-[60rem]">
        {featureElements}
      </div>
    </section>
  );
}

export default Features;
