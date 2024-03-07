//Prompt: I want to start a new business that sells robots to people.

/*
Level One
I need to build a factory that will produce robots to people that say, 
"Hello" when they run them.
*/

const robotFactory = (name) => {
    return () => {
        console.log('Hello ' + name + '!');
    };
};

const geoffreyRobot = robotFactory('Geoffrey');
geoffreyRobot();

/*
Level Two
Customers would like it if they could decide what the robots said.
*/


const robotFactory2 = (name) => {
    let old = "";

    return (message, currentName) => {
        old += message + ", "
        console.log(name + "'s Robot says...")
        console.log(old + " " + currentName + '!');
        console.log('*----------------------------*')
    };
};


const geoffreyRobot2 = robotFactory2('Geoffrey');
geoffreyRobot2('Hey', 'William');


/*
Level Three
Customers would like it if the robots kept track of ALL the names they've spoken to.
*/

const robotFactory3 = (name) => {
    let old = "";
    let nameCount = {};

    return (message, currentName) => {
        if (nameCount[currentName] !== undefined) {
            nameCount[currentName]++;
        } else {
            nameCount[currentName] = 1;
        };

        old += message + ", "
        console.log(name + "'s Robot says...")
        console.log(old + " " + currentName + '!');
        console.log('*----------------------------*')

        return nameCount;
    };
};

const geoffreyRobot3 = robotFactory3('Geoffrey');

let arr = [['Hey', 'William'], ['Hello', 'Hayden'], ['Howdy', 'Ali']];

for(let i = 0; i < arr.length; i++){
    let subArr = arr[i];
    let [msg, name] =  subArr;

    console.log(geoffreyRobot3(msg, name));
}