var list = [];
// list[0]='sardor';
list.push('sardor');
list.push('akram');
list.push('ilhom');


list.splice(1, 1, 'bekzod');
console.log(list);
console.log(list.indexOf('bekzod'));
console.log(list.length);
var oxirgiIsm = list.pop();
console.log(oxirgiIsm);
console.log(list);

list.splice(1, 1);
console.log(list);
list.push('12', 12, 'salom', {});
console.log(list);
console.log(list.slice(0, 3));
console.log(list.join(','));
var list2 = ['bekzod','ziyod', 'Mahmud', 'akram'];
list2.sort();
list2.reverse();
console.log(list2);