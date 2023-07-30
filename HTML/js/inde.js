//Create a program to get FizzBuzz when the position is 

var list = new Array ()

for (var i = 0; i <= 10; i++){
    if (i%3 == 0 && i%5==0){
        list.push("FizzBuzz")
    } else if (i%3==0){
        list.push("Fizz")
    } else if (i%5==0){
        list.push("Buzz")
    }else{
        list.push(i)
    }
}ÿ
document.write(list)
