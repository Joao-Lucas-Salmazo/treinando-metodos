const list = document.querySelector("ul");
const buttonForEach = document.querySelector(".button-foreach");

function formatCurrency(value) {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

function forEachMetod(productsArray) {
  let myLi = "";

  productsArray.forEach((product) => {
    myLi += `
          <li>
            <img src="${product.src}" />
            <p>${product.name}</p>
            <p class="item-price">R$${formatCurrency(product.price)}</p>
          </li>`;
  });

  list.innerHTML = myLi;
}
buttonForEach.addEventListener("click", () => forEachMetod(menuOptions));

const buttonMap = document.querySelector(".button-map");

function mapMetod() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  forEachMetod(newPrices);
}
buttonMap.addEventListener("click", mapMetod);

const buttonReduce = document.querySelector(".button-reduce");

function reduceMetod() {
  const totalValue = menuOptions.reduce(
    (acc, product) => acc + product.price,
    0
  );
  list.innerHTML = `
    <li>  
    <p>O valor total dos itens é: R$${formatCurrency(totalValue)}</p>
    </li>
  `;
}
buttonReduce.addEventListener("click", reduceMetod);

const buttonFilter = document.querySelector(".button-filter");

function filterMetod() {
  const menuVeg = menuOptions.filter((product) => product.vegan);
  forEachMetod(menuVeg);
}

buttonFilter.addEventListener("click", filterMetod);
