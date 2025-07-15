function VerticalLine({ height,color }) {
    return (
        <div style={{ borderLeft: `1px solid ${color}`, height: height,}}></div>
    );
}

export default VerticalLine;
