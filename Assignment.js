// Q-1
// let array=[1,2,3,4,5,6,2,3];
// let num=prompt("Enter Number to delete all occurrences...");
// for(element of array )
// {
//     if(element==num)
//     {
//         array.pop(element);
//     }
//     else
//     {
//         console.log(element);
//     }
// }


// //Q-2
// let num=prompt("Enetr any Number");
// let count=0;
// for(let i=1;i<=num.length;i++)
// {
//  count++;
// }
// console.log("Total Digits in number :"+count);

//Q-3
// let num=prompt("Enter Any Number:");
// let sum=0;
// while(num>0)
// {
//     let r=num %10;
//     sum=sum+r;
//     num=num/10;
// }
// console.log("Sum of digits in Number  :"+sum);

//Q-4
// let num=prompt("Enter number to find factorail :");
// let fact=1;
// while(num>0)
// {
// fact=fact*num;
// num--;
// }
// console.log("Factorial of given number:"+fact);

//Q-5
let num=[24,56,1,78,95,12,87,5];
for(let i=0;i<num.length;i++)
{
    for(let j=i+1;j<num.length;j++)
    {
        if(num[i]>num[j])
        {
            let temp=num[i];
            num[i]=num[j];
            num[j]=temp;
        }
    }

}

// for(let i=0;i<num.length;num++)
// {
//     console.log(num[i]);
// }

for(numbers of num)
{
    console.log(numbers);
}

for(let i=0;i<num.length;num++)
   {
         console.log("Largest Elemnt in Array: "+num[num.length-1]);
   }