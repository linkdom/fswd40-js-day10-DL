var randomNumber = Math.floor(Math.random() * 25) - 5;

if (randomNumber < 10) {
  document.getElementById('cold').innerHTML="The weather is cold" + " " + randomNumber;
} else {
  document.getElementById('moderate').innerHTML="The weather is moderate" + " " + randomNumber;
}

var arr = [1,7,-3,9]
var max = Math.max(1,7,-3,9)
document.getElementById('number1').innerHTML=max;

var product = [1,3,7,10,2]

var sumproduct = 1
for (var i=0; i < product.length; i++) {
  sumproduct= sumproduct * product[i];
  document.getElementById('product').innerHTML=sumproduct;
}

var students =[
  {name: "Martin",
  points: 76
  },{
  name: "Thomas",
  points: 85
  },{
  name: "Klaus",
  points: 65
  },{
  name: "Maria",
  points: 93
  },{
  name: "David",
  points: 81
  }
];

for (var i = 0; i < students.length; i++)
 { if (students[i].points <= 100 && students[i].points >= 90) {
     document.write(students[i].name + " A " + students[i].points + " <br>")}
     if (students[i].points <= 89 && students[i].points >= 81) {
       document.write(students[i].name + " B " + students[i].points + " <br>")}
       if (students[i].points <= 80 && students[i].points >= 71) {
         document.write(students[i].name + " C " + students[i].points + " <br>")}
         if (students[i].points <= 70 && students[i].points >= 61) {
           document.write(students[i].name + " D " + students[i].points + " <br>")}
           if (students[i].points <= 60) {
             document.write(students[i].name + " F " + students[i].points + " <br>")
   }
  }

/*
document.write(grades());

if (grades() <= 100 && grades() >= 90) {
  document.write("A")}
  if (grades() <= 89 && grades() >= 81) {
    document.write("B")}
    if (grades() <= 80 && grades() >= 71) {
      document.write("C")}
      if (grades() <= 70 && grades() >= 61) {
        document.write("D")}
        if (grades() <= 60) {
          document.write("F")
}
*/
/*
  if (students[i].points <=100 && students[i].points >= 90) {
    document.getElementById('text').innerHTML="This students has an A";
  } else {
   document.getElementById('text').innerHTML=students[0].points;
}
*/
