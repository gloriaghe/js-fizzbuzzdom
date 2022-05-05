const numFB = document.querySelector("div.quadretti");


// Stampare n da 1 a 100
for (let i = 1; i <= 100; i++) {
    // stampare FizzBuzz multipli 3 e 5
    if (i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz");   
        const element = `<span class="box fizzbuzz">FizzBuzz</span>`; 
        numFB.innerHTML += element;
    } // stampare Fizz multipli 3 
    else if (i % 3 === 0){
        console.log("Fizz");
        const element = `<span class="box fizz">Fizz</span>`; 
        numFB.innerHTML += element;
    } // stampare Buzz multipli 5
    else if (i % 5 === 0){
        console.log("Buzz");
        const element = `<span class="box buzz">Buzz</span>`; 
        numFB.innerHTML += element;
    } else if  (i % 5 != 0 && i % 3 != 0) {
        console.log(i);
        const element = `<span class="box">${i}</span>`; 
         numFB.innerHTML += element; }
    }



