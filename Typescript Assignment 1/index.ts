// // *Q1
// let messages = "hello world";
// console.log(messages);


// ******************* */


// // *Q2
// let personname:string = "Nayla ";
// console.log(`Hello ${personname}, would you like to learn some Typescript today?`);

// ******************* */


// // *Q3
// let name_1 = "nayla";
// console.log(`lowercase: ${name_1.toLowerCase()}`);
// console.log(`uppercase: ${name_1.toUpperCase()}`);
// // // Title case conversion
// console.log(`titlecase: ${name_1.charAt(0).toUpperCase()}${name_1.slice(1).toLowerCase()}`);


// ******************* */


// //*Q4
// let myauthor:string = "Muhammad Iqbal";
// let quotes: string = " \"Vision without power does bring moral elevation but cannot give a lasting culture.\"!";
// console.log(`${myauthor} once said,${quotes}`);


//******************* */

// //*Q5
// let famous_person: string =  "Muhammad Iqbal";
// let quote1:string = " \"Vision without power does bring moral elevation but cannot give a lasting culture.\"!";
// let message:string =  `${famous_person} Once said,${quote1}`
// console.log(message);


//******************* */


//*Q6
// let whitespace_1 = " \t\n Nayla Yousuf \t\n  ";
// console.log(`white space:${whitespace_1}`);
// let stripped_Name = whitespace_1.trim();
// console.log(`stripping name: ${whitespace_1.trim()}`);


//******************* */
//*Q7
// let subtraction = (12 - 4);
// console.log(`Subtraction : 5 + 3 = ${subtraction}`);
// let Addition = (5 +3);
// console.log(`Addition : 5 + 3 = ${Addition}`);
// let multiply = (2 * 4);
// console.log(`multiply : 5 + 3 =  ${multiply}`);
// let division = (16/ 2);
// console.log(`Division : 5 + 3 =  ${division}`);



//******************* */


//*Q8
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);


//******************* */


//*Q9
// let favouriteNumber:number = 5;
// let message_2 = `My favourite number  ${favouriteNumber }`
// console.log(message_2);


//******************* */


//*Q10
// //first program 
// //Date: 17-feb-2024.
// //In this code i am revel my favourite number:
// let favouriteNumber_2: number = 10; // my favourite number  is 5
// console.log(`My favourite name  ${favouriteNumber_2}` ); // revel my favourite number with the message in it
// //second program 
// //Date: 17-feb-2024.
// // in this code i am showing how to get the number 8 by adding, multiplying, subtracting and dividing:
// console.log(5 + 3); // Result 8 
// console.log(10 - 2); // Result 8
// console.log(4 * 2); // Result 8
// console.log(16 / 2); // Result 8*/



//******************* */



//*Q11
// let friends_name:string[] = ["Arsalan" , "Bilal" ,"Sheeza" , "Jibran"];
// for (let i=0; i<friends_name.length; i++){
//     console.log(friends_name[i]);
// }


//******************* */


//*Q12
// let friends_name:string[] = ["Arsalan" , "Bilal" ,"Sheeza" , "Jibran"];
// let wish: string = " Have a Nice Day, ";
// for(let i=0; i<friends_name.length; i++){
//     console.log(`wish ${ friends_name[i]}${wish}`);
// }


//******************* */


//*Q13
// let favoritetranspotation_1:string[] = ["train." ,"heavy bike." ,"sports car." ,"motorcycle."];
// for(let transports of favoritetranspotation_1){
//     console.log(`I would like to own a  ${transports}`);
// }


//or another way to do that is 
//  let favoritetranspotation_1:string[] = ["train." ,"heavy bike." ,"sports car." ,"motorcycle."];
//  for(let i = 0; i< favoritetranspotation_1.length;i++){
//     console.log(`I would like to own a  ${favoritetranspotation_1[i]}`);
// }


//******************* */


//*Q14
// let guestlist: string[]  = ["Ayesha " , "Beena", "Imran"];
// for(let i=0; i<guestlist.length; i++){
//     console.log(`Dear  ${guestlist[i]}, \n you are invited to dinner at my home \n Best regards,\n Nayla.\n` )
// }


//******************* */



//*Q15
// let guestlist: string [] = ["Ayesha " , "Beena", "Imran"];

// let guestwhocantmake: string = guestlist[1];
// console.log(`\n unfortunately, ${guestwhocantmake} is not coming at the dinner . \n`);
// guestlist[1] = "Abisha";
// for(let i=0; i<guestlist.length; i++){
//     console.log(`Dear ${guestlist[i]} \n you are invited to dinner at my home.\n Best regards,\n Nayla yousuf.\n`)
// }


//******************* */



//*Q16
// let guestlist = ["Ayesha " , "Beena", "Imran"];
// console.log(`Good new! I found a bigger dinner table.`);
// //add one person name at the begining of the array
// guestlist.unshift ("Saima");

// //add one person name at the middle of array 
// guestlist.splice(2,0 ,"Hiba");

// //add person name at the end of array
// guestlist.push("Irshad");

// for(let i=0; i<guestlist.length; i++){
//     console.log( `Dear, \n ${guestlist[i]} I would like to invite you to dinner.`)
// }



//******************* */



//*Q17
// let guestlistshrink: String[] = ["Saima","Ayesha " , "Beena", "Hiba", "Imran", "Irshad"];

// console.log("Dear we are sorry their is no dining table left so i can only invite 2 people " );
// // removing person from guestlist 1 by 1

// while ( guestlistshrink.length > 2 ){
//     let removeguest = guestlistshrink.pop();
//     console.log(`sorry ${removeguest} can't invite you to dinner`)
// }


// for(let i=0;i<guestlistshrink.length; i++){
//     console.log(`Dear,\n ${guestlistshrink[i]} you're still invited for dinner!`);
// }
// //removing the remaining 2 person from the list
// guestlistshrink.pop();
// guestlistshrink.pop();
// console.log(guestlistshrink);

//ANOTHER METHOD 
// removing person from guestlist 1 by 1
//  let a = guestlist.pop();
// console.log(`\n ${a} sorry we cant invite you to dinner`);
// let b = guestlist.pop();
// console.log(`\n${b} sorry we cant invite you to dinner`);
// let c = guestlist.pop();
// console.log(`\n${c} sorry we cant invite you to dinner`);
// let d = guestlist.pop();
// console.log(`\n${d} sorry we cant invite you to dinner`);


//******************* */




//*Q18
// let favourite_places = ["Tokiyo", "Grece", "China", "Argentina", "Maldives"];
// //now print the array in original order
// console.log(" In original order: " +  favourite_places);
// // Now print the array in alphabetical order
// console.log(" In Alphabetic order: " + [...favourite_places].sort());
// //  Now print the array to get orignal array
// console.log(" In original order: " +  favourite_places);
// //  Now print the array in reverse alphabetical orders
// console.log("In reverse Alphabetic order: " + [...favourite_places].sort().reverse());
// //  now print the array in original order list 
// console.log(" In original order: " +  favourite_places);
// // now print the array  in reverse order list
// favourite_places.reverse();
// console.log("Reversed order: " + favourite_places);
// //now reverse, the reverse order list again in original order list
// favourite_places.reverse();
// console.log("original order: " + favourite_places);
// //sort array in alphabatic order
// favourite_places.sort();
// console.log("sort in alphabatic order: " + favourite_places);
// //sort array  in reverse alphabatic order
// favourite_places.sort();
// favourite_places.reverse();
// console.log("sort in reverse alphabatic order: " + favourite_places);



//******************* */
//*Q19
// let guestlist = ["Ayesha " , "Beena", "Imran"];
// let numberofguest = guestlist.length;
// //print a message to indicate the number of guest inviting to dinner
// console.log("you are inviting " + numberofguest + " guest to dinner");


//******************* */


//*Q20
// let languages = [" Urdu" , "English " , "Arabic " ,"Pershian"];
// console.log(languages);
// console.log("list of languages:");
// for(let i=0; i<languages.length; i++){
//     console.log(  ( i +  1 ) + "."  +  languages[i]);
// }



//******************* */


//*Q21
// //subject marks of two person
// let ayeshasubjectmarks = {english:76, math:88, urdu:95};
// let anabiasubjectmarks = {english:89, math:93, urdu:87};
// // print the each subject marks
// console.log("Ayesha subject marks:");
// console.log("english: " + ayeshasubjectmarks.english );
// console.log("math: " + ayeshasubjectmarks.math );
// console.log("urdu: " + ayeshasubjectmarks.urdu );
// console.log("Anabia subject marks:");
// console.log("english: " + anabiasubjectmarks.english );
// console.log("math: " + anabiasubjectmarks.math );
// console.log("urdu: " + anabiasubjectmarks.urdu );



//******************* */



//*Q22
// // array of colours
// let colours = ["Red " ,"Blue " ,"Green " , "Black"];
// //print array of wrong index
// console.log("finding wrong index in the array:");
// console.log(colours[4]);
// //print array of correct index
// console.log("finding correct index in the array:");
// console.log(colours[2]);


//******************* */



//*Q23
// let fruit = "Mango";
// //Test 1: Is fruit == "mango" ? predicting True.
// console.log("Is fruit ==  'Mango' ? predicting True.")
// console.log(fruit == "Mango");
// //Test 2: Is fruit != "potato" ? predicting True
// console.log("Is fruit !=  'potato' ? predicting True.")
// console.log(fruit != "potato");
// //Test 3: Is fruit.lenght == 5 ? predicting True
// console.log("Is fruit lenght is equal to 5 ? predicting True.")
// console.log(fruit.length == 5);
// //Test 4: Is fruit.lenght != 7 ? predicting True
// console.log("Is fruit lenght is not equal to 7 ? predicting true.")
// console.log(fruit.length !=  7);
// //Test 5: is fruit is === Mango ? predicting true
// console.log("Is fruit is fruit === Mango then the resut show True");
// console.log(fruit === 'Mango');
// //Test 6:  showing  that the fruit == Mango in lowercase then show false
// console.log("If fruits in lowercase  == Mango then predict False")
// console.log(fruit.toLowerCase() =="Mango")
// //Test 7:  showing  that the fruit == Mangois in uppercase then show false
// console.log("If fruits in uppercase  == Mango then predict False")
// console.log(fruit.toUpperCase() =="Mango")
// //Test 8:  showing  that the fruit == Apple the  result will be false 
// console.log("Is fruit ==  Apple then predict false.")
// console.log(fruit == "Apple");
// // Test 9:  showing that the fruit == Mango no extra space init.
// console.log("Is fruit == Mango then predict false.")
// console.log(fruit == "  Mango");
// // Test 10:  showing that the fruit == Mango length is false
// console.log("Is fruit == Mango  lenth is less  than five then predict false.")
// console.log(fruit.length < 5);


//******************* */



//*Q24
// //  Tests for equality and inequality with strings
// let str1 = " sports cars";
// let str2 = " sports bike";
// //equality  test
// console.log(str1 === "sports cars");
// //inequality  test
// console.log(str1 !== "sports cars" );
// // Tests using the lower case function
// let  casechecking  = "karachi";
// console.log(casechecking.toUpperCase() === "KARACHI");
// // Numerical tests 
// let number1 = 14;
// let number2 = 20;
// //Equality
// console.log("Equality test between 14 and 20");
// console.log(number1 === number2); //false
// //Inequality
// console.log("Inequality test between 14 and 20");
// console.log(number1 !== number2); //true
// //Greater than test 
// console.log("greater than between 14 and 20");
// console.log(number1  > number2 );
// //Less than test
// console.log("less than between 14 and 20");
// console.log(number1 <  number2 );
// //Greater than or equal to test
// console.log("greater than or equal to ");
// console.log(number1 >= number2 );
// // Less than or equal
// console.log("less than or equal to");
// console.log(number1 <= number2 );
// // Tests using "and" and "or" operators
// let  number_one = 22;
// let  number_two =  35;
// console.log("AND operator finding", number_one > number_two &&  number_one < number_two  );
// console.log("OR  operator finding", number_one < number_two  ||  number_one == number_two );
// // Test whether an item is in an array
// let vegetable =["potato", "onion","tomato","garlic"];
// let tocheck = "tomato";
// console.log("item in an array", vegetable.includes(tocheck));
// // Test whether an item is not in an array
// let capital =["islamabad", "istanbol","new york"];
// let capitalcheck = "beijing";
// console.log("item in an array", capital.includes(capitalcheck));



//******************* */




// *Q25
// // program that passes the if test
// let  colorof_alien = "yellow";
// if (colorof_alien === "yellow"){
//     console.log("congraculation you have earned 5 points");
// }
// // program that fails the if test
// let  aliencolour = "green";
// if (aliencolour === "red"){
//     console.log("congratulation you have earned 5 points");
// }



//******************* */



// *Q26
// // print to run 'if' condition
//  let newalien = "green";
// if(newalien === "green"){
//      console.log("the player just earned 5 points for shooting the green alien.");
// }
//  else{ console.log ("the player just earned 10 points for shooting the non-green alien.")};
// //print to 'else' condition
// let another_alien = "red";
// if(another_alien === "yellow"){
//     console.log("the player just earned 5 points for shooting the green alien.");
// }
// else{ console.log("the player just earned 10 points for shooting the non-green alien.")};



//******************* */




//*Q27
// //  run else if condition
// let alien = "red";
// if(alien === "green"){
//     console.log (" the player earned 5 points");
// }
// else if(alien === "yellow"){
//     console.log (" the player earned 10 points");
// }
// else if(alien === "red"){
//     console.log (" the player earned 15 points");}
//     else{console.log("zero  points");}


//******************* */



//*Q28
// let age = 35;
// //If-else condition to find the stage of life
// if(age < 2){
//     console.log("the person is a baby");
//     }
//  else if(age >=2 && age <4){
//     console.log("the person is a toddler")
//  } 
//  else if(age >=4 && age <13){
//     console.log("the person is a kid");
//  }
//  else if(age >=13 && age <20){
//     console.log("the person is a teenager");
//  }
//  else if(age >=20 && age <65 ){
//     console.log("the person is an adult")
// }
// else{console.log("the person is an elder");}



//******************* */



//*Q29
// // five independent if statements that find for certain fruits in the array.
// let favorite_fruits = ["Apple" , "Mango" , "Orange"]
// //find if Apple is in the array
// if(favorite_fruits.includes("Apple")){
//     console.log("You really like Apples.");
// }
// // find if Mango is in the array
// if(favorite_fruits.includes("Mango")){
//     console.log("You really like Mango.")
// }
// // find if Orange is in the array
// if(favorite_fruits.includes("Orange")){
//     console.log("You really like Orange.")
// }
// // find if Strawberry is in the array
// if(favorite_fruits.includes("Strawberry")){
//     console.log("You really like Strawberry.");
// }
// else{console.log("you don't like Strawberry");}
// // find if  watermelon is in the array
// if(favorite_fruits.includes("Watermelon")){
//     console.log("You really like Watermelon.");
// }
// else{console.log("you don't like Watermelon");}



//******************* */



//*Q30
// let usernames = [ "admin", "amir" ,  "hawa" , "bushra", "laiba"];
// for(let i=0; i<usernames.length; i++){
//     if (usernames[i] === "admin"){
//         console.log("Hello admin, would you like to see a status report?");
//     }else{
//         console.log("Hello " + usernames[i] + "," + " thank you for logging in again.");
//     }
// }



//******************* */


//*Q31
// let user = ["adam", "jack" , "nick"];
// // find the array is empty?
// if(user.length === 0){
//     console.log("We need to find some users!");
// }
// else{
//     console.log("here are the username");
//         for (let i=0; i <user.length; i++){
//             console.log(user[i]);
//         }
// }
// // removing user name from the array
//  user.length = 0;
// // Check if the list of users is empty after removal
// if (user.length === 0){
//     console.log("We need to find some users!");
// }
// else{
//     console.log("here are the username");
//     for (let i=0; i<user.length; i++){
//         console.log(user[i]);
//     }
// }



//******************* */



//*Q32
// // current username
// let current_users = ["Abid" ,"Sanam" , "Akash","Anamika" ,"Gohar"];
// // new username 
// let  new_users = ["Soniya", "Ismail" ,"Abid","Zanaib","Aryan"];
// // loop through new_users to find the unique username
// let currentuserlower = [];
// for(let i=0;i< current_users.length;i++){
//     currentuserlower.push(current_users[i].toLowerCase());
//         }
//     //find each username is avaliable
//     for(let i =0; i < new_users.length; i++){
//         let username = new_users[i];
//         if(currentuserlower.includes(username.toLowerCase())){
//             console.log("username " +  username  + " is unavailable. Please choose a different username")
//         }
//         else{
//             console.log("Username " + username  + " is available.");
//         }
//     } 


//******************* */



//*Q33
// // Array containing numbers from 1 to 9
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Loop through the array
// for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     let ordinal;
//     // Determine the ordinal ending based on the number
//     if (num === 1) {
//         ordinal = "st";
//     } else if (num === 2) {
//         ordinal = "nd";
//     } else if (num === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }
//     // show the result
//     console.log(num + ordinal);
// }



//******************* */



//*Q34
// // Array containing three favorite pizza name
// let favorite_Pizzas = ["Malai", "Italian", "Supreme"];
// // show a sentence for each pizza using a for loop
// for (let i = 0; i < favorite_Pizzas.length; i++) {
//     console.log("I like " + favorite_Pizzas[i]  + " pizza");
// }
// // Additional sentence about loving pizza
// console.log("I really love pizza!");


//******************* */


//*Q35
// //array making an animal list
// let  animals_1 =  ["Rabbit", "Cat", "Dog"];
// //make a loop for making the animal name in list 
// for (let i = 0; i< animals_1.length; i++){
//     console.log(animals_1[i]);
// }
// // modifying the name of the animals  in using  loop 
// for (let i = 0; i< animals_1.length; i++){
//     console.log("A "+ animals_1[i].toLowerCase() + " would make a great pet ");
// }
// // console a  statement about the animal
// console.log("Any of these animals would make a great pet!");



//******************* */



// *Q36
// function make_shirt(size: string, message: string) {
//     console.log("you have order " + size + "- sized shirt with the message of " + message + ".");
// }
// // evoke the function
// make_shirt("Medium", "Have a Nice Day");






//******************* */


//*Q37
// function make_shirt(size: string ,message: string){
//     console.log("you have order " + size + "- sized shirt with the message of " + message + ".");
// }
// // print for large shirt
// make_shirt("Large" ,"I love typescript" );
// // print for medium shirt
// make_shirt("Medium" ,"I love typescript" );
// // print for small shirt
// make_shirt("Small" ,"I love javascript" );

//******************* */


//*Q38
// function describe_city(city: string ,country: string){
//     console.log(city + "is in "  + country);
// }
// //evoke the function
// describe_city("Karachi " , "Pakistan.");
// describe_city("chicago " , "USA.");
// describe_city("seoul " , "korea.");


//******************* */


//*Q39
// function city_country(city: string, country: string){
//     return ( "\"" + city +","+ country + "\"");
// }
// //evoke function
// let cityone = city_country("Lahore " , "Pakistan");
// let citytwo = city_country("London " , "Unites Kingdom");
// let citythree = city_country("seoul ", "korea");
// //show return value
// console.log(cityone);
// console.log(citytwo);
// console.log(citythree);



//******************* */




//*Q40
// interface Album {
//     artist: string;
//     title:  string;
//     tracks?: number;
// }
// function make_album(artist: string, title: string, tracks?: number):Album {
//     let newalbum : Album = {
//         artist,
//         title,
//     };
//     if(tracks !== undefined){
//         newalbum.tracks = tracks;
//     }
//     return newalbum;
// }
// let album1 = make_album("charlie puth" ,"Attention");
// let album2 = make_album(" Shawn mendes" ,"Stitches",10);
// let album3 = make_album("Salena gomez" ,"calm down", 12);
// //evoke function
// console.log(album1);
// console.log(album2);
// console.log(album3);



//******************* */


//*Q41
// function show_magicians(magicians: string[]){
//     for (let i = 0; i < magicians.length; i++) {
//         console.log(magicians[i]);
//     }
// }
// let magicians = ["Time59" , "National Geographic" ,  "Smithsonian"];
// // evoke the function
// show_magicians(magicians);


//******************* */



//*Q42
// function show_magicians(magicians: string[]){
//     console.log(magicians);
//     }
// function make_great(magicians : string[]){
//     for (let i = 0; i < magicians.length; i++){
//         magicians[i] =  " The Great " + magicians[i];
//     }
// }
// let magicians  = [" Time59" , "National Geographic" ,  "Smithsonian"];
// // modify array of magicians
// make_great(magicians);
// // evoke the function to see the modified list
// show_magicians(magicians);



//******************* */



//*Q43
// //array of magician names
// let magicians =  [" Time59" , "National Geographic" ,  "Smithsonian"];
// // show show_magicians function
// function show_magicians(magicians: string[]){
//     console.log(magicians);
//     }
//     // show make_great function
// function make_great(magicians: string[]){
//     let changemagicians = [];
//     for (let i = 0; i < magicians.length; i++){
//         changemagicians[i] =  " The Great " + magicians[i];
//     }
//     return changemagicians;
// }
// // show make_great function with a copy of the original array
// let bestmagicians = make_great(magicians)
// //evoke show_magicians function to show the original array
// console.log("Original Magicians:");
// show_magicians(magicians);
// //evoke show_magicians function to show modify array 
// console.log("Great Magicians:");
// show_magicians(bestmagicians);




//******************* */




//*Q44
// function orderSandwich(...items: string[]) {
//     console.log("Sandwich Order:");
//     if (items.length === 0) {
//         console.log("No items selected.");
//     } else {
//         console.log("Items:");
//         for (let i = 0; i < items.length; i++) {
//             console.log("- " + items[i]);
//         }
//     }
//     console.log("Enjoy your sandwich!\n");
// }
// // avoke  the function three times with different numbers of arguments
// orderSandwich("sausage", "Cheese", "Lettuce");
// orderSandwich("Beef", " jalepino");
// orderSandwich("hot dog" , "Lettuce");



//******************* */



//*Q45

// function createCar(manufacturer: string, modelName: string, ...otherProperties: string[]) {
//     let car : { [key: string]: string }  = {
//         manufacturer,
//         modelName,
//     };
//     // Add other properties to the car object using a loop
//     for (let i = 0; i < otherProperties.length; i += 2) {
//         let propertyName  = otherProperties[i];
//         let propertyValue = otherProperties[i + 1];
//         car[propertyName] = propertyValue;
//     }
//     return car;
// }
// // Example usage:
// let myCar = createCar("bugatti", "Veyron ", "color", "red", "optionalFeature", "sunroof");
// console.log(myCar);



//******************************************************************************************************************** */
//******************* */