var friendsAge = [15, 17, 14, 16];

var sonaliAge = friendsAge[2]
friendsAge[1] = 20;
var position = friendsAge.indexOf(14);
console.log(friendsAge.length);

friendsAge.push(18);
friendsAge.push(25);

console.log(friendsAge.length);
friendsAge.pop( );
console.log(friendsAge)

var teaLine = ['Kalam', 'Salam', 'Balam'];
teaLine.push('Jalam');
console.log(teaLine);
teaLine.pop( );
console.log(teaLine);

var teaLine = ['Kalam', 'Salam', 'Balam'];
teaLine.shift( );
console.log(teaLine);

var teaLine = ['Kalam', 'Salam', 'Balam'];
teaLine.unshift('Palm');
console.log(teaLine);

var teaLine = ['Kalam', 'Salam', 'Balam', 'Malam', 'Alam', 'Talam'];
var part = teaLine.slice(2)
console.log(part);

var teaLine = ['Kalam', 'Salam', 'Balam', 'Malam', 'Alam', 'Talam'];
var part = teaLine.slice(2, 5)
console.log(part);
console.log(teaLine);