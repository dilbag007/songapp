var { mongoose } = require('./db/mongoose');
var { User } = require('./models/user');
var { Song } = require('./models/song');
var { midauth } = require('./middleware/authenticate');

var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var app = express();

app.use(bodyParser.json());

/*app.all("/*", (req, res, next) =>
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept');
	next();
});*/

app.use((req, res, next) =>
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept, x-token');
	res.setHeader('Access-Control-Expose-Headers', 'x-token');
	next();
});

app.get('/testDir', (req, res) => {
	console.log("Received Request");
	res.status(200).send();
});

app.post('/newUser', (req, res) => {
	res.header('confirmation', 'Creating New User');
	usr = new User({
		firstname: req.body.FName,
		lastname: req.body.LName,
		email: req.body.Eml,
		contactnumber: req.body.ConNo,
		password: req.body.Pswd
	});

	usr.save().then( (result) => {
		res.status(200).send(result);
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.post('/checkUser', (req, res) => {
	res.header('confirmation', 'Checking for User');
	User.findOne({'contactnumber':req.body.ConNo}).then( (result) => {
		if (!result) { return res.status(404).send(); }
		bcrypt.compare(req.body.Pswd, result.password, (er, reslt) => {
			if(reslt)
				{
					var nwToken = jwt.sign( {_id: result._id}, 'meKey' ).toString();

					result.token = nwToken;

					result.save().then(() => {
						res.status(200).header('x-token', nwToken).send(result);
					});					
				}
			else
				{ res.status(400).send(er); }
		});
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.post('/newSong', (req, res) => {
	res.header('confirmation', 'Creating New Song');
	sng = new Song({
		name: req.body.Name,
		desc: req.body.desc,
		ImgURL: req.body.Url,
		category: req.body.cat
	});

	sng.save().then((result) => {
		res.status(200).send(result);
	}).catch((err) => {
		res.status(400).send(err);
	});
});

app.post('/findHin', (req, res) => {
	res.header('confirmation', 'Looking for Songs');
	Song.find({'category': 'Hindi'}).then((result) => {
		res.status(200).send(result);
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.post('/findEng', (req, res) => {
	res.header('confirmation', 'Looking for Songs');
	Song.find({'category': 'English'}).then((result) => {
		res.status(200).send(result);
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.post('/findPun', (req, res) => {
	res.header('confirmation', 'Looking for Songs');
	Song.find({'category': 'Punjabi'}).then((result) => {
		res.status(200).send(result);
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.post('/findTrend', (req, res) => {
	res.header('confirmation', 'Looking for Songs');
	Song.find({'category': 'Trending'}).then((result) => {
		res.status(200).send(result);
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.get('/findSong', (req, res) => {
	res.header('confirmation', 'Looking for Songs');
	Song.findOne({'_id': req.query.id}).then((result) => {
		res.status(200).send(result);
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.get('/findCat', (req,res) => {
	res.header('confirmation', 'Looking for Songs');
	Song.find({'category': req.query.category}).then((result) => {
		res.status(200).send(result);
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.post('/logOut', (req, res) => {

	var token = req.body.token;

	dcoded = jwt.verify(token, 'meKey');

	User.findOne({'_id': dcoded._id}).then( () => {
		User.updateOne({'token':token} , {'token':""}, (err, result) => {
			if(err) {return res.status(400).send(err);}
			res.status(200).send();
		});
	}).catch( (err) => {
		res.status(400).send(err);
	});
});

app.listen(3000, function(){
	console.log("listening on 3000");
});

// app.post('/findSong', (req, res) => {
// 	res.header('confirmation', 'Looking for Songs');
// 	Song.findOne({'_id': req.body.id}).then((result) => {
// 		res.status(200).send(result);
// 	}).catch( (err) => {
// 		res.status(400).send(err);
// 	});
// });

// app.post('/findCat', (req,res) => {
// 	res.header('confirmation', 'Looking for Songs');
// 	Song.find({'category': req.body.category}).then((result) => {
// 		res.status(200).send(result);
// 	}).catch( (err) => {
// 		res.status(400).send(err);
// 	});
// });