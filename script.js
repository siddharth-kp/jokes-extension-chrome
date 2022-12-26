fetch('https://api.chucknorris.io/jokes/random')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.value;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })