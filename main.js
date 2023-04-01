const DOM = document.getElementById.bind(document);

const domInpName = DOM("inpName");
const domInpSurname = DOM("inpSurname");
const domConResult = DOM("conResult");
const domSlcOperation = DOM("slcOperation");

domInpName.oninput = function (event) {
  console.log("onInpNameInput:", { event });
  renderFullName();
};

domInpSurname.oninput = function (event) {
  console.log("onInpNameInput:", { event });
  renderFullName();
};

const getFullName = () => `${domInpName.value} ${domInpSurname.value}`;

const operation = {
  plus: () => {
    return parseInt(domInpName.value) + parseInt(domInpSurname.value);
  },
  minus: () => {
    return parseInt(domInpName.value) - parseInt(domInpSurname.value);
  },
};

function renderFullName() {
  const fullName = getFullName();
  console.log("renderFullName:", { fullName, selected: domSlcOperation.value });
  domConResult.textContent = operation[domSlcOperation.value]();
}

console.log(domInpName, domInpSurname);
