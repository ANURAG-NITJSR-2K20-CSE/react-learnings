export default function Random() {
    let number = Math.random()*10;

    return <h1 style={{"backgroundColor" : "yellow"}}> random number is {Math.round(number)}</h1>;
    
}