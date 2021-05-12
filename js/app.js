const imageContainer = document.querySelector('.image');

const image = document.createElement('img');
imageContainer.appendChild(image);
image.src = "https://cdn.pixabay.com/photo/2019/07/21/19/01/landscape-4353358_1280.jpg";

const controllers = [
  {name: 'brightness', type: 'range', min: 0, max: 200, value: 100},
  {name: 'contrast', type: 'range', min: 0, max: 200, value: 100},
  {name: 'hue', type: 'range', min: 0, max: 200, value: 100},
  {name: 'saturation', type: 'range', min: 0, max: 200, value: 100},
  {name: 'lightness', type: 'range', min: 0, max: 200, value: 100},
  {name: 'greyscale', type: 'range', min: 0, max: 200, value: 100}
];

const controllersContainer = document.querySelector('.controllers');

const createController = () => {
  for (let controller of controllers) {
    const controllerItem = document.createElement('controller');
    controllersContainer.appendChild(controllerItem);
    controllerItem.classList.add('controller');
    
    const label = document.createElement('label');
    controllerItem.appendChild(label);
    label.for = `${controller.name}`;
    label.innerHTML = `${controller.name}`;

    const input = document.createElement('input');
    controllerItem.appendChild(input);
    input.id = `${controller.name}`;
    input.type = `${controller.type}`;
    input.min = `${controller.min}`;
    input.max = `${controller.max}`;
    input.value = `${controller.value}`;
    input.innerHTML = `${controller.value}`;

    const inputValue = document.createElement('div');
    controllerItem.appendChild(inputValue);
    inputValue.classList.add('input-value');
    inputValue.innerHTML = `${controller.value}`;
  }

  const buttonsContainer = document.createElement('div');
  controllersContainer.appendChild(buttonsContainer);
  buttonsContainer.classList.add('buttons');

  const buttonRotateH = document.createElement('button');
  buttonsContainer.appendChild(buttonRotateH);
  buttonRotateH.innerHTML = 'Rotate Horizontally';
  buttonRotateH.type = 'button';

  const buttonRotateV = document.createElement('button');
  buttonsContainer.appendChild(buttonRotateV);
  buttonRotateV.innerHTML = 'Rotate Vertically';
  buttonRotateV.type = 'button';

  const buttonResetAll = document.createElement('button');
  controllersContainer.appendChild(buttonResetAll);
  buttonResetAll.classList.add('reset-all');
  buttonResetAll.innerHTML = 'Reset All';
  buttonResetAll.type = 'button';
}

createController();