import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site.use(jsx_preact({ extensions: [".jsx"] }));
site.use(
  esbuild({
    extensions: [".tsx"],
  })
);

export default site;
