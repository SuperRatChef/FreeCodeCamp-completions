const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weightElement = document.getElementById("weight");
const heightElement = document.getElementById("height");
const typesElement = document.getElementById("types");
const hpElement = document.getElementById("hp");
const attackElement = document.getElementById("attack");
const defenseElement = document.getElementById("defense");
const specialAttackElement = document.getElementById("special-attack");
const specialDefenseElement = document.getElementById("special-defense");
const speedElement = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");
const pokemonDetails = document.getElementById("pokemon-details");

// PokéAPI Proxy URL
const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

// Fetch Pokémon Data
async function fetchPokemonData(pokemon) {
  try {
    const response = await fetch(`${apiURL}${pokemon.toLowerCase()}`);
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    const data = await response.json();
    updatePokemonDetails(data);
  } catch (error) {
    alert('Pokémon not found');
    clearPokemonDetails();
  }
}

// Update the page with Pokémon data
function updatePokemonDetails(data) {
  // Show the details section
  pokemonDetails.style.display = 'block';

  // Name and ID
  pokemonName.textContent = `${data.name.toUpperCase()}`;
  pokemonId.textContent = `#${data.id}`;

  // Weight and Height
  weightElement.textContent = `${data.weight}`;
  heightElement.textContent = `${data.height}`;

  // Types
  typesElement.textContent = '';
  data.types.forEach((typeInfo) => {
    const typeElement = document.createElement('p');
    typeElement.textContent = typeInfo.type.name.toUpperCase();
    typesElement.appendChild(typeElement);
  });

  // Stats
  hpElement.textContent = `${data.stats[0].base_stat}`;
  attackElement.textContent = `${data.stats[1].base_stat}`;
  defenseElement.textContent = `${data.stats[2].base_stat}`;
  specialAttackElement.textContent = `${data.stats[3].base_stat}`;
  specialDefenseElement.textContent = `${data.stats[4].base_stat}`;
  speedElement.textContent = `${data.stats[5].base_stat}`;

  // Sprite Image
  spriteContainer.innerHTML = ''; // Clear previous image
  const sprite = document.createElement('img');
  sprite.src = data.sprites.front_default;
  sprite.alt = `${data.name} sprite`;
  sprite.id = 'sprite';
  spriteContainer.appendChild(sprite);
}

// Clear Pokémon details (for not found cases)
function clearPokemonDetails() {
  pokemonDetails.style.display = 'none';
  spriteContainer.innerHTML = '';
}

// Add event listener to the search button
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchPokemonData(query);
  } else {
    alert('Please enter a Pokémon name or ID');
  }
});