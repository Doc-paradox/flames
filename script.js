// const form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     if (validateInputs()) {
//         flamesGame();
//     } else {
//         alert("Please fill in both input fields.");
//     }
// });

function startLoading() {
    // Open the loading.html file in a new window
    window.open("loading.html", "_self");

    // Wait for 3 seconds
    setTimeout(function() {
        // Submit the form
        document.getElementById("flames-form").submit();
    }, 3000);
}

function validateInputs() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    return name1 !== '' && name2 !== '';
}

function flamesGame() {
    const name1 = document.getElementById("name1").value.toUpperCase().replace(/\s+/g, '');
    const name2 = document.getElementById("name2").value.toUpperCase().replace(/\s+/g, '');

    if (name1 === name2) {
        document.getElementById("result").textContent = "The names are the same!";
        return;
    }

    const name1Letters = name1.split("");
    const name2Letters = name2.split("");

    for (let i = 0; i < name1Letters.length; i++) {
        const index = name2Letters.indexOf(name1Letters[i]);
        if (index > -1) {
            name2Letters.splice(index, 1);
            name1Letters.splice(i, 1);
            i--;
        }
    }

    const remainingLetters = name1Letters.length + name2Letters.length;
    const relationships = {
        0: "Enemies",
        1: "Friends",
        2: "Lovers",
        3: "Affection",
        4: "Marriage",
        5: "Soulmates",
        6: "Together"
    };
    const result = relationships[remainingLetters];

    document.getElementById('result').textContent = result;
    const resultImage = document.getElementById(`${result.toLowerCase()}-image`);
    resultImage.style.display = 'block';
}
