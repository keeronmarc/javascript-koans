function CollectionofAnimal (traits) {
	this.traits = traits || [];
	this.sayHello = function () {
		console.log(this.name + " " + "says Hello")
	}
	this.add = function(item) {
		this.traits.push(item)
	}


	this.speedcheck = function(speed 1,speed2) {
		this.traits.forEach(function(currentItem, index) {
		// expects objects to have id
			if currentItem.id == id) {
				console.log(that)
				that.items.splice(index,1)
			}
		})
	}
}

function PhysicalTraits(name, legs, growldb, speed, weight) {
	this.name = name || 'no type';
	this.legs = legs || 'no name';
	this.growldb = growldb || 'not here';
	this.speed = speed;
	this.weight = weight;
}

function SpeciesTraits(kingdom, phyla) {
	this.kingdom = kingdom || 'no type';
	this.phyla = phyla || 'no name';
}


// var lion = new Animal('Mufasa', '4', 800, 50, 330);
// var eagle = new Animal('Tweety', '2', 50, 28, 6);
// var squirrel = new Animal('Roger', '4', 20, 33, 4);




cat = new Animal();
cat.add(new PhysicalTraits('Heathcliff', '4', "50", 12, 30))
cat.add(new SpeciesTraits('King', 'Cool'))

dog = new Animal();
cat.add(new PhysicalTraits('Rover', '4', "200", 22, 90))
cat.add(new SpeciesTraits('Small', 'Cool'))




