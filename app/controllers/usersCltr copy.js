const User = require('../models/user')
const usersCltr = {}

usersCltr.list = (req,res) => {
    User.find()
        .then((user) => {
            console.log(user)
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

usersCltr.create = (req,res) => {
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

// usersCltr.show = (req,res) => {
//     const id = req.params.id 
//     User.findById(id)
//         .then((user) => {
//             res.json(user)
//         })
//         .catch((err) => {
//              res.json(err)
//         })
// }

module.exports = usersCltr

// const User = require('../models/user')
// const usersCltr = {}


// usersCltr.create = (req, res) => {
//     User.find()
//     .then((users)=>{
//         res.json(users)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// usersCltr.show  = (req,res) => {
//     const body = req.body
//     const users = new User(body)
//     users.save()
//     .then((users)=>{
//         res.json(users)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }
// usersCltr.update = (req,res) => {
//     const id = req.params.id
//     User.findById(id,body,{new:true,runValidators:true})
//     .then((users)=>{
//         res.json(users)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }
// usersCltr.destroy = (req,res) => {
//     const id = req.params.id
//     Users.findByIdAndUpdate(id,body,{new:true,runValidators:true})
//     .then((users)=>{
//         res.json(users)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// module.exports = usersCltr