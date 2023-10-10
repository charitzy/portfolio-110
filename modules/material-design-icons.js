import { resolve } from "path";

const icons = ["Phone", "Alarm", "Menu"];

export default function () {
  this.nuxt.hook("components:dirs", (dirs) => {
    dirs.push({
      path: resolve("node_modules/vue-material-design-icons"),
      prefix: "Icon-",
      pattern: `**/@(${icons.join("|")}).vue`,
    });
  });
}
