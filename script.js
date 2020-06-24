var Legends = ['Wraith', 'Gibraltar', 'Bloodhound', 'Octane', 'Pathfinder', 'Wattson', 'Loba', 'Caustic', 'Mirage', 'Crypto', 'Lifeline', 'Bangalore', 'Revenant'];

function PickLegend() {
	const picked_legend = Legends[Math.floor(Math.random() * Legends.length)];
	if (picked_legend == document.getElementById('legends_name').innerText) PickLegend();
	else {
		document.getElementById('legends_name').innerText = picked_legend;
		document.getElementById('legends_pic_img').src = "img/" + picked_legend + ".png";
		document.getElementById('ability_1').src = "img/" + picked_legend + "1.png";
		document.getElementById('ability_2').src = "img/" + picked_legend + "2.png";
		document.getElementById('ability_3').src = "img/" + picked_legend + "3.png";
		switch (picked_legend) {
			case 'Bangalore':
				document.getElementById('ability_1_name').innerText = 'Smoke Launcher';
				document.getElementById('ability_2_name').innerText = 'Double Time';
				document.getElementById('ability_3_name').innerText = 'Rolling Thunder';
				document.getElementById('legends_desc').innerText = 'Professional Soldier';
				break;
			case 'Bloodhound':
				document.getElementById('ability_1_name').innerText = 'Eye of the Allfather';
				document.getElementById('ability_2_name').innerText = 'Tracker';
				document.getElementById('ability_3_name').innerText = 'Beast of the Hunt';
				document.getElementById('legends_desc').innerText = 'Technological Tracker';
				break;
			case 'Caustic':
				document.getElementById('ability_1_name').innerText = 'Nox Gas Trap';
				document.getElementById('ability_2_name').innerText = 'Nox Vision';
				document.getElementById('ability_3_name').innerText = 'Nox Gas Grenade';
				document.getElementById('legends_desc').innerText = 'Toxic Trapper';
				break;
			case 'Crypto':
				document.getElementById('ability_1_name').innerText = 'Surveillance Drone';
				document.getElementById('ability_2_name').innerText = 'Neurolink';
				document.getElementById('ability_3_name').innerText = 'Drone EMP';
				document.getElementById('legends_desc').innerText = 'Surveillance Expert';
				break;
			case 'Gibraltar':
				document.getElementById('ability_1_name').innerText = 'Dome of Protection';
				document.getElementById('ability_2_name').innerText = 'Gun Shield';
				document.getElementById('ability_3_name').innerText = 'Defensive Bombardment';
				document.getElementById('legends_desc').innerText = 'Shielded Fortress';
				break;
			case 'Loba':
				document.getElementById('ability_1_name').innerText = 'Burglar\'s Best Friend';
				document.getElementById('ability_2_name').innerText = 'Eye for Quality';
				document.getElementById('ability_3_name').innerText = 'Black Market Boutique';
				document.getElementById('legends_desc').innerText = 'Translocating Thief';
				break;
			case 'Lifeline':
				document.getElementById('ability_1_name').innerText = 'D.O.C. Heal Drone';
				document.getElementById('ability_2_name').innerText = 'Combat Medic';
				document.getElementById('ability_3_name').innerText = 'Care Package';
				document.getElementById('legends_desc').innerText = 'Combat Medic';
				break;
			case 'Mirage':
				document.getElementById('ability_1_name').innerText = 'Psyche Out';
				document.getElementById('ability_2_name').innerText = 'Now You See Me...';
				document.getElementById('ability_3_name').innerText = 'Life of the Party';
				document.getElementById('legends_desc').innerText = 'Holographic Trickster';
				break;
			case 'Octane':
				document.getElementById('ability_1_name').innerText = 'Swift Mend';
				document.getElementById('ability_2_name').innerText = 'Adrenaline Junkie';
				document.getElementById('ability_3_name').innerText = 'Launch Pad';
				document.getElementById('legends_desc').innerText = 'High-Speed Daredevil';
				break;
			case 'Pathfinder':
				document.getElementById('ability_1_name').innerText = 'Grappling Hook';
				document.getElementById('ability_2_name').innerText = 'Insider Knowledge';
				document.getElementById('ability_3_name').innerText = 'Zipline Gun';
				document.getElementById('legends_desc').innerText = 'Forward Scout';
				break;
			case 'Revenant':
				document.getElementById('ability_1_name').innerText = 'Silence';
				document.getElementById('ability_2_name').innerText = 'Stalker';
				document.getElementById('ability_3_name').innerText = 'Death Totem';
				document.getElementById('legends_desc').innerText = 'Synthetic Nightmare';
				break;
			case 'Wattson':
				document.getElementById('ability_1_name').innerText = 'Perimeter Security';
				document.getElementById('ability_2_name').innerText = 'Spark of Genius';
				document.getElementById('ability_3_name').innerText = 'Interception Pylon';
				document.getElementById('legends_desc').innerText = 'Static Defender';
				break;
			case 'Wraith':
				document.getElementById('ability_1_name').innerText = 'Into the Void';
				document.getElementById('ability_2_name').innerText = 'Voices from the Void';
				document.getElementById('ability_3_name').innerText = 'Dimensional Rift';
				document.getElementById('legends_desc').innerText = 'Interdimensional Skirmisher';
				break;
			default:
				document.getElementById('ability_1_name').innerText = 'Perimeter Security';
				document.getElementById('ability_2_name').innerText = 'Spark of Genius';
				document.getElementById('ability_3_name').innerText = 'Interception Pylon';
				document.getElementById('legends_desc').innerText = 'Static Defender';
		}

	}
}