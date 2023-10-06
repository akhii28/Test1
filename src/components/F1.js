import "./style.css";
function F1()
{
    const myStyle = {
        color:"blue",
        backgroundColor: "black"
    }

    return(
        <div>
            <h1 style={{color:"red",marginLeft:"30px"}}>Inline style</h1>
            <h1 style={myStyle}>Internal style</h1>
            <h1 class="c1">External style</h1>
            <h1 class="text-center bg-dark text-primary">Bootstrap style</h1>
        </div>
    )
}

export default F1;