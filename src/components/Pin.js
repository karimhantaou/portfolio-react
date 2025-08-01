import Circle from './Circle';
import VerticalLine from "./VerticalLine";
function Pin({ position, color, type, title, description, place, year, onClick }) {

    if(type==="education") {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "150px", position: "absolute", bottom: "50%", left: position }} onClick={() => onClick(title, description, place, year)}>
                <p style={{textAlign:"center", marginBottom:"20px"}} className={"pin-title"}>{title}</p>
                <Circle size={"70px"} color={color} type={type}/>
                <VerticalLine height={"50px"} width={"7"} color={color}/>

            </div>
        );
    } if(type === "work") {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "150px", height: "fit-content", position: "absolute", top: "50%", left: position}} onClick={() => onClick(title, description, place, year)}>

                <VerticalLine height={"50px"} width={"7"} color={color}/>
                <Circle size={"70px"} color={color} type={type}/>
                <p style={{textAlign:"center", marginTop:"20px"}} className={"pin-title"}>{title}</p>
            </div>
        );
    }
}

export default Pin;