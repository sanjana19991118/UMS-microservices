// const Details = require('../models/details')
// const detailsCltr = {}

// detailsCltr.list = (req , res) => {
//     Details.find()
//        .then((details) => {
//          res.json(details)
//        })
//        .catch((err) => {
//          res.json(err)
//        })
       
// }

// detailsCltr.create = (req, res) => {
//   const body = req.body 
//   const details = new Details(body)
//   details.save()
//       .then((details) => {
//           res.json(details)
//       })
//       .catch((err) => {
//           res.json(err)
//       })
// }

// detailsCltr.show = (req, res) => {
//    const id = req.params.id
//    Details.findById(id)
//       .then((details) => {
//          res.json(details)
//       })
//       .catch((err) => {
//          res.json(err)
//       })
// }

// // categoriesCltr.update = (req,res) => {
// //    const id = req.params.id
// //    const body = req.body 
// //    Category.findByIdAndUpdate(id, body, {new: true, runvalidators: true })
// //      .then((category) => {
// //         res.json(category)
// //      })
// //      .catch((err) => {
// //         res.json(err)
// //      })
// // }

// // categoriesCltr.destory = (req, res) => {
// //      const id = req.params.id
// //      Category.findByIdAndDelete(id)
// //          .then((category) => { 
// //             res.json(category)
// //          })
// //          .catch((err) => {
// //             res.json(err)
// //          })

// // }
// module.exports = detailsCltr