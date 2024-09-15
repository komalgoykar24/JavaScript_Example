let list = [];
let userInput;

while (true) {
    userInput = prompt("What do you want to do? (Add, Delete, Show, Quiet)");

    if (userInput === "Add") {
        let item = prompt("Enter the item to add:");
        if (item) {  // Check if item is not null or empty
            list.push(item);
            console.log(`Added: ${item}`);
        } else {
            console.log("No item entered. Please try again.");
        }
    } 
    else if (userInput === "Delete") {
        if (list.length > 0) {
            let deletedItem = list.pop();  // Removes the last item and stores it in deletedItem
            console.log(`Deleted: ${deletedItem}`);
        } else {
            console.log("No items to delete.");
        }
    } 
    else if (userInput === "Show") {
        console.log("Your list:");
        if (list.length > 0) {
            for (let output of list) {
                console.log(output);
            }
        } else {
            console.log("The list is empty.");
        }
    } 
    else if (userInput === "Quiet") {
        console.log("Visit Again. Thank You!");
        break;  // Exit the loop when user wants to quit
    } 
    else {
        console.log("Invalid input. Please try again.");
    }
}
