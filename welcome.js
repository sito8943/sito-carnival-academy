const input = require('sync-input');
let userTickets = 0;

const gifts = {
  1: {name: "Teddy Bear", price: 10, id: 1},
  2: {name: "Big Red Ball", price: 5, id: 2},
  3: {name: "Huge Bear", price: 50, id: 3},
  4: {name: "Candy", price: 8, id: 4},
  5: {name: "Stuffed Tiger", price: 15, id: 5},
  6: {name: "Stuffed Dragon", price: 30, id: 6},
  7: {name: "Skateboard", price: 100, id: 7},
  8: {name: "Toy Car", price: 25, id: 8},
  9: {name: "Basketball", price: 20, id: 9},
  10: {name: "Scary Mask", price: 75, id: 10},
};

/* functions */
const thereAreGifts = () => Boolean(Object.values(gifts).length);

const isValidNumber = (number) => !isNaN(number);

const isValidTicket = (number) => isValidNumber(number) && 0 <= number && number <= 1000;

const enoughTickets = (number) => userTickets - number >= 0;

const addTickets = (number) => userTickets += number;

const substractTickets = (number) => userTickets -= number;

const showWelcomeMessages = () => {
  console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
  console.log("Hello friend! Thank you for visiting the carnival!");
}

const showUserTickets = () => console.log(`Total tickets: ${userTickets}`)

const showAvailableGifts = () => {
  if (!Object.values(gifts).length) console.log("Wow! There are no gifts to buy.");
  console.log("Here's the list of gifts:\n");
  Object.values(gifts).forEach((currentItem) => {
    console.log(
      `${currentItem.id}- ${currentItem.name}, Cost: ${currentItem.price} tickets`
    );
  });
}

/* logs */
const showFarewell = () => console.log("Have a nice day!")

const showError = () => console.log("Please enter a valid number!")

const showEmptyMessage = () => console.log("Wow! There are no gifts to buy.");

const showInvalidNumber = () => console.log("Please enter a valid number!");

const showNoEnoughTickets = () => console.log("You don't have enough tickets to buy this gift.");

const showInvalidGiftNumber = () => console.log("There is no gift with that number!");

const showInvalidTickets = () => console.log("Please enter a valid number between 0 and 1000.");

showWelcomeMessages();
showAvailableGifts();
let userInput = 0;
while (userInput !== 5) {
  userInput = Number(input("\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n"));
  switch (userInput) {
    case 1: {// buy
      if (!thereAreGifts()) {
        showEmptyMessage();
        break;
      }
      let newGiftInput = Number(input("Enter the number of the gift you want to get: "));
      if (!isValidNumber(newGiftInput)) {
        showInvalidNumber();
        break;
      }
      const boughtGift = gifts[newGiftInput];
      if (boughtGift) {
        if (enoughTickets(boughtGift.price)) {
          substractTickets(boughtGift.price);
          delete gifts[newGiftInput];
          console.log(`Here you go, one ${boughtGift.name}!`);
          showUserTickets();
        } else showNoEnoughTickets();
      } else showInvalidGiftNumber();
      break;
    }
    case 2: {
      let newTicketsInputs = Number(input("Enter the ticket amount:"));
      if (isValidTicket(newTicketsInputs)) {
        addTickets(newTicketsInputs);
        showUserTickets();
      } else showInvalidTickets();
      break;
    }
    case 3:
      showUserTickets();
      break;
    case 4:
      showAvailableGifts();
      break;
    default:
      showError();
      break;
  }
}

showFarewell();
console.log("Process finished with exit code 0");
