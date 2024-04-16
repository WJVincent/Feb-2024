const ABOUT_ME_ITEMS = [
    "dogs are cool",
    "linux is great",
    "vim > vscode",
    "haskell is beautiful",
    "plain text rules"
];

const makeClock = () => {
    const div = document.createElement('div');
    div.className = 'clock-container';
    const ids = { 0: 'hour', 1: 'minute', 2: 'second' };

    for(let i = 0; i < 3; i++){
        const span = document.createElement('span');
        span.className = 'clock-item';
        span.setAttribute('id', ids[i]); 
        div.appendChild(span);
    }
    return div;
};

const updateClock = () => {
    const currTime = new Date();
    const seconds = currTime.getSeconds();
    const minutes = currTime.getMinutes();
    let hours = currTime.getHours();
    
    if(hours > 12) hours = hours - 12;
    const secSpan = document.getElementById('second');
    const minSpan = document.getElementById('minute');
    const hourSpan = document.getElementById('hour');


    secSpan.innerText = 'seconds: ' + seconds; 
    minSpan.innerText = 'minutes: ' + minutes;
    hourSpan.innerText = 'hours: ' + hours;
};

const createHeader = (level, content, name) => {
    const header = document.createElement(`h${level}`);
    header.innerText = content;
    header.setAttribute('id', name);
    return header;
}

const createList = (arr, name) => {
    const ul = document.createElement('ul');
    ul.setAttribute('id', name);

    arr.forEach(el => {
        const li = document.createElement('li');
        li.innerText = el;
        ul.appendChild(li);
    });

    return ul;
};

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;  

    const nameHeader = createHeader(1, 'William Vincent', 'header');
    const sep = document.createElement('hr');
    const aboutMeList = createList(ABOUT_ME_ITEMS, 'my-list');
    const clock = makeClock();
    body.appendChild(nameHeader);
    body.appendChild(sep);
    body.appendChild(aboutMeList);
    body.appendChild(clock);
   
    setInterval(updateClock, 1000);
});
