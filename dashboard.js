let globalCards = [];
// globalCards = JSON.parse(localStorage.getItem("list-items"));
console.log(globalCards)
let currentCards = globalCards;

class Dashboard {
    constructor(dashboard_type, dashboard_group, dashboard_name, dashboard_description, dashboard_id, dashboard_role, isFav) {
        this.dashboard_type = dashboard_type;
        this.dashboard_group = dashboard_group;
        this.dashboard_name = dashboard_name;
        this.dashboard_description = dashboard_description;
        this.dashboard_id = dashboard_id;
        this.dashboard_role = dashboard_role;
        this.isFav = false;
    }
}

let saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", createCard)

function createCard() {
    const group = document.getElementById("dashboard-group").value;

    const name = document.getElementById("dashboard-name").value;

    const dashId = document.getElementById("dashboard-id").value;
    
    const role = document.getElementById("role-id").value;

    // new Dashboard("", group, name, "Test Description", dashId, role)
    globalCards.push(new Dashboard("", group, name, "Test Description", dashId, role))
    currentCards = globalCards;
    // localStorage.setItem("list-items", JSON.stringify(globalCards))

    document.querySelector(".modal-bg").style.display = "none";
    renderFunc()
}
const cardContainer = document.getElementById("cards-cont");

function renderFunc() {
    cardContainer.innerHTML = "";
    for(let i = 0; i < currentCards.length; i++) {
        cardContainer.innerHTML += `
        <div class="card-item">
                <i class="fa fa-star"></i>
                <div class="card-head">
                <div class="card-name">${currentCards[i].dashboard_name}</div>
                <div class="card-group">${currentCards[i].dashboard_group}</div>
                </div>
                <i class="fa fa-ellipsis"></i>
        </div>`;
    }
}
renderFunc()

document.getElementById("filter-search").addEventListener("change", (e) => {
    currentCards = globalCards.filter(card => {
        return card.dashboard_name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    renderFunc()
})

document.getElementById("test-demo-btn").addEventListener("click", (e) => {
    currentCards = globalCards.filter(card => {
        return card.dashboard_group === "Test Demo";
    })
    document.getElementById("group-header").innerHTML = "Test Demo";
    renderFunc()
})

document.getElementById("page-builder-demo-btn").addEventListener("click", (e) => {
    currentCards = globalCards.filter(card => {
        return card.dashboard_group === "Page Builder Demo";
    })
    document.getElementById("group-header").innerHTML = "Test Demo";
    renderFunc()
})

document.getElementById("metabase-btn").addEventListener("click", (e) => {
    currentCards = globalCards.filter(card => {
        return card.dashboard_group === "Metabase";
    })
    document.getElementById("group-header").innerHTML = "Test Demo";
    renderFunc()
})

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
    document.querySelector(".modal-bg").style.display = "block";
})

let close = document.querySelector(".close");
close.addEventListener("click", () => {
    document.querySelector(".modal-bg").style.display = "none";
})

let cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", () => {
    document.querySelector(".modal-bg").style.display = "none";
})