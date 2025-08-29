import getName from "./names.js";
import {getHobbies} from "./hobbies.js";

function getPeople (){
    const fullName = getName("luca", "rossi");
    const hobbies = getHobbies("calcio", "pesca", "padel")
    return {fullName, hobbies}
}

const getfunction = getPeople();
console.log(getfunction);


console.log(getName("luca", "rossi"));
console.log(getHobbies("calcio", "pesca", "padel"));

