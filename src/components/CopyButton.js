import { IoCopyOutline } from "react-icons/io5";

function CopyButton({ text }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .catch(err => console.error(err));
    };

    return (
            <IoCopyOutline size={"25%"} onClick={handleCopy} className={"copy-button"}/>

    );
}

export default CopyButton;