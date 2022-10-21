const skills = [
  {id: 115223, skill: 'HTML', done: true},
  {id: 127904, skill: 'CSS', done: true},
  {id: 139708, skill: 'JavaScript/jQuery', done: true},
  {id: 149508, skill: 'Frameworks', done: true},
  {id: 159618, skill: 'Node', done: true},
  {id: 169618, skill: 'MongoDB', done: true},
  {id: 179618, skill: 'Python', done: false},
  {id: 189618, skill: 'Django', done: false},
  {id: 199618, skill: 'Angular', done: false},
  {id: 109618, skill: 'React', done: false},
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}