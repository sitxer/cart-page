let products = [
    {
        title: "NEW BALANCE ML850 SS20 YSA/D 10,5",
        price: {
            count: 10990,
            discount: 0,
        },
        count: 1,
        description: {
            size: "10,5",
            color: "YSA/D",
            article: 123068,
        },
        img: "./img/item-1.jpg",
    },
    {
        title: "BILLABONG ALL DAY FLANNEL LS S FW19 RAVEN XL",
        price: {
            count: 4790,
            discount: 40,
        },
        count: 1,
        description: {
            size: "XL",
            color: "RAVEN",
            article: 86580,
        },
        img: "./img/item-2.jpg",
    },
    {
        title: "DC WORKER STRAIGHT M NDPT A/S CABERNET 28",
        price: {
            count: 5250,
            discount: 30,
        },
        count: 1,
        description: {
            size: "28",
            color: "CABERNET",
            article: 90657,
        },
        img: "./img/item-3.jpg",
    },
];

const removeProduct = (id) => {
    products.splice(products.map((e) => e.description.article).indexOf(id), 1);
    const list = document.getElementsByClassName("cart__items-list")[0];
    const item = document.getElementById(id);
    list.removeChild(item);
    !products.length && renderEmptyCart();
    setTotalPrice();
};

const setTotalPrice = () => {
    const price = products.reduce((a, b) => a + b.price.count * b.count, 0);
    const discount = products.reduce(
        (a, b) => a + ((b.price.count * b.count) / 100) * b.price.discount,
        0
    );
    const total = price - discount;
    const totalWrap = document.getElementsByClassName("cart__total")[0];

    totalWrap.innerHTML = `
        <div class="cart__total-row">
            <span>Стоимость товаров:</span>
            <span>${price} руб.</span>
        </div>
        <div class="cart__total-row">
            <span>Скидка:</span>
            <span>${discount} руб.</span>
        </div>
        <div class="cart__total-row">
            <span>Итого:</span>
            <span><b>${total}</b> руб.</span>
        </div>
      `;
};

const renderEmptyCart = () => {
    const productWrap = document.getElementsByClassName("cart__items-wrap")[0];
    productWrap.innerHTML = `
        <div class="cart__empty">
            <img
                class="cart__empty-img"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMiA1MTIuMDAyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAyIDUxMi4wMDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik00NzEuNjYyLDI4OC44OThjLTEuNzk5LTUuODI3LTUuNzYyLTEwLjYwNC0xMS4xNTctMTMuNDUzYy01LjM5My0yLjg0OC0xMS41NzEtMy40MjUtMTcuMzkxLTEuNjI1DQoJCQkJYy0zNS44OTIsMTEuMDgzLTQ0LjE3OCwzNy43MjYtNDkuNjYsNTUuMzU4Yy00LjUyNSwxNC41NDktNi4yOTksMTguMjA2LTEzLjMzNiwyMC43MTljLTAuOTg5LDAuMzUzLTEuOTY5LDAuNjk2LTIuOTQzLDEuMDMyDQoJCQkJYy0yLjg0Ny05LjU0Mi01LjQ3OS0xOS4zMTItNy42MjEtMjguMDgzYy0wLjUzOS03LjU4OC0xLjg5Mi0xNS4wNjktNC4wNDUtMjIuMzcxYzguNDg3LTMuNDU2LDE2LjQxNS03LjM0OCwyMy43Mi0xMS42NzYNCgkJCQljMzkuMzA3LTIzLjI4OSw2MC4wODMtNTguODMxLDYwLjA4My0xMDIuNzg0YzAtMTkuNTMtMy45ODMtMzguNTMyLTExLjYyMi01Ni4zNzFjMjEuMTkzLTMxLjYyMywyNy4wMzItNzAuNDg4LDE1Ljk2MS0xMDcuMzUNCgkJCQljLTMuNDgtMTEuNTg0LTEzLjQ5LTE5Ljk4Mi0yNS41MDEtMjEuMzk4Yy0zNi43NDEtNC4zMy03Mi45MDEsNy4xNzUtOTkuOTk3LDMxLjYyMWMtMjQuNjEzLTguODA2LTUxLjM0Ny0xMy40NDItNzguOTI1LTEzLjQ0Mg0KCQkJCXMtNTQuMzEyLDQuNjM1LTc4LjkyNSwxMy40NDFDMTQzLjIwNyw4LjA2OSwxMDcuMDQ3LTMuNDMzLDcwLjMwNSwwLjg5N2MtMTIuMDEzLDEuNDE1LTIyLjAyMyw5LjgxNS0yNS41LDIxLjM5OA0KCQkJCWMtMTEuMDczLDM2Ljg2MS01LjIzNCw3NS43MjYsMTUuOTYsMTA3LjM1Yy03LjYzOSwxNy44MzktMTEuNjIyLDM2Ljg0MS0xMS42MjIsNTYuMzcxYzAsNTIuODU2LDI5LjM2OCw5Mi40NDMsODMuNzg3LDExNC41MTgNCgkJCQljLTIuMTQzLDcuMjg0LTMuNDksMTQuNzQ2LTQuMDI4LDIyLjMxM2MtNS41MDksMjIuNTU4LTE0LjI2NCw1MS43NDEtMjEuNTQsNjYuNTYxYy0zLjc3MSw3LjY3OS00LjMyNSwxNi4zNjYtMS41NjIsMjQuNDYxDQoJCQkJYzIuNzY0LDguMDk2LDguNTE1LDE0LjYzMSwxNi4xOTMsMTguNDAyYzQuNDM4LDIuMTc5LDkuMTgxLDMuMjg0LDE0LjA5OCwzLjI4NGMxMi4zMTYsMCwyMy4zMzgtNi44NjUsMjguNzY1LTE3LjkxNg0KCQkJCWMwLjc0Mi0xLjUxMiwxLjQ5Ny0zLjEyNywyLjI2MS00LjgzMWMyLjYzMSwyLjI4Nyw1LjM3LDQuNDY3LDguMjEyLDYuNTNjMC4wMzgsMTEuNzc0LTAuMDMxLDI1LjAxOS0wLjA5MiwzNi44NTdsLTAuMDA4LDEuNjE2DQoJCQkJYy0wLjA0MSw4LjA4Mi0wLjA4LDE1LjY5LTAuMDgsMjIuMTY0YzAsMTcuNjU5LDE0LjM2NywzMi4wMjUsMzIuMDI1LDMyLjAyNWMxNy42NTksMCwzMi4wMjUtMTQuMzY3LDMyLjAyNS0zMi4wMjUNCgkJCQljMC02LjgwOSwwLjA0Mi0xNC44ODYsMC4wODgtMjMuNDQ3bDAuMDAxLTAuMjk2YzAuMDIzLTQuNDQ2LDAuMDQ2LTkuMDEzLDAuMDY1LTEzLjU5OWMzLjI1OSwwLjI0OCw2LjU1MiwwLjM4LDkuODc4LDAuMzgNCgkJCQlzNi42MTktMC4xMzIsOS44NzgtMC4zOGMwLjAxOSw0LjU4NiwwLjA0Miw5LjE1MywwLjA2NSwxMy41OTlsMC4wMDEsMC4yOTdjMC4wNDYsOC41NiwwLjA4OCwxNi42MzgsMC4wODgsMjMuNDQ2DQoJCQkJYzAsMTcuNjU5LDE0LjM2NywzMi4wMjUsMzIuMDI1LDMyLjAyNWMxMy43OSwwLDI1Ljk5NS04Ljc4MSwzMC4zNzItMjEuODVjMS4zMTUtMy45MjgtMC44MDItOC4xNzgtNC43MjktOS40OTQNCgkJCQljLTMuOTI3LTEuMzE2LTguMTgsMC44MDItOS40OTMsNC43M2MtMi4zMjcsNi45NDctOC44MTcsMTEuNjE1LTE2LjE1LDExLjYxNWMtOS4zODksMC0xNy4wMjYtNy42MzgtMTcuMDI2LTE3LjAyNg0KCQkJCWMwLTYuODMyLTAuMDQyLTE0LjkzNy0wLjA4OC0yMy41MjRsLTAuMDAyLTAuMjk2Yy0wLjAyNi01LjA3OC0wLjA1Mi0xMC4zMTMtMC4wNzItMTUuNTU1DQoJCQkJYzEyLjEwNS0yLjM3OCwyMy41NDMtNi40NTgsMzQuMDIyLTExLjk1NWMwLjAwNiw3Ljk3MywwLjA0NSwxNi4yNjYsMC4wODYsMjQuMjg4YzAuMDIxLDQuMTI5LDMuMzc1LDcuNDYxLDcuNDk5LDcuNDYxaDAuMDQNCgkJCQljNC4xNDItMC4wMjEsNy40ODItMy4zOTYsNy40NjEtNy41MzljLTAuMDU3LTExLjE5NS0wLjExLTIyLjkxNS0wLjA3NS0zMy41MmMyLjg0Mi0yLjA2Myw1LjU4MS00LjI0NCw4LjIxMi02LjUzMQ0KCQkJCWMwLjc2NCwxLjcwNiwxLjUxOSwzLjMyMiwyLjI2LDQuODMyYzUuNDI3LDExLjA1MSwxNi40NDksMTcuOTE2LDI4Ljc2NSwxNy45MTZjNC45MTcsMCw5LjY2LTEuMTA1LDE0LjA5OC0zLjI4NA0KCQkJCWM3LjY3OS0zLjc3MSwxMy40My0xMC4zMDYsMTYuMTkzLTE4LjQwMWMyLjI0Ni02LjU4MSwyLjMtMTMuNTUyLDAuMjE3LTIwLjA1NWMwLjg1NC0wLjI5OCwxLjcyLTAuNjAzLDIuNjA0LTAuOTE5DQoJCQkJYzI5LjIyLTEwLjQzNiwzNi42NTQtMzQuMzM5LDQxLjU3NC01MC4xNTdjMy41MDQtMTEuMjcsNS42OTctMTcuMzg3LDExLjA5OS0yMS4zNDVjMC4wNzEtMC4wNDgsMC4xMzgtMC4xMDIsMC4yMDgtMC4xNTMNCgkJCQljMi4xNS0xLjUzLDQuODAxLTIuNzM1LDguMjI4LTMuNzk0YzUuODI2LTEuNzk5LDEwLjYwNC01Ljc1OSwxMy40NTEtMTEuMTUxQzQ3Mi44ODQsMzAwLjkwMyw0NzMuNDYyLDI5NC43MjQsNDcxLjY2MiwyODguODk4eg0KCQkJCSBNNDI5LjgxNSwxMTMuODg1Yy05Ljc3Ny0xNy4wMjEtMjMuMDg2LTMyLjY5NS0zOS42MjUtNDYuMzg3Yy0xLjE3Mi0wLjk3LTIuMzU2LTEuOTI3LTMuNTUxLTIuODcNCgkJCQljMTguNzM0LTE1LjEwNSwzOS4yNzQtMjIuNDUzLDU1LjUxMS0yNi4wMTRDNDQ1LjQwNSw1Ni40OTYsNDQ2LjI3LDg0Ljg3OCw0MjkuODE1LDExMy44ODV6IE00MjYuMzk2LDE1Ljc5Mw0KCQkJCWM1LjE2NywwLjYwOSw5LjU5MiwzLjc3OCwxMS44ODQsOC4zMTVjLTE4Ljc5Miw0LjIwMi00Mi42NzksMTMuMDI0LTY0LjE2NywzMS40MzNjLTkuNTEyLTYuMzU5LTE5LjYyLTExLjkzOC0zMC4yMTUtMTYuNjk0DQoJCQkJQzM2Ny4wMzUsMjAuNjIsMzk2LjQ5NiwxMi4yNjksNDI2LjM5NiwxNS43OTN6IE03Mi4wNjEsMTUuNzkzYzI5Ljg5OC0zLjUyNCw1OS4zNiw0LjgyOCw4Mi40OTksMjMuMDU0DQoJCQkJYy0xMC41OTUsNC43NTUtMjAuNzAzLDEwLjMzNS0zMC4yMTQsMTYuNjkzYy0yMS40ODktMTguNDEtNDUuMzc3LTI3LjIzLTY0LjE2Ny0zMS40MzMNCgkJCQlDNjIuNDY4LDE5LjU3MSw2Ni44OTQsMTYuNDAxLDcyLjA2MSwxNS43OTN6IE01Ni4zMDgsMzguNjE1YzE2LjIzNiwzLjU2LDM2Ljc3NCwxMC45MSw1NS41MSwyNi4wMTMNCgkJCQljLTEuMTk2LDAuOTQzLTIuMzgsMS45LTMuNTUxLDIuODdDOTEuNzI5LDgxLjE5LDc4LjQxOSw5Ni44NjQsNjguNjQyLDExMy44ODVDNTIuMTg3LDg0Ljg3OCw1My4wNTMsNTYuNDk2LDU2LjMwOCwzOC42MTV6DQoJCQkJIE0xNTEuMzksNDExLjAyN2MtMi44ODYsNS44NzYtOC43NDgsOS41MjctMTUuMzAxLDkuNTI3Yy0yLjYwNSwwLTUuMTI0LTAuNTg4LTcuNDg2LTEuNzQ4Yy00LjA4Mi0yLjAwNS03LjE0LTUuNDc5LTguNjA5LTkuNzgzDQoJCQkJYy0xLjQ2OS00LjMwNC0xLjE3NC04LjkyMiwwLjgzMS0xMy4wMDVjNC4yMzYtOC42MjcsOC42NjctMjAuOTMyLDEyLjY5NS0zMy43OTdjNC41NzksMTQuNDg2LDEyLjE5NywyNy43NjMsMjIuMTY2LDM5LjE4OQ0KCQkJCUMxNTQuMjExLDQwNC45OSwxNTIuNzcxLDQwOC4yMTUsMTUxLjM5LDQxMS4wMjd6IE0yMjQuMjg3LDQ1Ni4xNTRsLTAuMDAyLDAuMjk0Yy0wLjA0Niw4LjU5LTAuMDg4LDE2LjY5NS0wLjA4OCwyMy41MjYNCgkJCQljMCw5LjM4OC03LjYzOCwxNy4wMjYtMTcuMDI2LDE3LjAyNmMtOS4zODgsMC0xNy4wMjYtNy42MzgtMTcuMDI2LTE3LjAyNmMwLTYuNDU0LDAuMDM5LTE0LjAzNSwwLjA3OS0yMi4wODhsMC4wMDktMS42MTYNCgkJCQljMC4wNDYtOC44MTksMC4wOTUtMTguNDE1LDAuMTAyLTI3LjYyNWMxMC40NzksNS40OTcsMjEuOTE4LDkuNTc3LDM0LjAyMywxMS45NTUNCgkJCQlDMjI0LjM0LDQ0NS44NDEsMjI0LjMxMyw0NTEuMDc2LDIyNC4yODcsNDU2LjE1NHogTTI0OS4yMjksNDI4LjAxM2MtNTguMjQsMC0xMDUuNjItNDMuNzktMTA1LjYyLTk3LjYxNQ0KCQkJCWMwLTguMzk5LDEuMTYzLTE2LjY4MywzLjQzNi0yNC43MjJjOS45NjYsMy4yNTUsMjAuNjM5LDUuOTk4LDMyLjAxNCw4LjE5N2M0LjA3OSwwLjc4Niw4LjAwMS0xLjg3NCw4Ljc4Ny01Ljk0DQoJCQkJYzAuNzg3LTQuMDY3LTEuODczLTguMDAxLTUuOTM5LTguNzg4Yy0xMy4yNjItMi41NjQtMjUuNDgtNS44OTktMzYuNjQ4LTkuOTY2Yy0wLjExOC0wLjA1MS0wLjIzMi0wLjEwNy0wLjM1NC0wLjE1Mg0KCQkJCWMtMC4yMzMtMC4wODYtMC40NjctMC4xNTktMC43MDItMC4yMjFjLTE5LjE2My03LjEwMS0zNS4xNDgtMTYuNDEyLTQ3Ljc1Ni0yNy44NDhjLTIxLjQzNS0xOS40NDMtMzIuMzA0LTQ0LjY1OC0zMi4zMDQtNzQuOTQzDQoJCQkJYzAtODMuNzgsODMuMDI5LTE1MS45MzksMTg1LjA4Ni0xNTEuOTM5czE4NS4wODYsNjguMTU5LDE4NS4wODYsMTUxLjkzOWMwLDM4LjkwOS0xNy43NDEsNjkuMTQ5LTUyLjczLDg5Ljg4DQoJCQkJYy04LjQxOCw0Ljk4OC0xNy43NjEsOS4zNTYtMjcuOTIzLDEzLjA5OWMtMC4wMzYsMC4wMTMtMC4wNzIsMC4wMjEtMC4xMDgsMC4wMzRjLTAuMDI4LDAuMDEtMC4wNTMsMC4wMjQtMC4wODEsMC4wMzUNCgkJCQljLTI4Ljc4NCwxMC41NjctNjQuMTg4LDE2LjA3Ni0xMDQuMjQzLDE2LjA3NmMtMTEuMjM3LDAtMjIuMjg2LTAuNDQ0LTMyLjg0MS0xLjMyYy00LjEwNy0wLjM0OC03Ljc1MiwyLjcyNS04LjA5NSw2Ljg1NA0KCQkJCWMtMC4zNDIsNC4xMjgsMi43MjcsNy43NTIsNi44NTUsOC4wOTRjMTAuOTY1LDAuOTEsMjIuNDMxLDEuMzcyLDM0LjA4MSwxLjM3MmMzOC41MTcsMCw3My4xMDgtNC45NTgsMTAyLjE3NC0xNC40OTcNCgkJCQljMi4yOCw4LjA1LDMuNDQ2LDE2LjM0NywzLjQ0NiwyNC43NTdDMzU0Ljg0OSwzODQuMjIzLDMwNy40NjgsNDI4LjAxMywyNDkuMjI5LDQyOC4wMTN6IE0zNzguNDYyLDQwOS4wMjMNCgkJCQljLTEuNDcsNC4zMDQtNC41MjcsNy43NzgtOC42MDksOS43ODNjLTIuMzYyLDEuMTYtNC44ODIsMS43NDktNy40ODYsMS43NDljLTYuNTUzLDAtMTIuNDE1LTMuNjUxLTE1LjMwMS05LjUyNw0KCQkJCWMtMS4zNzgtMi44MDYtMi44MTgtNi4wMzItNC4yOTctOS42MTZjOS45Ny0xMS40MjYsMTcuNTg4LTI0LjcwMywyMi4xNjUtMzkuMTg5YzQuMDI4LDEyLjg2NCw4LjQ2LDI1LjE2OSwxMi42OTYsMzMuNzk3DQoJCQkJQzM3OS42MzYsNDAwLjEsMzc5LjkzMSw0MDQuNzE5LDM3OC40NjIsNDA5LjAyM3ogTTQyMi43MjgsMzM4LjI4NGMtNC41MTMsMTQuNTEtMTAuMTI5LDMyLjU2Ny0zMi4yOTUsNDAuNDg1DQoJCQkJYy0xLjE3OSwwLjQyMS0yLjMxOCwwLjgxOS0zLjQ0MiwxLjIwOGMtMS43NTctNC40NDMtMy41NDctOS40MzctNS4zMTItMTQuNzM1YzEuMTUzLTAuMzk2LDIuMzEzLTAuNzk5LDMuNDg1LTEuMjE4DQoJCQkJYzE0LjgwNy01LjI4OCwxOC4yNTItMTYuMzY2LDIyLjYxMy0zMC4zOTFjMy4yODUtMTAuNTYzLDcuMDk4LTIyLjc4OSwxNy4wMDYtMzIuNDg3YzEuNjI1LDQuNzk5LDQuMTY5LDkuODY3LDguMTMzLDE0LjMxOQ0KCQkJCUM0MjcuODM2LDMyMS44ODIsNDI1LjM3OCwzMjkuNzYyLDQyMi43MjgsMzM4LjI4NHogTTQ1Ni43NzMsMjk5LjI4OWMtMC45NzcsMS44NDktMi42MTUsMy4yMDctNC42MTMsMy44MjQNCgkJCQljLTIuNzgxLDAuODU5LTUuMjUxLDEuODUyLTcuNDcyLDIuOTU5Yy0zLjk3OS00LjE0OC01LjkzMy05LjU1My02Ljg3OC0xNC4wNzRjMi45MjItMS40NDYsNi4xNTEtMi43MzksOS43MzQtMy44NDYNCgkJCQljMS45OTMtMC42MTcsNC4xMDgtMC40MTgsNS45NTgsMC41NTljMS44NTIsMC45NzgsMy4yMTEsMi42MTYsMy44MjgsNC42MTRDNDU3Ljk0NywyOTUuMzIyLDQ1Ny43NDksMjk3LjQ0LDQ1Ni43NzMsMjk5LjI4OXoiLz4NCgkJCTxwYXRoIGQ9Ik0xNTEuNDQ1LDIyOC45ODNjLTEwLjg0MywyLjg3OS0zMS4yOTksMTMuMTU2LTM5LjI0MiwxOS4wMmMtMy4zMzMsMi40Ni00LjA0LDcuMTU2LTEuNTgsMTAuNDg4DQoJCQkJYzEuNDcxLDEuOTkyLDMuNzQsMy4wNDYsNi4wNCwzLjA0NmMxLjU0NywwLDMuMTA4LTAuNDc3LDQuNDQ4LTEuNDY3YzYuNTY2LTQuODQ3LDI1LjM1My0xNC4yNDYsMzQuMTg0LTE2LjU5DQoJCQkJYzQuMDAzLTEuMDYzLDYuMzg3LTUuMTcsNS4zMjQtOS4xNzRDMTU5LjU1NiwyMzAuMzA1LDE1NS40NTEsMjI3LjkyMywxNTEuNDQ1LDIyOC45ODN6Ii8+DQoJCQk8cGF0aCBkPSJNMTc1LjA0OCwxNjguNDQyYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41djEyLjMxNGMwLDQuMTQyLDMuMzU3LDcuNSw3LjUsNy41YzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjV2LTEyLjMxNA0KCQkJCUMxODIuNTQ3LDE3MS44LDE3OS4xOSwxNjguNDQyLDE3NS4wNDgsMTY4LjQ0MnoiLz4NCgkJCTxwYXRoIGQ9Ik0yMjQuNzQ0LDIwMy4zNjZjMy4xMjEsMi43Miw3Ljg1OSwyLjM5NSwxMC41ODEtMC43MjdjMy41MS00LjAyNyw4LjU3Ny02LjMzNywxMy45MDMtNi4zMzdzMTAuMzk0LDIuMzEsMTMuOTA0LDYuMzM4DQoJCQkJYzEuNDgzLDEuNzAyLDMuNTY1LDIuNTcyLDUuNjU3LDIuNTcyYzEuNzQ4LDAsMy41MDQtMC42MDcsNC45MjUtMS44NDZjMy4xMjItMi43MjIsMy40NDgtNy40NTksMC43MjctMTAuNTgyDQoJCQkJYy02LjM2LTcuMjk3LTE1LjU1LTExLjQ4Mi0yNS4yMTItMTEuNDgyYy05LjY2NCwwLTE4Ljg1NCw0LjE4Ni0yNS4yMTEsMTEuNDgzQzIyMS4yOTUsMTk1LjkwOCwyMjEuNjIxLDIwMC42NDQsMjI0Ljc0NCwyMDMuMzY2eg0KCQkJCSIvPg0KCQkJPHBhdGggZD0iTTE0NS4zMDcsMjE3LjY4MWM0LjA5NywwLjUzOCw3Ljg3NS0yLjM0Niw4LjQxOC02LjQ1M2MwLjU0Mi00LjEwNi0yLjM0Ny03Ljg3Ni02LjQ1My04LjQxOA0KCQkJCWMtMTEuMTIzLTEuNDY5LTMzLjk0OSwwLjIzOC00My41MjksMi42MzNjLTQuMDE5LDEuMDA0LTYuNDYxLDUuMDc3LTUuNDU3LDkuMDk1YzAuODUzLDMuNDA4LDMuOTEsNS42ODMsNy4yNzEsNS42ODMNCgkJCQljMC42MDMsMCwxLjIxNS0wLjA3MywxLjgyNS0wLjIyNkMxMTUuMjk4LDIxOC4wMTUsMTM2LjI1MiwyMTYuNDgzLDE0NS4zMDcsMjE3LjY4MXoiLz4NCgkJCTxwYXRoIGQ9Ik0zNTMuMTUsMjE3LjY4MWM5LjA1Ny0xLjE5OCwzMC4wMDksMC4zMzMsMzcuOTI2LDIuMzEzYzAuNjExLDAuMTUzLDEuMjIzLDAuMjI2LDEuODI1LDAuMjI2DQoJCQkJYzMuMzYtMC4wMDEsNi40MTgtMi4yNzUsNy4yNzEtNS42ODNjMS4wMDUtNC4wMTktMS40MzktOC4wOS01LjQ1Ny05LjA5NWMtOS41NzktMi4zOTUtMzIuNDA5LTQuMTAzLTQzLjUyOS0yLjYzMw0KCQkJCWMtNC4xMDcsMC41NDItNi45OTUsNC4zMTEtNi40NTMsOC40MThDMzQ1LjI3NSwyMTUuMzM0LDM0OS4wNDEsMjE4LjIxOSwzNTMuMTUsMjE3LjY4MXoiLz4NCgkJCTxwYXRoIGQ9Ik0zNDMuMTYyLDI0My40OGM4LjgzLDIuMzQ0LDI3LjYxNywxMS43NDMsMzQuMTg1LDE2LjU5YzEuMzQxLDAuOTg5LDIuOSwxLjQ2Niw0LjQ0OCwxLjQ2NmMyLjMsMCw0LjU2OS0xLjA1NCw2LjA0LTMuMDQ2DQoJCQkJYzIuNDYtMy4zMzMsMS43NTMtOC4wMjgtMS41OC0xMC40ODhjLTcuOTQ1LTUuODY1LTI4LjQwMi0xNi4xNDEtMzkuMjQzLTE5LjAyYy00LjAwNC0xLjA2MS04LjExMSwxLjMyLTkuMTc0LDUuMzI0DQoJCQkJQzMzNi43NzYsMjM4LjMxLDMzOS4xNTksMjQyLjQxNywzNDMuMTYyLDI0My40OHoiLz4NCgkJCTxwYXRoIGQ9Ik0zMjMuNDEsMTk1Ljc1NmM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41di0xMi4zMTRjMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNWMtNC4xNDMsMC03LjUsMy4zNTgtNy41LDcuNXYxMi4zMTQNCgkJCQlDMzE1LjkxLDE5Mi4zOTgsMzE5LjI2OCwxOTUuNzU2LDMyMy40MSwxOTUuNzU2eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                alt="empty"
            />
            <h3>Корзина пуста :(</h3>
        </div>`;
};

const renderCartProducts = () => {
    const productWrap = document.getElementsByClassName("cart__items-wrap")[0];
    const list = document.createElement("ul");
    list.className = "cart__items-list";

    products.forEach((product, index) => {
        const { img, title, count, price } = product;
        const { size, color, article } = product.description;

        const item = document.createElement("li");
        item.className = "cart-product";
        item.id = article;

        const imgWrap = document.createElement("div");
        imgWrap.className = "cart-product__img-wrap";
        item.appendChild(imgWrap);

        const imgItem = document.createElement("img");
        imgItem.src = img;
        imgItem.alt = "product-img";
        imgItem.className = "cart-product__img";
        imgWrap.appendChild(imgItem);

        const description = document.createElement("div");
        description.className = "cart-product__description";
        item.appendChild(description);

        const itemTitle = document.createElement("a");
        itemTitle.href = "#";
        itemTitle.className = "cart-product__description-title";
        itemTitle.innerText = title;
        description.appendChild(itemTitle);

        const itemSize = document.createElement("div");
        itemSize.innerText = `Размер: ${size}`;
        description.appendChild(itemSize);

        const itemColor = document.createElement("div");
        itemColor.innerText = `Цвет: ${color}`;
        description.appendChild(itemColor);

        const itemArticle = document.createElement("div");
        itemArticle.innerText = `Арт.: ${article}`;
        description.appendChild(itemArticle);

        const footer = document.createElement("div");
        footer.className = "cart-product__footer";
        description.appendChild(footer);

        const itemCount = document.createElement("label");
        itemCount.className = "cart-product__count";
        footer.appendChild(itemCount);

        itemCount.innerHTML = `<span>Кол-во:</span>`;

        const countSelect = document.createElement("select");
        countSelect.className = "cart-product__count-select";
        itemCount.appendChild(countSelect);

        for (let i = 1; i <= 6; i++) {
            const option = document.createElement("option");
            if (i === count) option.selected = true;
            option.innerText = i;
            countSelect.appendChild(option);
        }

        const itemPrice = document.createElement("div");
        itemPrice.className = "cart-product__price";
        footer.appendChild(itemPrice);

        const oldPrice = document.createElement("div");
        oldPrice.className = "cart-product__price-old";

        if (price.discount) {
            itemPrice.appendChild(oldPrice);
        }

        const finalPrice = document.createElement("div");
        finalPrice.className = "cart-product__price-final";
        itemPrice.appendChild(finalPrice);

        const closeButton = document.createElement("button");
        closeButton.className = "cart-product__close";
        closeButton.onclick = () => {
            openPopup(() => {
                removeProduct(article);
            });
        };
        item.appendChild(closeButton);

        const setPrice = () => {
            const finalCount = price.count * product.count;
            oldPrice.innerText = `${finalCount}`;
            finalPrice.innerText = price.discount
                ? `(-${price.discount}%) ${
                      finalCount - (finalCount / 100) * price.discount
                  }`
                : finalCount;
        };

        setPrice();

        countSelect.onchange = (e) => {
            products[index].count = Number(e.target.value);
            setPrice();
            setTotalPrice();
        };

        list.appendChild(item);
    });

    productWrap.appendChild(list);
};

function openPopup(callback) {
    const wrapper = document.getElementsByClassName("popup")[0];
    const submit = document.getElementsByClassName('popup__submit')[0]
    const cancel = document.getElementsByClassName('popup__cancel')[0]
    const closePopup = () => {
        wrapper.classList.remove("visible");
    };

    wrapper.classList.add("visible");

    submit.onclick = () => {
        callback()
        closePopup()
    }

    cancel.onclick = () => {
        console.log('here');
        closePopup()
    }

    wrapper.onclick = (e) => {
        if (e.target.id === "popup" || e.target.className === "popup__close") {
            e.preventDefault();
            closePopup();
        }
    };

    document.onkeyup = (e) => {
        e.keyCode === 27 && closePopup();
    }
}

products.length ? renderCartProducts() : renderEmptyCart();
setTotalPrice();
