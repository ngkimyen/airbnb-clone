import React, { useEffect, useState } from "react";

const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
      isSmall : width <= 745,
  };
};

export default useViewPort;
