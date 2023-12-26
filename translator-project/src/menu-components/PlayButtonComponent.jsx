export default function PlayButtonComponent({onSubmit}) {
    const buttonStyle = {
        height: "100px",
        fontSize: "30px",
    }
    
    return (
        <>
           <button style={buttonStyle} onClick={onSubmit}>Play</button> 
        </>	
    )
}