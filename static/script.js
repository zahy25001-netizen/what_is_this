function showMessage() {

    const message =
        document.getElementById("message");

    message.classList.remove("hidden");

    message.innerHTML = `

        <h2>
            Aheng... ❤️
        </h2>

        <p>
            Sebenarnya aku sudah lama
            ingin mengatakan ini.
        </p>

        <p>
            Aku suka sama kamu. ❤️
        </p>

        <p>
            Dan karena hari ini aku akhirnya
            berani menyampaikan semuanya...
        </p>

        <div class="gift-message">

            <h2>
                Cieee, yang dapet hadiahh 🤭🎁
            </h2>

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
