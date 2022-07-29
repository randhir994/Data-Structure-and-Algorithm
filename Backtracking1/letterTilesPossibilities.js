function letterTilesPossibilities(tiles, output, result, flagMap) {
  for (let i = 0; i < tiles.length; i++) {
    if (!flagMap[i]) {
      output += tiles[i];
      flagMap[i] = 1;
      result.add(output);

      letterTilesPossibilities(tiles, output, result, flagMap);

      output = output.slice(0, output.length - 1);
      flagMap[i] = 0;
    }
  }

  return result.size;
}

const output = "";
const flagMap = {};
const result = new Set();

console.log(letterTilesPossibilities("AAB", output, result, flagMap));
