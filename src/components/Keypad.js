// Code Keypad Component Here

function Keypad(props){
    function enterPassword(){
        console.log("Entering password...")
    };
    return <input type = "password" onChange = {enterPassword}/>
};

export default Keypad;