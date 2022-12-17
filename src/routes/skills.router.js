const skillRouter = require('express').Router()
const {readAllSkills, readSkill, updateSkill, createSkill, deleteSkill} = require('../controller/skills.controller')

skillRouter.get('/', readAllSkills)
skillRouter.get('/:id', readSkill)
skillRouter.post('/', createSkill)
skillRouter.patch('/:id', updateSkill)
skillRouter.delete('/:id', deleteSkill)

module.exports = skillRouter