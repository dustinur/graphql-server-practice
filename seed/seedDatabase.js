const fs = require("fs");
const { GraphQLClient } = require("graphql-request");

const client = new GraphQLClient("http://localhost:4466");

const mutation = `mutation createCharacter(
    $name: String!,
    $charClass: String!,
    $imageUrl: String,
    $poster: String,
    $description: String
) {
    createCharacter(data: {
        name: $name
        charClass: $charClass
        imageUrl: $imageUrl
        poster: $poster
        description: $description 
    })
    {
        name
        charClass
        imageUrl
        poster
        description
        id
    }
}

`;

const sampleFiles = ["witcher-data.json"];

async function main(inputFile) {
  const content = fs.readFileSync(`./seed/${inputFile}`);
  const allCharacters = JSON.parse(content);

  allCharacters.forEach(async item => {
    const variables = {
      name: item.name,
      charClass: item.charClass,
      imageUrl: item.imageUrl,
      poster: item.poster,
      description: item.description
    };

    await client
      .request(mutation, variables)
      .then(data => console.log(data))
      .catch(err => console.log(`${err}`));
  });
}

for (let fileName of sampleFiles) {
  main(fileName).catch(e => console.error(e));
}
