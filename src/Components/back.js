const fs = require('fs');

const filePath = 'Rocketcards.json';
const data = { id:4, name: 'John', link: "https://www.youtube-nocookie.com/embed/i8eBBG46H8A", category: "Rocket" };

fs.writeFile(filePath, JSON.stringify(data), (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Data written to file successfully!');
  }
});