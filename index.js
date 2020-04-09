let money = +prompt("Ваш бюджет на месяц? ", "");
let time = +prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  expenses: {},
  income: [],
  timeData: time,
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", "");
  b = prompt("Во сколько обойдется?", "");
  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != ""
  ) {
    appData.expenses[a] = b;
  } else {
  }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный достаток");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний достаток");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий достаток");
} else {
  console.log("Не корректные данные!");
}

console.log(appData);
