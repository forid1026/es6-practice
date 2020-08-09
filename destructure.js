const person = { name: 'Jack', age: 24, hobby: 'gaming', job: 'Jr developer', address: 'DakhsinKhan'};

const {age, name, job} = person;
// const name = person.name;

console.log(age, name, job);

//Array Destructure

const friends = ['Udhas', 'shaba', 'Mahbub', 'Faisal', 'Niloy'];

const [firstElement, ...restElement] = friends;
console.log(firstElement);
console.log(restElement);

//complete object

const complexObject = {
    name: 'Jackma',
    info: {
        address: 'DakshinKhan',
        leader: 'Alibaba'
    }
}
const { leader } = complexObject.info;
console.log(leader);

//swapping

let a = 1, b = 2;
[a, b] = [b, a];
console.log('a = ', a, 'b = ', b);

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr) 