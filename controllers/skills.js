const skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newskill,
  create,
  delete: deleteskill
};

function deleteskill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  skill.create(req.body);
  res.redirect('/skills');
}

function newskill(req, res) {
  res.render('skills/new', { title: 'New skill' });
}

function show(req, res) {
  res.render('skills/show', {
    skill: skill.getOne(req.params.id),
    title: 'To-Do Details'
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: skill.getAll(),
    title: 'All Skills'
  });
}