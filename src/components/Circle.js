import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";


function Circle({size, color, type}) {
    return (
        <div style={{width:size, height:size, backgroundColor:color, borderRadius:"100%", display: "flex", justifyContent: "center", alignItems: "center"}} className={"circle"} >
            {type === "education" ? (<IoSchoolOutline size={40} color={"var(--primary-color)"}/>) : type === "work" ? (<MdOutlineWorkOutline size={40} color={"var(--primary-color)"}/>) : null}
        </div>
    );
}

export default Circle;
