function showMessage() {

    const message =
        document.getElementById("message");

    message.classList.remove("hidden");

    message.innerHTML = `

        <h2>
            Aheng... 
        </h2>

        <p>
            Aishiteru... seperti makna dari bunga camelia merah.
        </p>

        <div class="gift-message">

            <p>
                Ini memang cuma hadiah kecil,
                tapi aku kasih dengan perasaan
                yang nggak kecil.
            </p>

            <p>
                Semoga hadiah ini bisa bikin
                kamu sedikit lebih bahagia,
                sama seperti kamu yang sering
                bikin hari seseorang jadi lebih indah.
            </p>

        </div>

        <h2>
            Jadi...
        </h2>

        <p>
            Mau nggak jadi orang spesial
            buat aku?
        </p>

        <div class="buttons">

            <button class="yes"
                    onclick="yesAnswer()">
                MAU ❤️
            </button>

            <button class="no"
                    onclick="noAnswer()">
                NGGAK 😭
            </button>

        </div>

    `;
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
