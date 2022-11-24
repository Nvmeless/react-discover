
//Declarer une fonction
const myFunc = () => {
    return true;
}
// function getRandomInt(max) {
//     max++;
//     return Math.floor(Math.random() * max);
//   }


let jsonObj = {
    varOne: true,
    varTwo:false,
    varThree: "true",
    varFour:"false",
    maxVal: 1,
}

let jsonSecondObj = {
    varSecondOne: true,
    varSecondTwo:false,
    varSecondThree: "true",
    varSecondFour:"false"
}

const {varOne} = jsonObj;
// const varOne = jsonObj.varOne;
const {varThree, maxVal} = jsonObj;
// const varThree = jsonObj.varThree;
// const varFour = jsonObj.varFour;

//Soit : 

const getRandomInt = (max) => {
    max++;
    return Math.floor(Math.random() * max);
  }
  const getRandomIntObj = ({maxVal}) => {
    maxVal++;
    return Math.floor(Math.random() * maxVal);
  }
const howMuchParam = (...properties) => {
    console.log(properties) 
}


howMuchParam("ga"); // Renvoie ["ga"]
howMuchParam("bu", "zo"); // Renvoie ["bu", "zo"]





const cokeMan = () => {
    return "En Ciseauuuu"
}




const mySecondFunc = ({varOne},{varSecondTwo, ...properties}) => {
    console.log(varOne);
    console.log(varSecondTwo);
    //console.log(props.varSecondTwo);
    console.log(properties.varSecondFour);
    return varSecondTwo;
}


const crashOuFenek = () => {
    return (getRandomInt(maxVal) ? getRandomIntObj(jsonObj) : getRandomInt(maxVal) ) ? "Papier mon gars" :  "Feuilles longues comme Fei Lon"
}

// Ternaire :
let isFreak = mySecondFunc(jsonObj, jsonSecondObj);

let shifumi = isFreak ? "On Commence toujours par la pierre !" : "Feuilles longues comme Fei Lon"

let {varTwo} = jsonObj;

shifumi = isFreak && !varTwo ? "On Commence toujours par la pierre !" : varTwo ? crashOuFenek : cokeMan;

shifumi = isFreak && !varTwo ? shifumi : shifumi();
// if(isFreak && !varTwo){
//     shifumi = shifumi();
// }


console.log(shifumi);
//Retourne "En Ciseauuuu"







const ga = false && "n'est pas executé"
const bu = true && (() => { "est executé" })

const zo = "Je suis renvoyé" || "Je ne suis pas renvoyé"

const teh = false || "Je suis renvoyé"

const phrase = `On peu voir que bu ${bu()} et que teh et zo renvoie ${teh || zo}`

