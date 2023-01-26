$(async function () {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    async function createDeck() {
        let response = await axios.get(`${baseURL}/new/draw/`)
        let { suit, value } = response.data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }
    // createDeck()

    let firstCard = null;

    async function newDraw() {
        let response = await axios.get(`${baseURL}/new/draw/`)
        firstCard = response.data.cards[0];
        let deckId = response.data.deck_id;

        let res = await axios.get(`${baseURL}/${deckId}/draw/`);
        let secondCard = res.data.cards[0];
        [firstCard, secondCard].forEach(function (card) {
            console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
        })
    }
    // newDraw()

    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');

    async function shuffleDeck() {
        let response = await axios.get(`${baseURL}/new/shuffle/`)
        deckId = response.data.deck_id;
        $btn.show();
    }
    shuffleDeck()

    $btn.on('click', async function () {
        let response = await axios.get(`${baseURL}/${deckId}/draw/`)
        let cardSrc = response.data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (data.remaining === 0) $btn.remove();
    });
});