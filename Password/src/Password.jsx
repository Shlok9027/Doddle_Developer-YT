import React, { useState } from "react";
import img1 from "./assets/CloseEye.png";
import img2 from "./assets/OpenEye.png";

function Password() {
  const [password, setPassword] = useState(false);

  const handleClick = () => {
    setPassword(!password);
  };
  return (
    <>
      <h1>write password</h1>
      <div className="password">
        <input
          className="password-input"
          type={password ? "password" : "text"}
          placeholder="Password"
          
        />

        {password ? (
          <img onClick={handleClick} className="img" src={img2} alt="" />
        ) : (
          <img onClick={handleClick} className="img" src={img1} alt="" />
        )}
      </div>

      <div></div>
    </>
  );
}

export default Password;
