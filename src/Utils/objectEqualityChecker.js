export const checkEquality = (object1, object2) => {
   let object1Keys = Object.keys(object1)
   let object2Keys = Object.keys(object2)
   let object1Values = Object.values(object1)
   let object2Values = Object.values(object2)
for(let i = 0; i < object1Keys.length; i++) {
    if(object1Keys[i] !== object2Keys[i]){
        return false
    }
}
for(let i = 0; i < object1Values.length; i++) {
    if(object1Values[i] !== object2Values[i]){
        return false
    }
}
    return true
  };
