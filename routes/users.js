var express = require('express');
var router = express.Router();

const cors = require('cors');
const fs = require('fs');

router.use(cors());

/* GET users listing. */
router.get('/', function (req, res, next) {

  fs.readFile('./users.json', (err, data) => {
    if (err) {
      console.log(err);
    }
    let users = JSON.parse(data);
    console.log(users);
    res.json(users)
  })


});

router.post('/new', (req, res) => {
  console.log(req.body);
  let newUser = req.body;
  fs.readFile('./users.json', (err, data) => {
    if (err) {
      console.log(err);
    }
    let users = JSON.parse(data);
    users.push(newUser);
    fs.writeFile('./users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.log(err);
      }
    })
  })
  res.json("Ny användare sparad")
});

module.exports = router;