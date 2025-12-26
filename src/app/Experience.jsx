import Cursor from "../ui/Cursor";
import Preload from "../sections/Preload/Preload";
import Ignition from "../sections/Ignition/Ignition";
import Drive from "../sections/Drive/Drive";
import Evolution from "../sections/Evolution/Evolution";
import Machine from "../sections/Machine/Machine";
import Community from "../sections/Community/Community";

export default function Experience() {
  return (
    <>
      <Cursor />
      <Preload />
      <Ignition />
      <Drive />
      <Evolution />
      <Machine />
      <Community />
    </>
  );
}
