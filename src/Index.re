// Entry point
[@bs.val] external document: Js.t({..}) = "document";

let makeContainer = _ => {
  //let container = document##createElement("div");
  //let () = document##body##appendChild(container);
  let container = document##getElementById("root");
  container;
};

ReactDOMRe.render(<App />, makeContainer());