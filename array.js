const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'Agun' };
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2) {
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

// concat
const newFriendsAge = [12, 13, 11, 13];
const allfriends = newFriendsAge.concat(friends);
console.log(allfriends);

