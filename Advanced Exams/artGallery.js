class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

       let model = Object.keys(this.possibleArticles).find(key => key === articleModel);

       if (!model) {
        throw Error(`This article model is not included in this gallery!"`)
       }

       let name = this.listOfArticles.find(name => name.articleName === articleName);

       if(!name) {
        this.listOfArticles.push({
            articleModel: articleModel,
            articleName: articleName,
            quantity: quantity
        })
       } else {
            if (articleModel === name.articleModel) {
                name.quantity += quantity;
            }
       }
       return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let person = this.guests.find(person => person.guestName === guestName);
        let points = 50;

        if (person) {
            throw Error(`${guestName} has already been invited.`);
        } 

        if (personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        } 

        this.guests.push({
            guestName: guestName,
            points: points,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

    }

    showGalleryInfo(criteria) {

    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
