
    const retArray = [];
function asdf(){

for (let i = 0; i <= 100; i++) {
      if(i <10){
    retArray.push('img_00'+i+'.jpg');
      } else if(i <100){
        retArray.push('img_0'+i+'.jpg');
          }else{
        retArray.push('img_'+i+'.jpg');

          }
}
}
asdf()
console.log(retArray);