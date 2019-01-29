var mongoose = require('mongoose');

SongSchema = mongoose.Schema({
	name: {
		type:String,
		required:true,
		unique:true,
		trim:true
	},
	desc: {
		type:String,
		required:true
	},
	ImgURL: {
		type:String,
		required:true
	},
	category: {
		type:String,
		required:true
	}
});

var Song = mongoose.model('Song', SongSchema);

module.exports = { Song };