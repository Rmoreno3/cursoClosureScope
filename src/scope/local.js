const helloWorld = () => {
    const hello = 'Hola';
    console.log(hello);
};

helloWorld();

var scope = 'I am global';

const functionScope = () => {
    var scope = 'I am just local';
    const func = () => {
        return scope;
    };
    console.log(func());
};

functionScope();