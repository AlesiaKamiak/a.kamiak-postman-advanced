/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2.
*/

const names1 = ['Alex', 'Dima', 'Kate', 'Galina', 'Ivan'];
const names2 = ['Dima', 'Ivan', 'Kate'];

// update only this function
function findInterception(arr1, arr2) {
   var arrayOfInterception = names1.filter(name3 => names2.includes(name3)==false) ;
   console.log('Interception: ' + arrayOfInterception);
  return [];
}

findInterception(names1, names2);

module.exports = {
  names1,
  names2,
  findInterception,
};