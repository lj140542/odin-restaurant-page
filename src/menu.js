import blackenedSalmon from './img/blackened-salmon.png';
import honeyRoast from './img/honey-roast.png';
import lemonSalmon from './img/lemon-salmon.png';
import ciderPork from './img/cider-pork.png';

const menu = () => {
  let content = document.createElement('div');
  let mealType = document.createElement('div');
  let separator = document.createElement('h3');
  let meal = document.createElement('div');
  let mealImg = new Image();
  let mealName = document.createElement('h3');
  let em = document.createElement('em');
  let mealDesc = document.createElement('p');

  mealType.classList.add('meal-type');

  separator.classList.add('separator');
  separator.textContent = "SALADS";
  mealType.appendChild(separator);

  meal.classList.add('meal');
  mealImg.classList.add('meal-img');
  mealImg.src = blackenedSalmon;
  mealImg.alt = "blackened-salmon-image";
  mealName.classList.add('meal-name');
  mealName.textContent = "Blackened Salmon With Green Goddess Avocado Salad";
  mealDesc.classList.add('meal-description');
  em.textContent = "Salmon is like the godfather of fish. Its big meaty fillets can stand up to just about any flavour you throw at it. Its oily flesh can withstand the heat of chilli and spice and, like most fish, it is incredibly healthy. The blackening method of this recipe creates a wonderful deep and smoky crust on the top of the fillets and, when combined with a cooling creamy avocado salad, it really is a delicious little dinner.";
  mealDesc.appendChild(em);
  meal.append(mealImg, mealName, mealDesc);
  mealType.appendChild(meal);
  content.appendChild(mealType);

  meal = document.createElement('div');
  meal.classList.add('meal');
  mealImg = new Image();
  mealImg.classList.add('meal-img');
  mealImg.src = honeyRoast;
  mealImg.alt = "honey-roast-image";
  mealName = document.createElement('h3');
  mealName.classList.add('meal-name');
  mealName.textContent = "Honey Roast Potato Salad with Green Anchovy Dressing & Shaved Onion";
  mealDesc = document.createElement('p');
  mealDesc.classList.add('meal-description');
  em = document.createElement('em');
  em.textContent = "A potato salad with a difference and a far cry from the mayo laden ones most of us grew up with. Seek out jars or tubs of crispy shallots in most super markets or shallow fry thinly sliced ones until crisp and golden before draining on kitchen paper. They are a wonderful crispy addition to this seriously addictive potato salad. The dressing here is open to interpretation, reduce the amount of anchovies if they are particularly salty or omit entirely if they’re not your thing.";
  mealDesc.appendChild(em);
  meal.append(mealImg, mealName, mealDesc);
  mealType.appendChild(meal);
  content.appendChild(mealType);

  mealType = document.createElement('div');
  mealType.classList.add('meal-type');

  separator = document.createElement('h3');
  separator.classList.add('separator');
  separator.textContent = "MAIN";
  mealType.appendChild(separator);

  meal = document.createElement('div');
  meal.classList.add('meal');
  mealImg = new Image();
  mealImg.classList.add('meal-img');
  mealImg.src = lemonSalmon;
  mealImg.alt = "lemon-salmon-image";
  mealName = document.createElement('h3');
  mealName.classList.add('meal-name');
  mealName.textContent = "Wood Fired Fennel Salmon, Roasted Veg & Lemon Aioli";
  mealDesc = document.createElement('p');
  mealDesc.classList.add('meal-description');
  em = document.createElement('em');
  em.textContent = "Seeking out good quality fish from your local fishmongers is so worthwhile, and roasted in the oven with this fennel salt, it is simply delicious! Any leftovers of the aioli here will keep well in a jar in the fridge for up to 2 days.";
  mealDesc.appendChild(em);
  meal.append(mealImg, mealName, mealDesc);
  mealType.appendChild(meal);
  content.appendChild(mealType);

  meal = document.createElement('div');
  meal.classList.add('meal');
  mealImg = new Image();
  mealImg.classList.add('meal-img');
  mealImg.src = ciderPork;
  mealImg.alt = "cider-pork-image";
  mealName = document.createElement('h3');
  mealName.classList.add('meal-name');
  mealName.textContent = "Creamy Mustard & Cider Pork Chops";
  mealDesc = document.createElement('p');
  mealDesc.classList.add('meal-description');
  em = document.createElement('em');
  em.textContent = "This creamy sauce makes these chops all the more delicious!";
  mealDesc.appendChild(em);
  meal.append(mealImg, mealName, mealDesc);
  mealType.appendChild(meal);
  content.appendChild(mealType);

  content.classList.add('menu');

  return content;
}

export { menu };