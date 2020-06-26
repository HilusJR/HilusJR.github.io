var Legends = ['Wraith', 'Gibraltar', 'Bloodhound', 'Octane', 'Pathfinder', 'Wattson', 'Loba', 'Caustic', 'Mirage', 'Crypto', 'Lifeline', 'Bangalore', 'Revenant'];

class Legend {
	constructor(desc, a1, a2, a3) {
		this.description = desc;
		this.ability1 = a1;
		this.ability2 = a2;
		this.ability3 = a3;
	}

	setDetails() {
		document.getElementById('legends_desc').innerText = this.description;
		document.getElementById('ability_1_name').innerText = this.ability1;
		document.getElementById('ability_2_name').innerText = this.ability2;
		document.getElementById('ability_3_name').innerText = this.ability3;
	}
};

var Bangalore = new Legend('Professional Soldier', 'Smoke Launcher', 'Double Time', 'Rolling Thunder');
var Bloodhound = new Legend('Technological Tracker', 'Eye of the Allfather', 'Tracker', 'Beast of the Hunt');
var Caustic = new Legend('Toxic Trapper', 'Nox Gas Trap', 'Nox Vision', 'Nox Gas Grenade');
var Legend_Crypto = new Legend('Surveillance Expert', 'Surveillance Drone', 'Neurolink', 'Drone EMP');
var Gibraltar = new Legend('Shielded Fortress', 'Dome of Protection', 'Gun Shield', 'Defensive Bombardment');
var Loba = new Legend('Translocating Thief', 'Burglar\'s Best Friend', 'Eye for Quality', 'Black Market Boutique');
var Lifeline = new Legend('Combat Medic', 'D.O.C. Heal Drone', 'Combat Medic', 'Care Package');
var Mirage = new Legend('Holographic Trickster', 'Psyche Out', 'Now You See Me...', 'Life of the Party');
var Octane = new Legend('High-Speed Daredevil', 'Swift Mend', 'Adrenaline Junkie', 'Launch Pad');
var Pathfinder = new Legend('Forward Scout', 'Grappling Hook', 'Insider Knowledge', 'Zipline Gun');
var Revenant = new Legend('Synthetic Nightmare', 'Silence', 'Stalker', 'Death Totem');
var Wattson = new Legend('Static Defender', 'Perimeter Security', 'Spark of Genius', 'Interception Pylon');
var Wraith = new Legend('Interdimensional Skirmisher', 'Into the Void', 'Voices from the Void', 'Dimensional Rift');



function PickLegend() {
	var picked_legend = Legends[Math.floor(Math.random() * Legends.length)];
	if (picked_legend == document.getElementById('legends_name').innerText) PickLegend();
	else {
		document.getElementById('legends_name').innerText = picked_legend;
		document.getElementById('legends_pic_img').src = "img/" + picked_legend + ".png";
		document.getElementById('ability_1').src = "img/" + picked_legend + "1.png";
		document.getElementById('ability_2').src = "img/" + picked_legend + "2.png";
		document.getElementById('ability_3').src = "img/" + picked_legend + "3.png";
		switch (picked_legend) {
			case 'Bangalore':
				Bangalore.setDetails();
				break;
			case 'Bloodhound':
				Bloodhound.setDetails();
				break;
			case 'Caustic':
				Caustic.setDetails();
				break;
			case 'Crypto':
				Legend_Crypto.setDetails();
				break;
			case 'Gibraltar':
				Gibraltar.setDetails();
				break;
			case 'Loba':
				Loba.setDetails();
				break;
			case 'Lifeline':
				Lifeline.setDetails();
				break;
			case 'Mirage':
				Mirage.setDetails();
				break;
			case 'Octane':
				Octane.setDetails();
				break;
			case 'Pathfinder':
				Pathfinder.setDetails();
				break;
			case 'Revenant':
				Revenant.setDetails();
				break;
			case 'Wattson':
				Wattson.setDetails();
				break;
			case 'Wraith':
				Wraith.setDetails();
				break;
			default:
				alert('Something went wrong. Please contact developer')
		}
	}
}