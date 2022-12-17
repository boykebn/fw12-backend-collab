const userSkillRouter = require('express').Router()
const {readAllUserSkills, readUserSkill, updateUserSkill, createUserSkill, deleteUserSkill} = require('../controller/userSkills.controller')

userSkillRouter.get('/', readAllUserSkills)
userSkillRouter.get('/:id', readUserSkill)
userSkillRouter.post('/', createUserSkill)
userSkillRouter.patch('/:id', updateUserSkill)
userSkillRouter.delete('/:id', deleteUserSkill)


module.exports = userSkillRouter