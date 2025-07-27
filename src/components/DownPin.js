import Circle from './Circle';
import VerticalLine from "./VerticalLine";

function DownPin({ position, color }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "fit-content", position: "absolute", top: "0px", left: position }}>
            <VerticalLine height={"80px"} width={"7"} color={color} />
            <Circle size={"70px"} color={color} type={"work"} />
        </div>
    );
}

export default DownPin;