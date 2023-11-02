import { useState } from "react";
import "./general.css";
import "./style.css";
import "./queries.css";
import SectionHero from "./pages/SectionHero";
import SectionFeatured from "./pages/SectionFeatured";
import SectionHow from "./pages/SectionHow";
import SectionMeals from "./pages/SectionMeals";
import SectionTestimonials from "./pages/SectionTestimonials";
import SectionPricing from "./pages/SectionPricing";
import SectionCta from "./pages/SectionCta";

function App() {
  return (
    <>
      <SectionHero />
      <SectionFeatured />
      <SectionHow />
      <SectionMeals />
      <SectionTestimonials />
      <SectionPricing />
      <SectionCta />
    </>
  );
}

export default App;
