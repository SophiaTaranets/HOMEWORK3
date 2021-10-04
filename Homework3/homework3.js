// ****************** Task 1 ******************
console.log("Task 1");
let arrNewTask = [2,3,4,5];
dFor = 1;
dWhile = 1;

// for()
console.log("Loop for()");
for(let i = 0; i<arrNewTask.length;i++){
    dFor*=arrNewTask[i];
}console.log(dFor);
console.log("\n")

//while()

console.log("Loop while()");
i = 0;
while(i < arrNewTask.length) {
    dWhile*=arrNewTask[i];
    i++;
}
console.log(dWhile);
console.log("\n")
// ****************** Task 2 ******************
console.log("Task 2");
for (let i = 0;i<16;i++){
    if (i%2==0){
        console.log(i," is even");
    }
    else{
        console.log(i," is odd");
    }
}
console.log("\n")
// ****************** Task 3 ******************

function getRandomNumber(min,max){
    return Math.random() * (max - min) + min;
}
function randArray(numberRandNum) {
    tempArr = [];
    for (let i = 0; i<numberRandNum; i++){
        tempArr[i] = parseInt(getRandomNumber(1,500));
    }
    return tempArr;
}
let enterNum = prompt("Task 3. Enter number of random numbers");
console.log("Task 3");
if(isNaN(enterNum)==true){ //перевіряємо введені дані на коректність
    alert("You`ve entered not a number. Try again!");
}
else {
    console.log("Random integer element: ",randArray(enterNum));
}
console.log("\n")

// ****************** Task 4 ******************

function raiseToDegree(a,b){
    return parseInt(a)**parseInt(b);
}
a = prompt("Enter a")
b = prompt("Enter b");
console.log("Task 4");
if (isNaN(a)===true || isNaN(b)===true){
    console.log("You`ve entered not number");
}
else {
    console.log("Resault: ",raiseToDegree(a,b))
}
console.log("\n");

// ****************** Task 5 ******************

console.log("Task 5. Array = [2,-10,7,-7]")
function findMin(){
    let min = arguments[0];
    for (let index = 0; index < arguments.length; index++) {
        
        if (arguments[index]<=min){
            min = arguments[index];
        }
    }
   return min; 
}
console.log("Found min element of array: ",findMin(2, -10, 7, -7));
console.log("\n");

// ****************** Task 6 ******************

console.log("Task 6. Array = [12,3,1,9,22]");
function findUnique(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return false;
            }
        }
    }
    return true;
}
let checkArr = [12,3,1,9,22];
console.log("Chek unique elements of array: ",findUnique(checkArr));
console.log("\n")

// ****************** Task 7 ******************

console.log("Task 7. Array = [2,-5,5,9]")
function getLastElement(arr,n){
    if(n===null){
        return arr.slice(-1);
    }
    else{
        return arr.slice(-n);
    }
}
let arr = [2,-5,5,9]
console.log("Got 2 last elements of array: ",getLastElement(arr,2));
console.log("\n");

// ****************** Task 8 ******************

console.log("Task 8. String = i love java script");
function getNewString(str){
    let wordArr = str.split(' ');
    let iterWord = [];
    for (let i = 0; i<wordArr.length; i++){
        iterWord.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1));
    }
    let result = iterWord.join(" ");
    console.log(result);
    
}
str = "i love java script";
getNewString(str);







