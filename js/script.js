// Output nella console:
// 1
// 2
// Fizz 
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz 

// ..
// 13
// 14
// FizzBuzz 
// ..
// ..

// stampa dei numeri nella console
for (let i = 1; i<= 100; ++i) {
    console.log(i);
    // definire se fizz o buzz
    let fizzBuzz;
    if (i % 3 === 0) {
        fizzBuzz = "Fizz";
        console.log(fizzBuzz);
    } else if (i % 5 === 0) {
        fizzBuzz = "Buzz";
        console.log(fizzBuzz);
    }
}