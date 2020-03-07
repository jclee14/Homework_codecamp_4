const people = { Adam: 28, Sophie: 22, Aorum: 13 };

Object.keys(people).map(function(key, index) {
  console.log('Name: ' + key + ', Age: ' + people[key])
}); 