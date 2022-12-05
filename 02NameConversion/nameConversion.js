// required 1.5 hours to complete

const InputText = document.getElementById("text");
const convertBtn = document.getElementById("convert-btn");

const camelCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const screamingSnakeCase = document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const screamingKebabCase = document.getElementById("screaming-kebab-case");

const ConvertText = (text) => {
  // console.log(text);

  camelCase.textContent = toCamelCase(text);
  pascalCase.textContent = toPascalCase(text);
  snakeCase.textContent = toSnakeCase(text);
  screamingSnakeCase.textContent = toScreamingSnakeCase(text);
  kebabCase.textContent = toKebabCase(text);
  screamingKebabCase.textContent = toScreamingKebabCase(text);
};
// camel case function

const toCamelCase = (text) => {
  const StringArray=text.spilt(" ");   //spilt the string
  const NewArray= stringArray.map((item,index)=>{    //traverse through index's
      if (index>0){
        return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
      }
      else
      return item;
  });
  return NewArray.join("");
}
  
  // pascal case function
  
//   const toPascalCase = (text) => {
//     const stringArray = text.split(" ");
//     // console.log(stringArray[0].charAt(0));
  
//     const modifiedArray = stringArray.map((item) => {
//       return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
//     });
  
//     const finalString = modifiedArray.join(" ");
//     console.log(finalString);
//     return finalString;
//   };
  
//   // snake case function
  
//   const toSnakeCase = (text) => {
//     const stringArray = text.split(" ");
  
//     const finalString = stringArray.join("_");
//     console.log(finalString);
//     return finalString;
//   };
  
//   // screaming snake case function
  
//   const toScreamingSnakeCase = (text) => {
//     const stringArray = text.split(" ");
  
//     const modifiedArray = stringArray.map((item) => {
//       return item.toUpperCase();
//     });
  
//     const finalString = modifiedArray.join("_");
//     console.log(finalString);
//     return finalString;
//   };
  
//   // kebab case function
  
//   const toKebabCase = (text) => {
//     const stringArray = text.split(" ");
  
//     const finalString = stringArray.join("-");
//     console.log(finalString);
//     return finalString;
//   };
  
//   // screaming kebab case function
  
//   const toScreamingKebabCase = (text) => {
//     const stringArray = text.split(" ");
  
//     const modifiedArray = stringArray.map((item) => {
//       return item.toUpperCase();
//     });
  
//     const finalString = modifiedArray.join("-");
//     console.log(finalString);
//     return finalString;
//   };
  

//button eventlistener
convertBtn.addEventListener('click',(e)=>{
    const text=InputText.value.trim().toLowerCase();
    ConvertText(text);
})

  