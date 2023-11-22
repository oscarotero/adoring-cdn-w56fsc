import { emojify } from "npm:node-emoji@2";

function index() {
  return <div>{emojify(":t-rex: :heart: NPM")}</div>;
}

export default index;
