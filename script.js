let transactions = [

    {
        date: "2026-01-01",
        category: "Salary",
        amount: 50000,
        type: "income"
    },

    {
        date: "2026-01-05",
        category: "Food",
        amount: 2000,
        type: "expense"
    },

    {
        date: "2026-01-10",
        category: "Rent",
        amount: 10000,
        type: "expense"
    },

    {
        date: "2026-02-01",
        category: "Freelance",
        amount: 15000,
        type: "income"
    },

    {
        date: "2026-02-03",
        category: "Shopping",
        amount: 3000,
        type: "expense"
    }

];

const table =
document.getElementById(
    "transactionTable"
);

function renderTable() {

    table.innerHTML = "";

    let search =
    document
    .getElementById(
        "searchInput"
    )
    .value
    .toLowerCase();

    let filter =
    document
    .getElementById(
        "typeFilter"
    )
    .value;

    let filtered =
    transactions.filter(t =>

        (
            filter === "all"
            ||
            t.type === filter
        )

        &&

        t.category
        .toLowerCase()
        .includes(search)

    );

    if (filtered.length === 0) {

        table.innerHTML =
        "<tr><td colspan='4'>No data available</td></tr>";

        return;
    }

    filtered.forEach(t => {

        let row = `

        <tr>

        <td>${t.date}</td>

        <td>${t.category}</td>

        <td>₹${t.amount}</td>

        <td>${t.type}</td>

        </tr>

        `;

        table.innerHTML += row;

    });

}

function calculateSummary() {

    let income = 0;
    let expense = 0;

    transactions.forEach(t => {

        if (t.type === "income")

            income += t.amount;

        else

            expense += t.amount;

    });

    document
    .getElementById("income")
    .innerText = "₹" + income;

    document
    .getElementById("expenses")
    .innerText = "₹" + expense;

    document
    .getElementById("balance")
    .innerText =
    "₹" + (income - expense);

}

function renderCharts() {

    const ctx1 =
    document.getElementById(
        "trendChart"
    );

    const ctx2 =
    document.getElementById(
        "categoryChart"
    );

    new Chart(ctx1, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb"
            ],

            datasets: [

                {
                    label:
                    "Balance Trend",

                    data: [
                        38000,
                        50000
                    ]

                }

            ]

        }

    });

    let categoryTotals = {};

    transactions.forEach(t => {

        if (t.type === "expense") {

            categoryTotals[
                t.category
            ] =

            (
                categoryTotals[
                    t.category
                ] || 0
            )

            + t.amount;

        }

    });

    new Chart(ctx2, {

        type: "pie",

        data: {

            labels:
            Object.keys(
                categoryTotals
            ),

            datasets: [

                {
                    data:
                    Object.values(
                        categoryTotals
                    )
                }

            ]

        }

    });

}

function generateInsights() {

    let categoryTotals = {};

    transactions.forEach(t => {

        if (t.type === "expense") {

            categoryTotals[
                t.category
            ] =

            (
                categoryTotals[
                    t.category
                ] || 0
            )

            + t.amount;

        }

    });

    let highest =
    Object.entries(
        categoryTotals
    )

    .sort(
        (a, b) =>
        b[1] - a[1]
    )[0];

    document
    .getElementById(
        "highestCategory"
    )
    .innerText =

    "Highest spending category: "

    +

    (
        highest
        ? highest[0]
        : "N/A"
    );

    document
    .getElementById(
        "monthlyComparison"
    )
    .innerText =

    "February spending increased compared to January.";

}

function addTransaction() {

    let role =
    document
    .getElementById(
        "roleSelect"
    )
    .value;

    if (role !== "admin") {

        alert(
            "Only admin can add transactions"
        );

        return;
    }

    let category =
    prompt("Enter category");

    let amount =
    parseInt(
        prompt(
            "Enter amount"
        )
    );

    let type =
    prompt(
        "income or expense"
    );

    if (!category || !amount || !type)

        return;

    let today =
    new Date()
    .toISOString()
    .split("T")[0];

    transactions.push({

        date: today,

        category: category,

        amount: amount,

        type: type

    });

    renderTable();
    calculateSummary();

}

document
.getElementById("searchInput")
.addEventListener(
    "input",
    renderTable
);

document
.getElementById("typeFilter")
.addEventListener(
    "change",
    renderTable
);

document
.getElementById("addBtn")
.addEventListener(
    "click",
    addTransaction
);

renderTable();
calculateSummary();
renderCharts();
generateInsights();