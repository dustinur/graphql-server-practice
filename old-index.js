const { prisma } = require("./generated/prisma-client");

// A `main` function so that we can use async/await
async function main() {
  // Create a new character with a new post

  const newCharacter = await prisma.createCharacter({
    name: "geralt",
    charClass: "witcher",
    imageUrl: "test.jpg"
  });
  console.log(
    `Created new character: ${newCharacter.name} (ID: ${newCharacter.id})`
  );

  // Read all characters from the database and print them to the console
  const allCharacters = await prisma.characters();
  console.log(allCharacters);
}

main().catch(e => console.error(e));
