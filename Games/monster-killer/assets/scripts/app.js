const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;

let maxHealth = 100;
let currentMonsterHealth = maxHealth;
let currentPlayerHealth = maxHealth;

adjustHealthBars(maxHealth);

function attackHandler() {
    currentMonsterHealth -= dealMonsterDamage(ATTACK_VALUE);
    currentPlayerHealth -= dealPlayerDamage(MONSTER_ATTACK_VALUE);
    
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) alert('you won');
    if(currentPlayerHealth <= 0  && currentMonsterHealth > 0) alert('Monster won');
}

attackBtn.addEventListener('click', attackHandler)