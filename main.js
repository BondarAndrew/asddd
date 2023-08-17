const bankAccount = {
    ownerName: "John Doe",
    accountNumber: "123456789",
    balance: 1000, 


    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Успішно поповнено рахунок. Залишок: ${this.balance}`);
        } else {
            console.log("Сума поповнення повинна бути більше 0.");
        }
    },


    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Успішно знято кошти. Залишок: ${this.balance}`);
        } else {
            console.log("Недостатньо коштів на рахунку або некоректна сума для зняття.");
        }
    }
};


bankAccount.deposit(500); 
bankAccount.withdraw(200); 

//ex2

const temperatureInput = document.getElementById("temperature");
const checkButton = document.getElementById("checkButton");


const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,


    isBelowZero: function() {
        return this.temperature < 0;
    }
};


checkButton.addEventListener("click", function() {
    weather.temperature = parseFloat(temperatureInput.value);

    if (weather.isBelowZero()) {
        console.log("Температура нижче 0 градусів Цельсія");
    } else {
        console.log("Температура вище або рівна 0 градусів Цельсія");
    }
});

//ex3


const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");


const user = {
    name: "",
    email: "",
    password: "",


    login: function() {
        const enteredEmail = emailInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredEmail === this.email && enteredPassword === this.password) {
            console.log("Ви успішно увійшли!");
        } else {
            console.log("Помилка входу. Перевірте email та пароль.");
        }
    }
};


loginButton.addEventListener("click", function() {
    user.name = nameInput.value;
    user.email = emailInput.value;
    user.password = passwordInput.value;

    user.login();
});

//ex4

const titleValue = document.getElementById("titleValue");
const directorValue = document.getElementById("directorValue");
const yearValue = document.getElementById("yearValue");
const ratingValue = document.getElementById("ratingValue");
const titleElement = document.getElementById("title");

// Створюємо об'єкт "movie"
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,

    hasHighRating: function() {
        return this.rating > 8;
    }
};


titleValue.textContent = movie.title;
directorValue.textContent = movie.director;
yearValue.textContent = movie.year;
ratingValue.textContent = movie.rating;


if (movie.hasHighRating()) {
    titleElement.classList.add("green-text");
}