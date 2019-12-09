const Markov = require("compiled-markov");
const fs = require("fs");
const sourceFileName = "./assets/shakespeare_hamlet.txt";
const outputFileName = "./assets/compiled.json";

let allLines = [];
fs.readFile(sourceFileName, "utf8", (error, data) => {
  if (error) throw error;

  const mark = new Markov();
  mark.initFromText(data);

  console.log(mark.generateSentences(1));

  fs.writeFile(outputFileName, mark.getCompiled(), "utf8", error => {
    if (error) throw error;
  });
});
