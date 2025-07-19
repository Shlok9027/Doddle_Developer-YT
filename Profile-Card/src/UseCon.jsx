import React, { createContext } from "react";
import UseContext from "./UseContext";

const data1 = createContext();
const data2 = createContext();
function UseCon() {
  const name = "Shlok";
  const age = 24;
  return (
    <>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <UseContext />
        </data2.Provider>
      </data1.Provider>
    </>
  );
}

export default UseCon;
export {data1, data2} 