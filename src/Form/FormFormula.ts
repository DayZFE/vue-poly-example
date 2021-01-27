import { ref, watch } from "vue";
import { definePoly, watchPoly } from "vue-poly";

export default function FormFormula() {
  const model = ref({ name: "init", password: "" });
  const poly = definePoly({
    id: Symbol(),
    model,
    changeName() {
      model.value.name = "fuck";
    },
  });
  watchPoly(poly, (res) => {
    console.log("当前连接的服务", res);
  });
  return poly;
}
