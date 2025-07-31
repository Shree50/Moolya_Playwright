import { test, expect, request } from '@playwright/test';

test('Get Pokémon data from PokeAPI and validate response', async () => {
  // Step 1: Create a new API request context
  const apiContext = await request.newContext();

  // Step 2: Make the GET request to fetch Pikachu data
  const response = await apiContext.get('https://pokeapi.co/api/v2/pokemon/pikachu');

  // Step 3: Validate response status
  expect(response.ok()).toBeTruthy(); // 200 OK expected

  // Step 4: Parse and inspect the response JSON
  const data = await response.json();
  console.log('Pikachu:', data);

  // Step 5: Validate key parts of the response
  expect(data.name).toBe('pikachu');
  expect(data.id).toBe(25); // Pikachu's official ID
  expect(data.types[0].type.name).toBe('electric'); // Pikachu is Electric-type
});