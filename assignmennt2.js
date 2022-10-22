// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene
// function tri(s1,s2,s3)
// {
//     if((s1==s2) && (s2==s3))
//     {
//         console.log("equilateral triangle")
//     }
//     else if((s1==s2) || (s2==s3)||(s3==s1)){
//         console.log("isocelus triangle")
//     }
//     else{
//         console.log("scaler triangle")
//     }
// }

// tri(8,9,7)


// 2.Write a function using switch case to find the grade of a student based
// on marks obtained
// function grade(gra)
// { 
// switch(true){
//     case (gra>90 && gra<100):
//         console.log("Grade S")
//         break
    
//     case (gra>80 && gra<=90):
//         console.log("Grade A")
//         break
        
//     case (gra>70 && gra<=80):
//         console.log("Grade B") 
//         break

//     case (gra>60 && gra<=70):
//         console.log("Grade C")
//         break

//     case (gra>50 && gra<=60):
//         console.log("Grade D")
//         break
        
//     case (gra>40 && gra<=50):
//         console.log("Grade E")
//         break
//     case (gra>0 && gra<=40):
//         console.log("Student has failed")
//         break
//     case (gra<0 && gra>100):
//         console.log("Invalid marks")
//         break
// }
// }
// grade(50)

// 3.Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000
// function sum(num)
// {
//     var su = 0
//     for (i=0;i<num;i++)
//     {
//         if(i%3===0 || i%5===0)
//         {
//             su+=i
//         }
//     }
//     return su
// }

// console.log(sum(1000))



// 4.Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters.
// function primefact(a,b)
// {
//     for(i=a;i<b;i++)
//     {
//         var flag = 0
//         for(j = 1;j<i;j++)
//         {
//             if(i%j==0)
//             {
//                 flag+=1
//             }
//         }
//         fact = 1
//         if (flag<2){
//             for (k = i;k>0;k--)
//             {
//                 fact*=k
//             }
//             console.log(i,fact)
//         }
//     }
// }

// primefact(1,100)