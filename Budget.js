//1- Get a collection Array of bills\
const billCollection = [];

//2- Create a function that creates a Bill with bill details as parameters.
const createBill = (billType = "", icon = "", name = "", total = 0.00, dueDate = "")=>{
    //create an object with the passed parameter values.
    const bill = {
        Type: billType,
        Icon: icon,
        Name: name,
        Total: total,
        Due: dueDate,
    }

    //Add the object to the array
    billCollection.push(bill);
}

//2.1 create several Bills
createBill("Necessary", "🏠", "Rent", 1280, "07/01/2022");
createBill("Necessary", "⚡", "Energy", 68, "07/10/2022");
createBill("Responsability", "🚗", "Geico", 182, "07/27/2022");
createBill("Necessary", "🍔", "Food", 400, "07/01/2022");
createBill("Responsability", "📱", "T-Mobile", 160, "07/14/2022");
createBill("Internet", "🌏", "Spectrum", 72, "07/11/2022");
createBill("Credit Card", "💳", "Bank Of America CC", 50, "07/20/2022");

//3- Create a function that display all bills accordingly in a table.
const displayBills = ()=> {
    console.table(billCollection);
}

//4- Calculate the total of expenses from a household income and determine how much left people have to pay debt.
const calculateBudget = (income1 = 0, income2 = 0, stateTaxPercentage = 0)=>{

    //calculate taxes taken from the income
    const incomeTax = (income1 + income2) * (stateTaxPercentage / 100);

    //get the income after tax
    const householdIncome = (income1 + income2) - incomeTax;

    //Display log the household income
    console.log(`The household income is ${householdIncome.toFixed(2)}`);

    //hold the total amount of bills expenses.
    let expenses = 0;

    billCollection.forEach(bill => {
        expenses += bill.Total
    });

    //Display the montly expenses.
    console.log(`Your monthly expenses are: ${expenses}`);

    //Get the remaining balance.
    const remainingBalance = householdIncome - expenses;

    //if the remaining balance is equal or less than 0 display a message else display a message with value.
    remainingBalance <= 0 ? 
    console.log("You do not have money left in your budget") : 
    console.log(`You have $${remainingBalance.toFixed(2)} left in your budget`);
}

//Delete a bill
const deleteBill = (billId)=>{
    //get a single bill based in the id provided, and assign its type to a variable.
    const billType = billCollection[billId].Type;

    //if the bill type is "Necessary" then delete it from the array else dont delete it and display a message to the user
    if(billType === "Necessary"){
        billCollection.splice(billId, 1);
    } else {
        console.log("I am sorry but the bill needs to be Necessary to be deleted!")
    }

    //List all the bills either way of changes.
    displayBills();

}

//5- Call the Print bill and get Total functions

//Display the bill
displayBills();

//get total using income 1, income 2 and state tax percentage
calculateBudget(4360, 1600, 12.33);

//delete the first bill of the array
deleteBill(0);