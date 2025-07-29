function HorizontalLine({height,width,color}) {
    return (
        <div style={{width: width, borderTop: `${height}px solid ${color}`}}></div>
    );
}

export default HorizontalLine;
