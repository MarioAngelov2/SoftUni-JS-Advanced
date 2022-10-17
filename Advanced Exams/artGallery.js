class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        // if (this.possibleArticles.hasOwnProperty(articleModel)) {
        //     throw Error(`This article model is not included in this gallery!`);
        // }

        console.log(this.possibleArticles)
    }

    inviteGuest(guestName, personality) {

    }

    buyArticle(articleModel, articleName, guestName) {

    }

    showGalleryInfo(criteria) {

    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
