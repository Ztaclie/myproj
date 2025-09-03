import { useState } from "react";

const Hero = () => {
  // Input icinde deger degisince metinde degiscek
  const [metin, setMetin] = useState("");

  const handleOnChange = (e) => {
    setMetin(e.target.value);
  };

  return (
    <>
      <div className="Hero">
        <h1 className="text-5xl text-blue-400">{metin}</h1>
        <input
          type="text"
          className="border-2 border-blue-400 p-2"
          onChange={handleOnChange}
        />
      </div>
    </>
  );
};

export default Hero;
