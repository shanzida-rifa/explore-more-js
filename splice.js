const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

const partial = friends.splice(2, 1, 99, 555, 77);
console.log(partial);
console.log(friends);