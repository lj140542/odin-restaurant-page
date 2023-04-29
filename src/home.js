const home = () => {
  let content = document.createElement('div');
  let em = document.createElement('em');
  let h1 = document.createElement('h1');

  em.textContent = "Get a taste of Asgard..";
  h1.appendChild(em);
  content.classList.add('hero');
  content.appendChild(h1);

  return content;
}

export { home };