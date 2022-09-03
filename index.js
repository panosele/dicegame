

let wins1 = 0;
let wins2 = 0;
let draws = 0;

function getRandomImage() {
    if(wins1 ===0 && wins2===0 && draws===0){
        document.querySelector(".hidden").classList.add("scoreboard");
        document.querySelector(".hidden").classList.remove("hidden");
    }

    let randomNumber1 = Math.floor((Math.random() * 6) + 1);
    console.log(randomNumber1);

    let image1 = "images/dice" + randomNumber1 + ".png";
    console.log(image1);

    document.querySelector(".img1").setAttribute("src", image1);

    let randomNumber2 = Math.floor((Math.random() * 6) + 1);
    console.log(randomNumber1);

    let image2 = "images/dice" + randomNumber2 + ".png";
    console.log(image2);

    document.querySelector(".img2").setAttribute("src", image2);

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins!"
        wins1++;
        document.querySelector(".player1Score").textContent = "Player 1 : " + wins1;
        document.querySelector(".player2Score").textContent = "Player 2 : " + wins2;
        document.querySelector(".draws").textContent = "Draws    : " + draws;
    }else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins!"
        wins2++;
        document.querySelector(".player1Score").textContent = "Player 1 : " + wins1;
        document.querySelector(".player2Score").textContent = "Player 2 : " + wins2;
        document.querySelector(".draws").textContent = "Draws    : " + draws;
    }else{
        document.querySelector("h1").textContent = "Draw!"
        draws++;
        document.querySelector(".player1Score").textContent = "Player 1 : " + wins1;
        document.querySelector(".player2Score").textContent = "Player 2 : " + wins2;
        document.querySelector(".draws").textContent = "Draws    : " + draws;
    }
}




