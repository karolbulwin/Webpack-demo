export default function componentLoadButton() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const h2 = document.createElement('h2');

  element.classList.add('load-bttn-container');

  h2.innerText = 'Click the button to new load script and new button...'

  btn.innerHTML = 'Click me!';
  btn.onclick = e => import('./loadImgButton');
  element.appendChild(h2);
  element.appendChild(btn);

  return element;
}

const imgContainer = document.querySelector('.img-container');
imgContainer.parentElement.appendChild(componentLoadButton());
