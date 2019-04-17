export default function headerComponent() {
  const header = document.createElement('header');
  const element = document.createElement('div');
  const h1 = document.createElement('h1');

  h1.innerText = 'Playing with webpack';
  element.appendChild(h1);
  header.appendChild(element);

  return header;
}
