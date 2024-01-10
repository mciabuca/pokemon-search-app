# Pokémon Search App

This is a simple web application that allows users to search for Pokémon by name or ID.

## Project Structure

- `index.html`: The main HTML file that includes the structure of the web page.
- `script.js`: The JavaScript file that handles the search functionality and updates the page with the Pokémon data.
- `styles.css`: The CSS file that styles the web page.

## How to Use

1. Open `index.html` in your web browser.
2. Enter a Pokémon name or ID into the search box and click the "Search" button.
3. The page will display information about the searched Pokémon, including its name, ID, weight, height, types, and stats.

## Implementation Details

The application uses the [FreeCodeCamp's PokéAPI Proxy](https://pokeapi-proxy.freecodecamp.rocks/api/pokemon) to fetch the Pokémon data. The search term entered by the user is sanitized and formatted before being used in the API request.

The `updatePokemonData` function in [`script.js`](script.js) is responsible for updating the page with the fetched Pokémon data.

## Future Improvements

- Add autocomplete functionality to the search box.
- Display more Pokémon details, such as abilities and evolutions.
- Improve error handling for cases when the Pokémon is not found.