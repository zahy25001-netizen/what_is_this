function showMessage() {

    const message =
        document.getElementById("message");

    message.classList.remove("hidden");

}


function yesAnswer() {

    document.querySelector(".container").innerHTML = `

        <div class="heart">
            💖
        </div>

        <h1>
            YAY!!! ❤️
        </h1>

        <h2>
            Aheng bilang MAU!
        </h2>

        <p>
            Mulai hari ini,
            semoga kita punya banyak
            cerita indah bersama.
        </p>

        <p>
            Thank you for choosing me, Aheng. 🤍
        </p>

    `;
}


function noAnswer() {

    alert(
        "Eits... coba pikir-pikir lagi 😭❤️"
    );

}