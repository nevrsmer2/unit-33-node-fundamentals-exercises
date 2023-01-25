$(function () {
    let baseURL = 'https://deckofcardsapi.com/api/deck';


    axios.get(`${baseURL}/new/draw/`)
        .then(response => {
            let { suit, value } = response.data.cards[0];
            console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });

    let firstCard = null;
    axios.get(`${baseURL}/new/draw/`)
        .then(response => {
            firstCard = response.data.cards[0];
            let deckId = response.data.deck_id;
            return axios.get(`${baseURL}/${deckId}/draw/`);
        })
        .then(response => {
            let secondCard = response.data.cards[0];
            [firstCard, secondCard].forEach(function (card) {
                console.log(
                    `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
                );
            });
        });


    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');

    axios.get(`${baseURL}/new/shuffle/`)
        .then(response => {
            deckId = response.data.deck_id;
            $btn.show();
        });

    $btn.on('click', function () {
        axios.get(`${baseURL}/${deckId}/draw/`)
            .then(response => {
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
});