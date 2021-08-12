    let firstIndex=0;
    let lastIndex=0;
    const findExist = (arrNum,findNum) =>{
    let mid= math.floor((firstIndex + lastIndex)/2);
    if (arrNum[mid] === findNum){
        return mid; 
    }else if(arrNum[mid]>findNum) {
        firstIndex= mid;
    }
    findExist(arrNum , findNum);
}
const bisectionAlgo=(arrNum, findNum)=>{
    let firstIndex= 0;
    let lastIndex = arrNum.length-1;
    findExist(arrNum,findNum);
}
console.log(bisectionAlgo([2, 4, 7, 8, 11, 45, 77, 120, 134, 145],120));