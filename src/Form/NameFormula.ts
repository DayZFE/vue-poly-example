import { bond } from "vue-poly";

export default function NameFormula() {
  const partial = {
    name: bond("form", ["model", "value", "name"], ""),
    setName: bond("form", "changeName", () => {}),
  };
  return partial;
}
