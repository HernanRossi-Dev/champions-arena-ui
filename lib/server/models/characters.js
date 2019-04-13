var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
	user: String,
	name: String,
	class: String,
	ancestry: String,
	level: Number,
	XP: Number,
	STR: Number,
	DEX: Number,
	CON: Number,
	INT: Number,
	WIS: Number,
	CHA: Number,
	freeAbilityPoints: Number,
	items: Object,
	abilities: Object,
	traits: Object,
	type: String,
	gender: String,
	alignment: String,
	age: Number,
	ancestryProps: Object,
	backgroundProps: Object,
	classProps: Object,
});

module.exports = mongoose.model('characters', characterSchema);