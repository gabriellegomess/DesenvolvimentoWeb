let minha_var = [];

minha_var.push("Olá");
minha_var.push(42);
minha_var.push(70);

minha_var[3] = true;


for(let i = 0; i < minha_var.length; i++){

    console.log(minha_var[i]);

}

console.log("Somando [1] com [2]");
console.log(minha_var[1] + minha_var[2]); //[0] - ola //[1] - 42 //[2] - 70