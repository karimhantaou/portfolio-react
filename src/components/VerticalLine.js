function VerticalLine({ height, width,color }) {
    return (
        <div style={{ borderLeft: `${width}px solid ${color}`, height: height,}}></div>
    );
}

export default VerticalLine;
