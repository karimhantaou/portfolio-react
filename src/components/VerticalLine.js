function VerticalLine({ height, width,color }) {
    return (
        <div style={{ borderLeft: `${width}px solid ${color}`, height: height, borderRadius: "50px"}}></div>
    );
}

export default VerticalLine;
