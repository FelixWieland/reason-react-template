// Entry point
[@bs.val] external document: Js.t({..}) = "document";

let makeContainer = _ => {
  let container = document##createElement("div");
  let () = document##body##appendChild(container);
  container;
};

ReactDOMRe.render(<App />, makeContainer());