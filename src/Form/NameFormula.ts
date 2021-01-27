import { bond, PolyID } from "vue-poly";

export default function NameFormula(props: { token: PolyID }) {
  const partial = {
    name: bond(props.token, ["model", "value", "name"], ""),
    setName: bond(props.token, "changeName", () => {}),
  };
  return partial;
}
