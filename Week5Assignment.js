class Guest {
    constructor(name, foodTheyAreBringing) {
        this.name = name;
        this.foodTheyAreBringing = foodTheyAreBringing; 
    }
    describe() {
        return `${this.name} is bringing ${this.foodTheyAreBringing} to the SuperBowl Potluck`;
    }
}

class Menu {
    constructor() {
        this.guests = []
    }
    mainMenu() {
        let menuSelection = prompt(`
            1) Invite a Guest to the SuperBowl Potluck
            2) Uninvite a Guest 
            3) Update Guest Invitation
            4) View Guest List
        `)
        switch (menuSelection) {
            case "1":
                this.inviteGuest();
                break;
            case "2":
                this.uninviteGuest();
                break;
            case "3":
                this.updateGuest();
                break;
            case "4":
                this.viewGuestlist();
                break;
            default:
                this.mainMenu();
        }
    }
    inviteGuest() {
        const newGuest = new Guest(
            prompt("Enter Name: "),
            prompt("Enter Food Item: "),
        );
        console.log(newGuest);
        this.guests.push(newGuest);
        this.mainMenu();
    }
    uninviteGuest() {
        let index = prompt("Enter the index of the guest you wish to uninvite:");
        if (index > -1 && index < this.guests.length){
            this.guests.splice(index, 1);
        }
        this.mainMenu();
    }
    viewGuestlist() {
        let guestList = "";
        for (let guest of this.guests) {
            guestList += (guest.describe() + "\n");
        }
        prompt(guestList + "\n\nEnter 0 to go back to the main menu: ");
        this.mainMenu();
        
    }
    updateGuest() {
        alert("Update Guest Invitation")
        this.mainMenu();
    }
}

const menu1 = new Menu();
menu1.mainMenu();