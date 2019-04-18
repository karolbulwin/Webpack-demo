export default function mainComponent() {
  const main = document.createElement('main');
  const scrollDivContainer = document.createElement('div');
  const scrollDivContent = document.createElement('div');
  const h2Scroll = document.createElement('h2');
  const imgContainer = document.createElement('div');
  const imgDiv = document.createElement('div');

  scrollDivContainer.classList.add('container');
  h2Scroll.innerText = 'Scroll down to load an image';
  scrollDivContent.appendChild(h2Scroll);
  scrollDivContainer.appendChild(scrollDivContent);

  imgDiv.classList.add('img-container');
  imgContainer.appendChild(imgDiv);
  main.appendChild(scrollDivContainer);
  main.appendChild(imgContainer);

  return main;
}
