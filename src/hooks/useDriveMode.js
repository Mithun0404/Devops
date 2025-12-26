import { useState } from "react";

export default function useDriveMode() {
  const [mode, setMode] = useState("STREET");

  const settings = {
    STREET: { intensity: 0.8, shake: 0.1 },
    TRACK: { intensity: 1.2, shake: 0.25 },
    BEAST: { intensity: 1.6, shake: 0.45 },
  };

  return { mode, setMode, config: settings[mode] };
}
