const Details = require('../models/details')
const detailsCltr = {}


detailsCltr.list = (req,res) => {
    Details.find()
       .then((details) => {
          res.json(details)
       })
       .catch((err) => {
          res.json(err)
       })

}

detailsCltr.create = (req,res) => {
    const body = req.body
    const details  = new Details
    details.save()
        .then((details) => {
            res.json(details)
        })
        .catch((err) => {
            res.json(err)
        })
}
 
// detailsCltr.show()

// const Details = require('../models/details')

// const detailsCltr = {}

// detailsCltr.list = (req,res)=>{
//     Details.find()
//     .then((details)=>{
//         res.json(details)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// detailsCltr.create = (req,res)=>{
//     const body = req.body
//     const details = new Details(body)
//     details.save()
//     .then((details)=>{
//         res.json(details)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// detailsCltr.show = (req,res)=>{
//     const id = req.params.id
//     Details.findById(id,body,{new:true,runValidators:true})
//     .then((details)=>{
//         res.json(details)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// detailsCltr.update = (req,res)=>{
//     const id = req.params.id
//     Details.findByIdAndUpdate(id,body,{new:true,runValidators:true})
//     .then((details)=>{
//         res.json(details)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// detailsCltr.destroy = (req,res)=>{
//     const id = req.params.id
//     Details.findByIdAndDelete(id)
//     .then((details)=>{
//         res.json(details)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// }

// module.exports = detailsCltr