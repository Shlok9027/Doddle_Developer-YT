import React, { useCallback, useEffect, useRef, useState } from "react";

function getStrength(password) {
  if (
    password.length >= 14 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  ) {
    return {
      label: "ULTRA-STRONG",
      color: "from-green-400 to-cyan-400",
      bar: "w-full scale-x-105",
    };
  }
  if (
    password.length >= 12 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password))
  ) {
    return {
      label: "Strong",
      color: "from-lime-300 to-yellow-400",
      bar: "w-4/5 scale-x-100",
    };
  }
  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password)
  ) {
    return {
      label: "Solid",
      color: "from-yellow-400 to-orange-400",
      bar: "w-2/3 scale-x-100",
    };
  }
  if (password.length > 0) {
    return {
      label: "Weak",
      color: "from-red-500 to-pink-500",
      bar: "w-1/3 scale-x-95",
    };
  }
  return { label: "", color: "from-slate-300 to-slate-500", bar: "w-0" };
}

export default function App() {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);

  const passwordRef = useRef(null);

  // Ambiguous chars to optionally exclude
  const ambiguous = "O0l1I|`'\" ";
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);

  // --- Password Generator: ensures at least one from each enabled set ---
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "0123456789";
    let special = "~!@#$%^&*()_{}[]=`+*/-";
    let allowedSets = [upper, lower];
    let all = upper + lower;
    if (numAllowed) {
      allowedSets.push(nums);
      all += nums;
    }
    if (charAllowed) {
      allowedSets.push(special);
      all += special;
    }
    if (excludeAmbiguous) {
      // Remove ambiguous from all sets
      allowedSets = allowedSets.map(set =>
        set.split("").filter(c => !ambiguous.includes(c)).join("")
      );
      all = all.split("").filter(c => !ambiguous.includes(c)).join("");
    }
    // Guarantee at least one from each selected set
    pass = allowedSets
      .map(set => set[Math.floor(Math.random() * set.length)])
      .join("");
    // Fill the rest randomly
    for (let i = pass.length; i < length; i++) {
      pass += all[Math.floor(Math.random() * all.length)];
    }
    // Shuffle to remove predictable order
    pass = [...pass].sort(() => Math.random() - 0.5).join("");
    setPassword(pass);
  }, [length, numAllowed, charAllowed, excludeAmbiguous]);

  // --- Copy Password to Clipboard + animation ---
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator, excludeAmbiguous]);

  const strength = getStrength(password);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d105a] via-[#350263] to-[#1cdbea] px-3 py-10"
      style={{ fontFamily: `'Nunito', 'Segoe UI', Arial, sans-serif` }}
    >
      <div className="relative max-w-md w-full flex flex-col items-center bg-white/20 rounded-3xl border border-white/30 shadow-[0_8px_60px_2px_rgba(36,255,255,.23)] p-7 pt-6 z-10 animate-glowin overflow-visible backdrop-blur-xl transition-all">
        {/* Animated Neon Border Glow */}
        <span
          className="absolute -inset-2 pointer-events-none rounded-[35px] blur-lg opacity-80 z-[-1] animate-aurapulse"
          style={{
            background:
              "conic-gradient(from 50deg at 50% 50%, #00ffe6cc, #fdb0fd99, #ffe06966, #00ffd099 22%, #00ffe699 65%, #a8fffecc 85%, #ffd4f8ff 100%)",
          }}
        ></span>

        <h1 className="text-4xl text-white text-center font-extrabold tracking-widest mb-5 drop-shadow-logo uppercase">
          <span className="bg-gradient-to-br from-[#00ffe7] via-pink-400 to-[#fdff8b] bg-clip-text text-transparent block">
            Super Sonic
          </span>
          <span className="text-2xl block mt-1 font-black text-white/90 tracking-wide">
            Password Generator
          </span>
        </h1>

        {/* PASSWORD BOX */}
        <div className="flex w-full bg-white/70 rounded-xl border focus-within:ring-[3px] focus-within:ring-cyan-400/80 transition shadow-lg shadow-cyan-500/10 mb-3 items-center relative overflow-hidden group">
          <input
            ref={passwordRef}
            type={show ? "text" : "password"}
            value={password}
            readOnly
            spellCheck={false}
            className="flex-1 bg-transparent p-4 px-5 font-mono text-lg font-extrabold tracking-[.15em] text-violet-900 outline-none selection:bg-violet-400/60 selection:text-black transition"
            style={{ fontFamily: `'Nunito', monospace` }}
            placeholder="Your Sonic Password"
            aria-label="Generated password"
          />
          {/* Show/Hide toggle */}
          <button
            tabIndex={0}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-20 p-2 bg-transparent hover:bg-slate-100/70 rounded transition text-xl"
            style={{ top:2, bottom:2 }}
            onClick={() => setShow((s) => !s)}
            title="Show / Hide password"
            type="button"
          >
            {show ? "🙈" : "👁️"}
          </button>
          {/* Copy-to-clipboard button */}
          <button
            onClick={copyPasswordToClipboard}
            className={`h-full px-5 py-3.5 text-base font-black tracking-wider uppercase rounded-tr-xl rounded-br-xl text-white bg-gradient-to-br from-pink-400 via-fuchsia-500 to-cyan-400 hover:from-cyan-300 hover:to-pink-300 hover:scale-105 transition-all duration-200 hover:shadow-md outline-none focus:ring-2 focus:ring-cyan-300/70 relative`}
            style={{ zIndex: 1 }}
            aria-label="Copy password"
            type="button"
          >
            {/* Copy animation */}
            <span
              className={`absolute z-20 bg-green-300/60 rounded-full pointer-events-none animate-[pop_0.48s] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              ${copied ? "opacity-80 scale-100" : "opacity-0 scale-0"}`}
              style={{ width: 36, height: 36 }}
              aria-hidden="true"
            ></span>
            {copied ? (
              <span className="text-green-200 animate-bounce">✓ Copied</span>
            ) : (
              "Copy"
            )}
          </button>
        </div>

        {/* Password Strength Bar */}
        <div className="w-full mt-2 mb-2">
          <div
            className={`h-3 rounded-full overflow-hidden relative bg-gradient-to-r from-[#252537]/50 to-[#1ddae2]/20`}
          >
            <div
              className={`absolute top-0 left-0 h-full transition-all duration-500 ease-out ${strength.bar} bg-gradient-to-r ${strength.color} shadow-md`}
            ></div>
          </div>
          <div className="mt-2 text-sm flex justify-between tracking-wider">
            <span className="text-slate-200">Strength:</span>
            <span
              className={`uppercase font-extrabold ${
                strength.label === "ULTRA-STRONG"
                  ? "text-cyan-100 animate-pulse"
                  : strength.label === "Strong"
                  ? "text-lime-100"
                  : strength.label === "Solid"
                  ? "text-yellow-200"
                  : strength.label === "Weak"
                  ? "text-pink-200"
                  : "text-slate-100"
              }`}
            >
              {strength.label}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full flex flex-col gap-5 mt-3">
          {/* Regenerate & Accessibility */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={passwordGenerator}
              aria-label="Regenerate password"
              title="Regenerate password"
              className="py-1 px-4 rounded-md bg-cyan-400 hover:bg-cyan-300 text-white font-bold text-xs uppercase shadow-sm transition-all"
              type="button"
            >
              Regenerate
            </button>
            <div aria-live="polite" role="status" className="sr-only">
              {copied ? "Password copied!" : ""}
            </div>
          </div>
          {/* Slider */}
          <div>
            <input
              type="range"
              min={5}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-cyan-400 accent-fuchsia-500 transition-all"
            />
            <label className="block mt-1 text-cyan-50 font-semibold text-xs">
              Password length:{" "}
              <span className="font-black text-violet-300 text-lg">
                {length}
              </span>
            </label>
          </div>
          {/* Checkboxes */}
          <div className="flex gap-5 w-full justify-center flex-wrap">
            <label className="flex items-center gap-2 text-white font-semibold cursor-pointer select-none text-base transition group">
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() => setNumAllowed((prev) => !prev)}
                className="w-5 h-5 rounded-md accent-cyan-400 border-cyan-400 shadow-inner shadow-cyan-700/40 focus:ring-2 focus:ring-cyan-300 transition-all"
              />
              <span className="group-hover:text-cyan-200 duration-200">
                Numbers
              </span>
            </label>
            <label className="flex items-center gap-2 text-white font-semibold cursor-pointer select-none text-base transition group">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-5 h-5 rounded-md accent-pink-400 border-pink-400 shadow-inner shadow-pink-700/40 focus:ring-2 focus:ring-pink-300 transition-all"
              />
              <span className="group-hover:text-pink-200 duration-200">
                Special Characters
              </span>
            </label>
            <label className="flex items-center gap-2 text-white font-semibold cursor-pointer select-none text-base transition group">
              <input
                type="checkbox"
                checked={excludeAmbiguous}
                onChange={() => setExcludeAmbiguous((prev) => !prev)}
                className="w-5 h-5 rounded-md accent-yellow-400 border-yellow-400 shadow-inner shadow-yellow-700/40 focus:ring-2 focus:ring-yellow-300 transition-all"
              />
              <span className="group-hover:text-yellow-200 duration-200">
                Exclude ambiguous (O0l1I)
              </span>
            </label>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-glowin {
          animation: glowIn .85s cubic-bezier(.21,1.1,.5,1.01);
        }
        @keyframes glowIn {
          from { opacity:0; transform: scale(.93) translateY(30px);}
          80%  { opacity:.88;}
          to { opacity:1; transform: scale(1) translateY(0);}
        }
        .animate-aurapulse {
          animation: aurapulse 6s ease-in-out infinite alternate;
        }
        @keyframes aurapulse {
          0% { opacity:.82; filter: blur(6px);}
          60% { opacity:1; filter: blur(10px);}
          100% { opacity:.85; filter: blur(7px);}
        }
        .drop-shadow-logo {
          filter: drop-shadow(0 0 10px #93f9fe) drop-shadow(0 0 20px #f500b5aa);
        }
        @keyframes pop {
          from { opacity:1; transform:scale(0.6);}
          70% { opacity:.8; transform:scale(1.15);}
          to { opacity:0; transform:scale(1);}
        }
      `}</style>
    </div>
  );
}
