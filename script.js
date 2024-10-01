setTimeout(
    () => {
      document
        .querySelector('.not-loaded')
        .classList
        .remove('not-loaded');
    },
    1000,
  );

  function mostrarPoema() {
    document.querySelector('.poema').style.display = 'block';
    document.querySelector('.si').style.display = 'none';
    document.querySelector('.no').style.display = 'none';
  }
  
  function mostrarPoemaNo() {
    document.querySelector('.poema-no').style.display = 'block';
    document.querySelector('.si').style.display = 'none';
    document.querySelector('.no').style.display = 'none';
  }