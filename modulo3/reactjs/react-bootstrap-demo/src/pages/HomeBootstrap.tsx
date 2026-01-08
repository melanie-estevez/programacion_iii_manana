import React from "react";
import BsHero from "../components/bs/BsHero";
import BsFeatures from "../components/bs/BsFeatures";
import BsNewsletter from "../components/bs/BsNewsletter";
import UncontrolledExample from "../components/bs/BsCrousel";

export default function HomeBootstrap() {
  return (
    <>
      <UncontrolledExample />
      <BsHero />
      <BsFeatures />
      <BsNewsletter />
    </>
  );
}
