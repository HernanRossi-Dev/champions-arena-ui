var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
	user: String,
	name: String,
	class: String,
	race: String,
	level: Number,
	XP: Number,
	STR: Number,
	DEX: Number,
	CON: Number,
	INT: Number,
	WIS: Number,
	CHA: Number,
	attributePointsToSpend: Number,
	items: Object,
	abilities: Object,
	traits: Object,
	type: String,
	gender: String,
	alignment: String,
	age: Number,
});

module.exports = mongoose.model('characters', characterSchema);