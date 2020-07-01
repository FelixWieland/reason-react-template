 /* Entry point */
[@bs.val] external document: Js.t({..}) = "document";

let makeContainer = _ => {
  let container = document##getElementById("root");
  container;
};

ReactDOMRe.render(<App />, makeContainer());