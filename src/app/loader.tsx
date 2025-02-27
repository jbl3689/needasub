import { cardio } from "ldrs";

cardio.register();

export default function Loader() {
  return <l-cardio size="100" stroke="4" speed="2" color="white"></l-cardio>;
}
