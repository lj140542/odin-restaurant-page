const contact = () => {
  let content = document.createElement('div');
  let tmp = document.createElement('h3');

  tmp.classList.add('separator');
  tmp.textContent = "CONTACT";
  content.appendChild(tmp);

  tmp = document.createElement('h2');
  tmp.textContent = "Phones";
  content.appendChild(tmp);
  tmp = document.createElement('p');
  tmp.textContent = "+00 (O)1 23 45 67 89";
  content.appendChild(tmp);
  tmp = document.createElement('p');
  tmp.textContent = "+00 (O)9 87 65 43 21";
  content.appendChild(tmp);

  tmp = document.createElement('h2');
  tmp.textContent = "Mail";
  content.appendChild(tmp);
  tmp = document.createElement('a');
  tmp.href = "mailto:odin@asgard.com";
  tmp.textContent = "odin@asgard.com";
  content.appendChild(tmp);

  tmp = document.createElement('h2');
  tmp.textContent = "Address";
  content.appendChild(tmp);
  tmp = document.createElement('p');
  tmp.textContent = "Somewhere in Asgard";
  content.appendChild(tmp);

  content.classList.add('contact');

  return content;
}

export { contact };