function Collection0fAnimals (animalSpecies) {
	this.animalSpecies = animalSpecies || [];
	this.add = function(item) {
		this.animalSpecies.push(item)
	}

	this.speedcheck = function() {
		this.animalSpecies.forEach(function(currentItem, index) {
		// expects objects to have id
			if (currentItem.speed > 20) {
				console.log("thats fast")
				console.log(currentItem.name)
			}
		})
	}


	this.eatingfish = function() {
		this.animalSpecies.forEach(function(animalattacker, index) {
			if (animalattacker.eatinghabit === 'carnivore') {
				canSwim = false;
               		if (animalattacker.swim === true) {
                  		canSwim = true;
                  		console.log(animalattacker.name);
               		}
			}
		})	
	}

	this.bestfighter = function() {
		this.animalSpecies.forEach(function(fighter, index) {
			if(fighter.prowess > 8) {
				console.log(fighter.name + " " + "can eat other animals when its")
			}
		})
	}

	this.pack = function(original) {
		this.animalSpecies.forEach(function(pack, index) {
			if(pack.name > 2) {
				console.log("you gotta pack");
				console.log("you gotta pack");
			}
		})
	}


	// if the difference between two animals prowess is 2 or less
	// 	then determine size

	// if temp is certain areas
	// if traveling with a pack then

	// enter in random season with variable for season rand(fall,winter, summer, spring)

}



function Animaltraits(name, speed, prowess, habitat, swim, eatinghabit, coverage) {
	this.name = name || 'no name';
	this.speed = speed || 'no speed';
	this.prowess = prowess;
	this.habitat = habitat || 'living it nowhere';
	this.swim = swim || 'no swimmy';
	this.eatinghabit = eatinghabit;
	this.coverage = coverage;
}

var feline = new Collection0fAnimals;
feline.add(new Animaltraits('Lion',25, 9, 'out', true, "carnivore", 60));
feline.add(new Animaltraits('Cat',6, 4, 'in', false, "herbivore", 2));
feline.add(new Animaltraits('Cheetah',80, 6, 'out', false, "carnivore", 20));
feline.add(new Animaltraits('Cheetah',80, 6, 'out', false, "carnivore", 20));
feline.add(new Animaltraits('Cheetah',80, 6, 'out', false, "carnivore", 20));
feline.add(new Animaltraits('Cheetah',80, 6, 'out', false, "carnivore", 20));
feline.add(new Animaltraits('Tiger',40, 8, 'out', true, "carnivore", 40));


var grazers = new Collection0fAnimals;
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));
grazers.add(new Animaltraits('Springbok',45, 5, 'out', false, "carnivore", 280));


function herding () {
	var allpackin = grazers.animalSpecies.length;
 	if(allpackin > 10) {
    	console.log("here it goes");
    }
}

var diff = packHerding(grazers);

var exotic = new Collection0fAnimals;
exotic.add(new Animaltraits('Zebra',15, 3, 'out', true, "carnivore", 150));
exotic.add(new Animaltraits('Giraffe',5, 1, 'out', false, "herbivore", 50));
exotic.add(new Animaltraits('Wildebeest',20, 3, 'out', true, "carnivore", 200));


// function Environment (season, temp, surface, timeofDay) {
// 	this.season = season;
// 	this.temp = temp;
// 	this.surface = surface;
// 	this.timeofDay = timeofDay;
// }

// var old_array = ['Lion',25, 9, 'out', true, "carnivore"];
// new_array = old_array.slice(0);
// feline.add(new Animaltraits(append(new_array)));

// generate pack animals






