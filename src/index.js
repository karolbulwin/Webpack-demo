import '../public/stylesheets/styles.scss';
import mainComponent from './main.js';
import headerComponent from './header.js';
import footerComponent from './footer.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function observer(element) {
  const io = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        import('./img');
        import('./loadButton');
      }
    },
    {
      /* Using default options. Details below */
    }
  );
  // Start observing an element
  io.observe(element);
}

document.body.appendChild(headerComponent());
document.body.appendChild(mainComponent());

observer(document.querySelector('.img-container'));

document.body.appendChild(footerComponent());
