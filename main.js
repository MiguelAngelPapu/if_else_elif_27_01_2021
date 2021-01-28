let num1 = 49;
let num2 = 49;

if(num1==num2){ //
    console.log(`El numero1 ${num1} es igual a ${num2}`);
}else if(num1<num2){  //
    console.log(`El numero1 ${num1} es menor que ${num2} :p`);
}else if(num1>num2){  //
    console.log(`El numero1 ${num1} es mayor que ${num2} :V`);
}else{
    console.log(`opcion no valida`);
}
   
if(num1<num2 && num2>num1){
    console.log(`El numero1 ${num1} es menor que ${num2} y el numero1 ${num1} es mayor a numero2 ${num1} :V`);
}else if(num1<=num2 || !(num1<=num2)){
    console.log(`El numero1 ${num1} puede que sea igual a ${num2} o el numero1 ${num1} es menor o igual a numero2 ${num2} pero su resultado sea lo contrario :p`);
}else{
    console.log(`opcion no valida`);
}