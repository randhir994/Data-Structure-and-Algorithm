function solve(currOpen, currClose, remOpen, remClose, result, output) {
  if (remOpen === 0 && remClose === 0) {
    result.push(output);
    return;
  }

  if (remOpen > 0) {
    output += "(";
    solve(currOpen + 1, currClose, remOpen - 1, remClose, result, output);
    output += output.slice(0, output.length - 1);
  }

  if (remClose > 0 && currOpen > currClose) {
    output += ")";
    solve(currOpen, currClose + 1, remOpen, remClose - 1, result, output);
    output += output.slice(0, output.length - 1);
  }
  console.log(result);
}

function generateParentheses(n) {
  const currOpen = 1;
  const currClose = 0;
  const remOpen = n - 1;
  const remClose = n;
  const result = [];
  const output = "(";

  return solve(currOpen, currClose, remOpen, remClose, result, output);
}

console.log(generateParentheses(2));
