const Markov = require("compiled-markov");
const fs = require("fs");
const sourceFileName = "./assets/shakespeare_sonnets.txt";
const outputFileName = "./assets/compiled.json";

let allLines = [];
fs.readFile(sourceFileName, "utf8", (error, data) => {
  if (error) throw error;

  let lines = data.split("\n");
  let cleanedUpData = "";
  lines.forEach(line => {
    line = line.replace("\r", "").replace(/^\s+/g, "");
    if (line.length <= 0) return;

    cleanedUpData += line.replace(/[,:;]$/g, "") + ". ";
  });

  const mark = new Markov();
  mark.initFromText(cleanedUpData);

  console.log(mark.generateSentences(1, ""));
  console.log(mark.generateSentences(1, ""));
  console.log(mark.generateSentences(1, ""));

  fs.writeFile(outputFileName, mark.getCompiled(), "utf8", error => {
    if (error) throw error;
  });
});
