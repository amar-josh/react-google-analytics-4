import React, { useCallback } from "react";
import ReactGA from "react-ga4";

function Pune() {
  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    const { location } = e.target;
    console.log(location.value);
    ReactGA.event("button_click", {
      category: "Button",
      label: `Submit City ${location.value}`,
    });
  }, []);

  return (
    <form id="pune-city" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="location" placeholder="Property Location" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Pune;
