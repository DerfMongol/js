let restaurant = {
    name: 'Ruth Chris',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailabilty: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailabilty(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailabilty(4))
