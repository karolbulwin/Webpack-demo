export default function footerComponent() {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  const small = document.createElement('small');

  p.innerText = 'Created by: Karol Bulwin';
  small.appendChild(p);
  footer.appendChild(small);

  return footer;
}
