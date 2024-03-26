let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById('host-name').textContent = 'Ivan Lam'; 
document.getElementById('collaborator-name').textContent = 'Andrew Shao'; 
document.getElementById('collaborator-2-name').textContent = 'Ivan Lam';




// Question 2
// You can also create their own CSS classes in style.css file and use that. 




// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.getElementById('first_name').addEventListener('input', (event) => {
    if (event.target.value === 'John') {
      document.getElementById('last_name').value = 'Doe';
    }
  });
  


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.

document.getElementById('user_name').addEventListener('input', (event) => {
  const usernameAlert = document.getElementById('username-alert');
  if (pokemonList.includes(event.target.value)) {
    usernameAlert.textContent = 'Username already exists';
  } else {
    usernameAlert.textContent = 'Unique username created';
  }
});



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const passwordAlert = document.getElementById('password-alert');
const hidePasswordButton = document.getElementById('hide-password');

function checkPasswords() {
    if (passwordInput.value === confirmPasswordInput.value) {
        passwordAlert.textContent = "Password Matches";
    } else {
        passwordAlert.textContent = "Password does not match";
    }
}

passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);

//Question 6
document.getElementById('radio-reset-button').addEventListener('click', () => {
    document.querySelectorAll('input[name="favorite_day"]').forEach((radio) => {
      radio.checked = false;
    });
  });
  




//Question 7 





//Question 8
function changeBackgroundColor(event) {
    const color = event.target.value;
    document.body.style.backgroundColor = color;
}

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', changeBackgroundColor);


//Question 9 

