```

const form = document.querySelector("form")
console.log(form)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please enter valid details ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please enter valid details ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 1000)).toFixed(2);
        result.innerHTML = ` ${bmi}`
        if (bmi < 18.6) {
            uw.innerHTML = "under weigth";
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            uw.innerHTML = "normal weigth";

        }
        else  {
            uw.innerHTML = "over weigth";
        }
    }

})


```