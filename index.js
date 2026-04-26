const units = {
    length: ["meter", "kilometer"],
    weight: ["gram", "kilogram"],
    temperature: ["celsius", "fahrenheit"]
};

function updateUnits() {
    let type = document.getElementById("type").value;
    let from = document.getElementById("fromUnit");
    let to = document.getElementById("toUnit");

    from.innerHTML = "";
    to.innerHTML = "";

    units[type].forEach(unit => {
        let opt1 = document.createElement("option");
        opt1.value = unit;
        opt1.text = unit;

        let opt2 = document.createElement("option");
        opt2.value = unit;
        opt2.text = unit;

        from.appendChild(opt1);
        to.appendChild(opt2);
    });
}

function convert() {
    let value = document.getElementById("inputValue").value;

    if (value === "") {
        alert("Enter value!");
        return;
    }

    value = Number(value);

    let type = document.getElementById("type").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    let result;

    if (type === "length") {
        if (from === "meter" && to === "kilometer") {
            result = value / 1000;
        } else if (from === "kilometer" && to === "meter") {
            result = value * 1000;
        } else {
            result = value;
        }
    }

    else if (type === "weight") {
        if (from === "gram" && to === "kilogram") {
            result = value / 1000;
        } else if (from === "kilogram" && to === "gram") {
            result = value * 1000;
        } else {
            result = value;
        }
    }

    else if (type === "temperature") {
        if (from === "celsius" && to === "fahrenheit") {
            result = (value * 9/5) + 32;
        } else if (from === "fahrenheit" && to === "celsius") {
            result = (value - 32) * 5/9;
        } else {
            result = value;
        }
    }

    document.getElementById("result").innerText = "Result: " + result;
}

window.onload = updateUnits;
