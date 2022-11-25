const menu = document.querySelector('.menu_list');

  menu.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('menu_link')) {
      menu.style.setProperty('--underline-width', `${event.target.offsetWidth}px`);
      menu.style.setProperty('--underline-offset-x', `${event.target.offsetLeft}px`);
    }
  });
  menu.addEventListener('mouseleave', () => {
    menu.style.setProperty('--underline-width', '0')
  });