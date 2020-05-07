const makeRandomToken = () => {
  const tokens = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * tokens.length);
  return tokens[randomIndex];
};
  

const gameCalc = (randomNum = makeRandomNum()) => {
  const task = 'What is the result of the expression?';
  console.log(task);
  return randomNum;
};

export default gameCalc;
