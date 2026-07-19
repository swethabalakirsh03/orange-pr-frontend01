import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./Component/Home/LoadingScreen";

const Homepage = lazy(() => import("./Component/Home/homepage"));
const ThinkCreatePromote = lazy(() =>
  import("./Component/promote/Thinkcreatepromote")
);
const WhatWeDo = lazy(() =>
  import("./Component/WhatWeDo/WhatWeDo")
);
const WhyChooseUs = lazy(() =>
  import("./Component/WhyChooseUs/WhyChooseUs")
);
const Testimonial = lazy(() =>
  import("./Component/Testimonial/Testimonial")
);
const GetInTouch = lazy(() =>
  import("./Component/Getintouch/Getintouch")
);
const Newsletter = lazy(() =>
  import("./Component/Newsletter/Newsletter")
);
const Footer = lazy(() =>
  import("./Component/Footer/Footer")
);

const SCROLL_OFFSET = { scrollMarginTop: 90 };

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div id="home" style={SCROLL_OFFSET}>
        <Homepage />
      </div>

      <ThinkCreatePromote />

      <div id="services" style={SCROLL_OFFSET}>
        <WhatWeDo />
      </div>

      <div id="about" style={SCROLL_OFFSET}>
        <WhyChooseUs />
      </div>

      <Testimonial />

      <div id="contact" style={SCROLL_OFFSET}>
        <GetInTouch />
      </div>

      <Newsletter />
      <Footer />
    </Suspense>
  );
}

export default App;