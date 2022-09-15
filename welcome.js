const input = require('sync-input');
let userTickets = 0;

const gifts = [
  {name: "Teddy Bear", price: 10, id: 1},
  {name: "Big Red Ball", price: 5, id: 2},
  {name: "Huge Bear", price: 50, id: 3},
  {name: "Candy", price: 8, id: 4},
  {name: "Stuffed Tiger", price: 15, id: 5},
  {name: "Stuffed Dragon", price: 30, id: 6},
  {name: "Skateboard", price: 100, id: 7},
  {name: "Toy Car", price: 25, id: 8},
  {name: "Basketball", price: 20, id: 9},
  {name: "Scary Mask", price: 75, id: 10},
];

const showWelcomeMessages = () => {
  console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
  console.log("Hello friend! Thank you for visiting the carnival!");
}

const showUserTickets = () => {
  console.log(`Total tickets: ${userTickets}`);
}

const showAvailableGifts = () => {
  console.log("Here's the list of gifts:\n");
  gifts.forEach((currentItem) => {
    console.log(
      `${currentItem.id}- ${currentItem.name}, Cost: ${currentItem.price} tickets`
    );
  });
}

const showFarewell = () => {
  console.log("Have a nice day!");
}

showWelcomeMessages();
showAvailableGifts();
let userInput = 0;
while (userInput !== 5) {
  userInput = Number(input("\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n"));
  switch (userInput) {
    case 1: {// buy
      let newGiftInput = Number(input("Enter the number of the gift you want to get: "));
      const boughtGift = gifts[newGiftInput - 1];
      if (boughtGift) {
        userTickets -= boughtGift.price;
        gifts.splice(newGiftInput - 1, 1);
        console.log(`Here you go, one ${boughtGift.name}!`);
        showUserTickets();
      }
      break;
    }
    case 2: {
      let newTicketsInputs = Number(input("Enter the ticket amount:"));
      userTickets += newTicketsInputs;
      showUserTickets();
      break;
    }
    case 3:
      showUserTickets();
      break;
    case 4:
      showAvailableGifts();
      break;
    default:
      break;
  }
}

showFarewell();
console.log("Process finished with exit code 0");
