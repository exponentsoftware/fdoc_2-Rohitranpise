/* 	Write a function which filter users who has  scoresGreaterThan85,  
    Write a function which addUser  to the user array only if the user does not exist.   
    Write a function which addUserSkill which can add skill to a user only if the user exist.   
    Write a function which editUser if the user exist in the users array.
*/

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];


// users score above 85
function hello(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].scores >= 85) {
            console.log(users[i])
        }
    }
}
hello(users);


function add(users, person, object) {
    for (let j = 0; j < 7; j++) {
        if (person == users[j].name) {
            console.log('user cannot be added')
        }
    }
    users.push(object);
}

add(users, 'Rohit', {
    name: 'Rohit',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 24
}
);

console.log(users);