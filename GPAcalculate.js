/*
********************************************************
* Individual Assignment (JS)				   		   *
* 			                                           *
* Name: Muhammad Syafiq akbar                          *
* Matric Number: A20EC0323                             *
* Section: 09                                          *
********************************************************
*/





/*Assessment item - Task 1*/
/*Based on your understanding, provide a detailed description of how function addNewSubject() works


The function addNewSubject() will add a new table column. When user click the "Add Subject" button, the system
will display a new column. Append() is used to add an element to the end of a list of an elements


*/
function addNewSubject() {
    var tbody = document.getElementById("table_body");
    var newTr = document.createElement("tr");
    for (var i = 0; i < 3; ++i) {
        var td = document.createElement("td");
        var input = document.createElement("input");

        if (i == 2 || i == 1) {  
            input.type = "number";
            input.size = "5";
        }else{
            input.type = "text";
            input.size = "15";
            input.maxLength = "8";
        }

        td.appendChild(input);
        newTr.appendChild(td);
    }
    tbody.appendChild(newTr);
}




/*Assessment item - Task 2*/
/*Based on your understanding, provide a detailed description of how function deleteLastSubject() works


The function deleteLastSubject() will delete the last subject column from the table.



*/
function deleteLastSubject() {
   
    var x = document.getElementById("myTable").rows.length;
    if (x == 1) {
        return false;
    }
    document.getElementById("myTable").deleteRow(x-1);
}




/*Assessment item - Task 3*/
/*Based on your understanding, provide a detailed description of how function sendElementToCalculate() works


The function sendElementToCalculate() will read the input from the user then send it to calculation.
getElementsByTagName() This function is used to return all elements in the document that match the supplied tag name.
getElementById() method to Returns an element with the ID property set to a specific value.

*/
function sendElementToCalculate(){
    var tbody = document.getElementById("table_body");
    var elements = tbody.getElementsByTagName("input");
    CalculateGPA(elements);
}





/*Assessment item - Task 4*/
/*Based on your understanding, provide a detailed description of how function CalculateGPA() works.


The function CalculateGPA() is to calculate the total credits and marks from the table of user input.
and using if, Else statement each button has its own event handlers and functions.

*/
function CalculateGPA(elements) {

    var totalCredits = 0;
    var totalPoints = 0;
    var allOK = 0;
    var length = elements.length;
    
    

    for (var i = 0; i < length; i += 3) {
        
        if (elements[i].value == "") {
            alert("Please Enter The Name of The Subject!");
            elements[i].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i].style.borderColor = 'green';
            
        }  
        
        if (elements[i+1].value == ""){
            alert("Please Insert Value of The Credit");
            elements[i+1].style.borderColor = 'red';
            return false;
        }else if (elements[i+1].value%1 != 0) {
            alert("The Value of Credit Must Be In Whole Number!");
            elements[i+1].style.borderColor = 'red';
             
        }
        else{
            elements[i+1].style.borderColor = 'green';
            var credit = parseFloat(elements[i+1].value); 
            totalCredits += credit;
        }  

        
        
        var grade = elements[i+2].value;
        if (grade == "") {
            alert("Please fill in the point");
            elements[i+2].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i+2].style.borderColor = 'green';
        }
        totalPoints += credit*getPoint(grade);
        
       
    }
    var GPA = totalPoints/totalCredits;
      
    document.results.total_credits.value = totalCredits;
    document.results.gpa.value = GPA.toPrecision(3);
     
    
   
}


function getPoint(grade) {
    
    if (grade >= 80) {
        return 4.00;
    }
    else if (grade >= 75){
        return 3.67;
    }
    else if (grade >= 70){
        return 3.33;
    }
    else if (grade >= 65){
        return 3.00;
    }
    else if (grade >= 60){
        return 2.67;
    }
    else if (grade >= 55){
        return 2.33;
    }
    else if (grade >= 50){
        return 2.00;
    }
    else if (grade >= 45){
        return 1.67;
    }
    else if (grade >= 40){
        return 1.33;
    }
    else if (grade >= 35){
        return 1.00;
    }
    else if (grade >= 30){
        return 0.67;
    }
    else if (grade >= 0){
        return 0.00;
    }
}