module.exports = function main(str) {
  //  console.log("Debug Info");
  //  return 'Hello World!';
  let oneRow = ["._." , "..." , "._." , "._." ,"..." , "._." ,"._." ,"._." , "._." ,"._."];
  let secondRow = ["|.|" , "..|" , "._|" ,"._|" ,"|_|" ,"|_." , "|_." ,"..|" ,"|_|" ,"|_|"];
  let thirdRow = ["|_|" , "..|" ,"|_." , "._|" ,"..|" ,"._|" ,"|_|" , "..|" ,"|_|" ,"..|"];
  let arr = str.split("");
  let sum ="";
  let sum1 ="";
  let sum2 ="";
  let num = 0;
while(++num <= 3){
    if(num == 1){
        for(let i = 0 ; i < arr.length ; ++i){
            let  index =  arr[i];
            sum = sum + oneRow[index] + " "; 
        }
    }else if(num == 2){
        for(let i = 0 ; i < arr.length ; ++i){
            let  index =  arr[i];
            sum1 =sum1 + secondRow[index] + " ";  
        }
    }else if(num == 3){
        for(let i = 0 ; i < arr.length ; ++i){
            let  index =  arr[i];
            sum2 = sum2 + thirdRow[index] + " ";
        }
    } 
}
    return sum +"\n" + sum1 + "\n" + sum2 + "\n";
};