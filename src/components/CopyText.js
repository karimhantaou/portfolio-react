function CopyText({ text }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .catch(err => console.error(err));
        const notification = document.querySelector(".copy-notification");
        notification.style.visibility = "visible";
        setTimeout(() => {
            notification.style.visibility = "hidden";
        }, 2000);
    };

    return (
            <p className={"copyText-element"} onClick={handleCopy}>{text}</p>

    );
}

export default CopyText;