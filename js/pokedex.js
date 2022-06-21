fetch('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
    .then(response => response.json())
    .then(data => {console.log(data)})