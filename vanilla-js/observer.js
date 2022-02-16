class Auctioneer {
    constructor() {
        this.bidders = [];
        this.newBid = false;
    }


    registerBidder(bidder) {
        this.bidders.push(bidder);
    }

    notifyBidders() {
        this.bidders.forEach((bidder) => {
            bidder.update();
        })
    }

    announceNewBidderPrice() {
        this.notifyBidders();
    }
}


class Bidder {
    constructor(name) {
        this.name = name;
        this.bidPrice = null;
    }

    giveNewPrice(price) {
        this.bidPrice = price;
    }

    update() {

        console.log(`${this.name} is offering ${this.bidPrice} dollars`);

        if (this.bidPrice > 500) {
            console.log(`Sold to ${this.name}`);
        }
    }
}