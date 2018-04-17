function convertHero(hero) {
	if (hero.created) hero.created = new Date(hero.created);
	return hero;
}

export default {
	convertHero
};