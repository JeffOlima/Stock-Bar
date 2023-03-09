const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.json());

const database = {
    users:[

       {
        id: '123',
        name: 'Jeff',
        email: 'oliveiralima.jefferson@gmail.com',
        password: '123',
        entries: 0,
        joined: new Date()

       },
       {
        id: '124',
        name: 'Sally',
        email: 'sally@gmail.com',
        password: '123',
        entries: 0,
        joined: new Date()

       },
    ]
}

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/signing', (req, res) => {
pp.post('/signing', (req, res) => {
    bcrypt.compare("bacon", hash, function(err, res) {
        // res == true
    });
    bcrypt.compare("veggies", hash, function(err, res) {
        // res = false
    });

    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password){
            res.json('success');
        }else {
           res.status(400).json('error logging in'); 
        }
})

app.post('/register', (req, res) => {
    const {email, name, password } = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1])
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        } 
    })
    if (!found){
        res.status(400).json('not found');
    }
})

bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});

app.listen(3000, () => {
    console.log('app in running on port 3000');
})

// --> res = this is working
// signing --> POST = success/finall
// /register --> POST = user 
// /profile/:userId --> GET = user
// image --> PUT --> user 

