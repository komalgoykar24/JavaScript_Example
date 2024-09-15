// function sayHello(name)
// {
//     console.log("Welcome "+name);
// }

// sayHello("Komal");


// function poem()
// {
//     console.log("Then I saw the grey wolf, with mutton in his maw; Then I saw the wombat waddle in the straw; Then I saw the elephant a-waving of his trunk; Then I saw the monkeys—mercy, how unpleasantly they smelt!");
// }

// poem();


// function diceRoll()
// {
//    let randomNo=Math.floor(Math.random()*6)+1;
//    console.log(randomNo);
// }
// diceRoll();


// function avgNumber(a,b,c)
// {
//     let avg=(a+b+c)/3;
//     console.log("Average of three number's :"+avg);
// }

// avgNumber(5,10,3);

// function createTable(num)
// {
//     console.log(`Table Of ${num} :`)
//     for(let i=1;i<=10;i++)
//     {
//        console.log(i*num); 
//     }
// }

// createTable(5);


// function sumN(n)
// {
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//          sum=sum+i;
         
//     }
//     console.log(`Sum OF ${n} is ${sum}`);
    
// }

// sumN(3);


// let fruites=["Apple","Mango","Banana"];
// let i;
// function concatString()
// {
// for(i=0;i<1;i++)
// {
//     console.log(fruites[i]+fruites[i+1]+fruites[i+2]);
// }

// }
// concatString();

// let fruites=["Apple","Mango","Banana"];
// function concat(fruites)
// {
//     let reult="";

//     for(let i=0;i<fruites.length;i++)
//     {
//         reult+=fruites[i];
//     }
//     return reult;
// }


// const greet=function(name)
// {
//     console.log("Welcome "+name);
// }
// greet("Komal");


// const sum=function(a,b)
// {
//     return a+b;
// }

// function avg()
// {
// console.log("Average is :"+sum(10,20)/2);
// }

// avg();



function multipleGreet(func,n)
{
    for(let i=0;i<=n;i++)
    {
        func();
    }
}
let greet=function()
{
    console.log("Hey Welcome to Dubai!!");
}

multipleGreet(greet,100);
