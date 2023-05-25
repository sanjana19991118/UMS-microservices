const User = require('../models/user')
const usersCltr = {}

usersCltr.list = (req,res) => { // list is an property added to the  object TaskCltr
   User.find()
     .then((users) => {
        res.json(users)
     })
     .catch((err) => {
        res.json(err)
     })

}

usersCltr.create = (req, res) => {
  const body = req.body 
  const user = new User(body)
  user.save()
  .then((user) => {
     res.json(user)
  })
  .catch((err) => {
     res.json(err)
  })
}

tasksCltr.show = (req, res) => {
     const id = req.params.id 
     Task.findById(id)
        .then((task) => {
             res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports = tasksCltr