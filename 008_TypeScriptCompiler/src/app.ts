const button = document.querySelector('button')!;

function clickHandler(message: string) {
    // let userName = 'Max';
    console.log(message + " clicked! " + message);
}

function add(n1: number, n2: number) {
    if (n1 === 123) {
        console.log("Fuck You");
        return;
    } else {
        return n1 + n2;
    }
};

// comment

if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'You\'re velkome'));
}