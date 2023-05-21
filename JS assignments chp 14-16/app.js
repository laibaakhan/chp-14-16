//---------CHAPTER#14-16--------
//--------QUESTION # 01---------
// let student_name = [];
//--------QUESTION # 02---------
// let studentname = {};
//--------QUESTION # 03---------
// let string_array=["laiba","banana","urdu"];
//--------QUESTION # 04---------
// let number_string=[2,5,6,5];
//--------QUESTION # 05---------
// let boolean_array=[true,false];
//--------QUESTION # 06---------
// let mixed_array=["apple", 2,true];
//--------QUESTION # 07---------
// let qualification=["SSC","HSC", "BCS","BS","BCDM","MS","M.PHill","PHD"];
// document.write("<h2>QUALIFICATION</h2>");
// document.write("<ul>");
// for(  i=0; i<qualification.length; i++){
//     document.write("<li>"+ qualification[i] + "<li>");
// }
//--------QUESTION # 08---------
// var students=["Michael","John","Tony"];
// var marks=[320,230,480];
// var total_marks=500;
// for(let i=0;i<students.length;i++){
//     console.log(`Score of ${students[i]} is ${marks[i]}.`,`Percentage:${marks[i]/total_marks*100}%`);
// };
 //-------- Question no:9----------
    // part(a)
//     let colors = ["Red", "Green", "Blue", "Yellow"];
// document.write("<h2>Color Names:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }
// document.write("</ul>");
  //part(b)
// let newColor = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(newColor);
// document.write("<h2>Updated Color Names:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }

// document.write("</ul>");
  // part(c)
// let newColor = prompt("Enter a color to add to the end  of the array:");
// colors.push(newColor);
// document.write("<h2>Updated Color Names:</h2>");

// for (let i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }
        // part(d)
// let color1 = prompt("Enter the first color:");
// let color2 = prompt("Enter the second color:");
// colors.unshift(color2, color1);
// document.write("<h2>Updated Array:</h2>");
// document.write(colors.join(", "));
    // part(e)
    //     let newColor = prompt("Enter a color to delete to the begining of the array:");
// colors.shift(newColor);
// document.write("<h2>Updated Color Names:</h2>");

// for (let i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");

// }
    // part(f)
//     let index = prompt("Enter the index where you want to add the color:");
// let color = prompt("Enter the color name:");
// index = +(index);
// colors.splice(index,0, color);
// document.write("<h2>Updated Array:</h2>");
// document.write(colors.join(", "));
//   part(g)
// let index = prompt("Enter the index from where you want to delete color(s):");
// let numToDelete = prompt("Enter the number of colors to delete:");
// index = +(index);
// numToDelete = +(numToDelete);
// let deletedColors = colors.slice(index, numToDelete);
// document.write("<h2>Updated Array:</h2>");
// document.write(colors.join(", "));
// // document.write(deletedColors);
//10.(Ascending order array)
// const student_scores=[320,230,480,120];
// console.log(`Scores of Students:${student_scores}\nOrdered Scores of Students:${student_scores.sort()}`);
    
// //11.(Array with city names)
// const cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// console.log(`Cities List:${cities}\nSelected Cites:${cities.slice(0,3)}`);

// //12.(Single String from an array)
// var arr=["This","is","my","cat"];
// console.log(`Array:${arr}\nString:${arr.join(" ")}`);

 // Question no:13
   // Create a new array
// let  myArray = [];
// myArray.push("keyborad");
// myArray.push("mouse");
// myArray.push("printer");
// myArray.push("monitor");
// for (let i = 0; i < myArray.length; i++) {
//   document.write( "out: <br> " +myArray[i] +"<br>");
// }
    //   Question no:14
//     let  myArray = [];
// myArray.push("keyborad");
// myArray.push("mouse");
// myArray.push("printer");
// myArray.push("monitor");
// while (myArray.length > 0) {
//   let value = myArray.pop();
//   document.write( " out: <br> " +value  +"<br> ");
// } 
 //  Question no:15
//     let mob_array=["Apple","Samsung", "Motorola", "Nokia ", "Sony" ," Haier"];
//     document.write("<select>");
// for (let i = 0; i < mob_array.length; i++) {
//   document.write("<option value= +  mob_array[i] + >" +  mob_array[i] + "</option>");
// }
// document.write("</select>");

 