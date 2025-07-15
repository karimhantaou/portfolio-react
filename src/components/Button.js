function BasicButton({name}) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", background:'red' }}>
            <h3>{name}</h3>
        </div>
    );
}

export default BasicButton;