$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let yourAP = 100;
let arcaneCost = 12;
let arcaneHpDmg = 14;
let entangelCost = 23;
let entangleHpDmg = 9;
let dragonbladeCost = 38;
let dragonbladeHpDmg = 47;
let starfireCost = 33;
let starfireHpDmg = 25;

function onReady() {

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    // creating the handler for the first attack
    $('.attack-btn.arcane-sceptre').on('click', attackArcane);

    // here is a handler for the entagle attack
    $('.attack-btn.entangle').on('click', attackEntangle);

    // header for the dragon blade attack
    $('.attack-btn.dragon-blade').on('click', attackDragonBlade);

    // here is the header for the starfire abillity
    $('.attack-btn.star-fire').on('click', attackStarFire);

}



function attackArcane() {
    // this log will not show because there is an error with jquery.
    //console.log('check to see if this attack logs')
    fungusHP = fungusHP - arcaneHpDmg;
    yourAP = yourAP - arcaneCost;
    // log to test current fungus hp and current AP
    console.log(fungusHP)
    console.log(yourAP)
    // to select the fungusHP bar and have it record the change.
    hpAndAp();
    zeroHP();
    zeroAP();
}

function attackEntangle() {
    //this is the math to take the entagle attack and lower
    // your total ap and fungus hp.
    fungusHP = fungusHP - entangleHpDmg;
    yourAP = yourAP - entangelCost;
    // console log to test the funtion is working.
    console.log(fungusHP);
    console.log(yourAP);
    // to select the fungus hp bar and your total ap
    hpAndAp();
    zeroHP();
    zeroAP();
}

function attackDragonBlade() {
    // here is the math to update the hp after the dragon blade attack
    fungusHP = fungusHP - dragonbladeHpDmg;
    yourAP = yourAP - dragonbladeCost;
    // here is a console log to log the amounts for the dragon blade
    console.log(yourAP);
    console.log(fungusHP);
    // here is the selector to select the hp and ap meters
    hpAndAp();
    zeroHP();
    zeroAP();
};

function attackStarFire() {
    // here is the math to update the hp after the dragon blade attack
    fungusHP = fungusHP - starfireHpDmg;
    yourAP = yourAP - starfireCost;
    // here is a console log to log the amounts for the dragon blade
    console.log(yourAP);
    console.log(fungusHP);
    // here is the selector to select the hp and ap meters
    hpAndAp();
    zeroHP();
    zeroAP();
};

function zeroHP() {
    if (fungusHP === 0) {
        $('.freaky-fungus').removeClass("walk")
        $('.freaky-fungus').addClass("dead")
    }
};

function zeroAP() {
    if (yourAP === 0) {
        $('.freaky-fungus').removeClass("walk")
        $('.freaky-fungus').addClass("jump")
        $('.attack-btn').attr('disabled',true)
        
    }
}

function hpAndAp() {
    $('#ap-meter').val(yourAP);
    if (yourAP < 0) {
        yourAP = 0
    };
    $('.ap-text').html(`${yourAP} AP`);
    $('#hp-meter').val(fungusHP);
    if(fungusHP < 0) {
        fungusHP = 0;
    };
    $('.hp-text').html(`${fungusHP} HP`);
}

// a funciton to regenerate fungus health if hp goes blow 50
function regenereateHP() {
   setInterval( , 1000, )
}

regenFungus() {
    if (fungusHP < 50) {
        regenhealth = true
    }
}
