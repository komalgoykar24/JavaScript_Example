// let stud = [
//     [1, 'Komal Goykar', 99],
//     [2, 'Radhika Jagtap', 100],
//     [3, 'Monika Patil', 89]
// ];

// for (let i = 0; i < stud.length; i++) {
//     for (let j = 0; j < stud[i].length; j++) {
//         console.log(stud[i][j]); // Access each element within the student array
//     }
// }

// let sub=["English","Marathi","Java","Maths","Hindi"];
// for(subject of sub)
// {
//     console.log(subject);
// }
let stud = [
    [1, 'Komal Goykar', 99],
    [2, 'Radhika Jagtap', 100],
    [3, 'Monika Patil', 89]
   ];

   for(student of stud)
   {
    for(list of student)
    {
        console.log(list);
    }
   }

   console.log("You are genious");