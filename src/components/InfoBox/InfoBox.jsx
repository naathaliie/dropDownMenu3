import "./InfoBox.css";

const InfoBox = ({ character }) => {
    /*The method Object.values() will return an array of ONLY the values (värden) from the object. 
     Each value corresponds to a property(egenskap) in the object. A property consists of a key and a value. 
     Same with Object.keys(). It will return an array of ONLY the keys */
    const valuestoPrint = Object.values(character);
    const keysToPrint = Object.keys(character);
    console.log("keys", keysToPrint);
    console.log("values", valuestoPrint);
    console.log("KARAKTÄREN", character.pet);
    return (
      <div className="infoBoxDiv">
        <h1>{`Snabbfakta om: ${character.firstname}`}</h1>
        <ul className="infoBoxList">
          {keysToPrint.map((key, index) => (
            <li key={index}>
              {key}:  {Array.isArray(valuestoPrint[index]) // Check IF the value is an array with a ternary operation (ternär operation)
              ? valuestoPrint[index].join(", ") // IF true, we use the .join() method. It will join/concatenate every element to one string BUT separate each with, in this case, (", ")
              : valuestoPrint[index]} {/*IF false, we are just going to use the value right away */}
            </li>
          ))}
        </ul>
        </div>
    );
  };
  
  export default InfoBox;
  