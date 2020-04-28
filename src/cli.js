import readlineSync from 'readline-sync';

 const helloName = () => {
	const name = readlineSync.question('May I have your name? ');
	if (name === '') {
		helloName();
	}
	console.log(`Hello, ${name}!`);
	return name;
};

export { helloName };