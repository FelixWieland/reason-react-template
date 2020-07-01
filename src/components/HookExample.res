[@react.component]
let make = () => {
    let (count, setCount) = React.useState(_ => 0)

    if 1 == 2 {
        Js.log("Test1")
    } else {
        Js.log("Test2")
    }
    
    <>
        <button onClick={_ => setCount(old => old + 1)}>
            {React.string("Increment")}
        </button>
        <br />
        {React.string(string_of_int(count))}
    </>
}