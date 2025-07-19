import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(7);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_{}[]=`+*/-";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    password.current?.select();
    password.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="container">
      <h1 className="title">Password Generator</h1>
      <div className="password-box">
        <input
          type="text"
          value={password}
          className="password-input"
          placeholder="You Password"
          readOnly
          ref={passwordRef}
        />

        <button onClick={copyPasswordToClipboard} className="copy-btn">
          {" "}
          Copy
        </button>
      </div>
      <div className="controls">
        <div className="slider">
          <input
            type="range"
            min={5}
            max={99}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label htmlFor=""> Password length : {length}</label>
        </div>
        <div className="checkbox-group">
          <label htmlFor="">
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            Include Numbers
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
