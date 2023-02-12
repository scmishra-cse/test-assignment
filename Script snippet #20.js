// In javascript, implement a method groupByOwners that takes in input an object 
// containing the file owner name for each file name and returns output an object 
// containing the list of file names for each file owner name
// For example: 
// Input
// —---
//  {
//         'Input.txt': 'Randy',
//         'Code.py': 'Stan',
//         'Output.txt': 'Randy'
// }

// Output
// —---
// {
// ‘Randy’ : [‘Input.txt’, ‘Output.txt’],
// ‘Stan’ : [ ‘Code.py’]
// }

let obj1 = {
    'Input.txt': 'Randy',
    'Code.py': 'Stan',
    'Output.txt': 'Randy',
}
const groupByOwner = (obj1) => {
  const result = {};
  for (let file in obj1) {
    const writer = obj1[file];
    if (!result[writer]) {
      result[writer] = [];
    }
    result[writer].push(file);
  }
  return result;
}
console.log(groupByOwner(obj1));
