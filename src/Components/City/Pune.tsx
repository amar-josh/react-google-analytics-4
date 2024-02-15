import React, { useCallback } from "react";

function Pune() {
  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    const { location } = e.target;
    console.log(location.value);
  }, []);

  return (
    <form id="pune-city" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="location" placeholder="Property Location" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Pune;
