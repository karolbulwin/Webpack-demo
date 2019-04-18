import Img320 from '../public/images/suntrees_320.jpg';
import Img400 from '../public/images/suntrees_400.jpg';
import Img480 from '../public/images/suntrees_480.jpg';
import Img600 from '../public/images/suntrees_600.jpg';
import Img800 from '../public/images/suntrees_800.jpg';
import Img1000 from '../public/images/suntrees_1000.jpg';
import Img1200 from '../public/images/suntrees_1200.jpg';
import Img1400 from '../public/images/suntrees_1400.jpg';

function componentImg() {
  const container = document.createElement('div');
  const element = document.createElement('div');
  const h2 = document.createElement('h2');
  const btn = document.createElement('button');
  const img = new Image();

  h2.classList.add('hello');
  h2.innerText = 'Click the button to load new img...';

  btn.innerText = 'Load img';
  btn.onclick = () => {
    img.src = Img1000;
    img.alt = 'The trees are dripping in the sun';
    img.srcset = `${Img320} 320w, ${Img400} 400w, ${Img480} 480w, ${Img600} 600w, ${Img800} 800w, 
                  ${Img1000} 1000w, ${Img1200} 1200w, ${Img1400} 1400w,`;
    element.appendChild(img);
  };

  container.appendChild(h2);
  container.appendChild(btn);
  container.appendChild(element);

  return container;
}

const imgContainer = document.querySelector('.load-bttn-container');
imgContainer.appendChild(componentImg());
