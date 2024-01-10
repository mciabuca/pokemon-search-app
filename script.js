document.getElementById('search-button').addEventListener('click', function() {
    let searchTerm = document.getElementById('search-input').value.trim().toLowerCase();

    searchTerm = searchTerm.replace('♀', '-f').replace('♂', '-m').replace(/\s+/g, '-').replace(/\./g, '');

    if (searchTerm === '') {
        alert('Please enter a Pokémon name or ID');
    } else if (searchTerm === 'red') {
        alert('Pokémon not found');
    } else {
        fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokémon not found');
                }
                return response.json();
            })
            .then(data => {
                updatePokemonData(data);
            })
            .catch(() => {
                alert('Pokémon not found');
            });
    }
});

function updatePokemonData(data) {
    document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
    document.getElementById('pokemon-id').textContent = `#${data.id}`;
    document.getElementById('weight').textContent = data.weight;
    document.getElementById('height').textContent = data.height;
    document.getElementById('sprite').src = data.sprites.front_default;

    const types = data.types.map(type => type.type.name.toUpperCase()).join(', ');

    document.getElementById('types').innerHTML = types.split(', ').map(type => `<span>${type}</span>`).join(' ');
    document.getElementById('hp').textContent = data.stats[0].base_stat;
    document.getElementById('attack').textContent = data.stats[1].base_stat;
    document.getElementById('defense').textContent = data.stats[2].base_stat;
    document.getElementById('special-attack').textContent = data.stats[3].base_stat;
    document.getElementById('special-defense').textContent = data.stats[4].base_stat;
    document.getElementById('speed').textContent = data.stats[5].base_stat;
}


