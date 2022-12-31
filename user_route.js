const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

mongoose.connect(process.env.db_uri, { useNewUrlParser: true, useUnifiedTopology: true });



app.post('/users/create', (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({status: 500, error: true, message: err});
      return;
    }

    const user = new User({ username, password: hashedPassword });

    user.save((err, user) => {
      if (err) {
        res.status(500).json({status: 500, error: true, message: err});
      } else {
        res.json({status: 200, data: user});
      }
    });
  });
});

app.get('/users/read/id/:id', (req, res) => {
  const userId = req.params.id;

  User.findById(userId, (err, user) => {
    if (err) {
      res.status(500).json({status: 500, error: true, message: err});
    } else if (user) {
      res.json({status: 200, data: user});
    } else {
      res.status(404).json({status: 404, error: true, message: `The user ${userId} does not exist`});
    }
  });
});