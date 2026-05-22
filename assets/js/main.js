
const siteLabel = 'Студии керамики в вашей Образовательной Организации под ключ';
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = textWalker.nextNode())) {
  textNode.nodeValue = textNode.nodeValue.replaceAll('Керамические студии', siteLabel);
}

document.querySelectorAll('.menu-toggle').forEach(btn=>{btn.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.toggle('open'))});
document.querySelectorAll('.slider').forEach(slider=>{const track=slider.querySelector('.slider-track');slider.querySelector('.prev')?.addEventListener('click',()=>track.scrollBy({left:-track.clientWidth*.85,behavior:'smooth'}));slider.querySelector('.next')?.addEventListener('click',()=>track.scrollBy({left:track.clientWidth*.85,behavior:'smooth'}));});
document.querySelectorAll('img').forEach(image=>{image.addEventListener('error',()=>{image.classList.add('image-missing');image.removeAttribute('src');});});
const leadFormEndpoint = 'https://formsubmit.co/info@razvitiekeramiki.ru';
const ensureHiddenInput = (form, name, value) => {
  let input = form.querySelector(`input[name="${name}"]`);
  if (!input) {
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    form.append(input);
  }
  input.value = value;
};

document.querySelectorAll('form.lead-form').forEach(form => {
  const title = form.querySelector('h3')?.textContent.trim() || form.id || 'Заявка с сайта';
  form.action = leadFormEndpoint;
  form.method = 'POST';

  ensureHiddenInput(form, '_subject', `Новая заявка: ${title}`);
  ensureHiddenInput(form, '_template', 'table');
  ensureHiddenInput(form, '_next', `${window.location.origin}/thanks.html`);
  ensureHiddenInput(form, '_url', window.location.href);
  ensureHiddenInput(form, 'Форма', title);
  ensureHiddenInput(form, 'Страница', document.title);

  form.querySelector('[name="name"]')?.setAttribute('required', '');
  form.querySelector('[name="phone"]')?.setAttribute('required', '');
  form.querySelector('[name="phone"]')?.setAttribute('autocomplete', 'tel');
  form.querySelector('[name="email"]')?.setAttribute('autocomplete', 'email');
  form.querySelector('[name="org"]')?.setAttribute('autocomplete', 'organization');

  form.addEventListener('submit', () => {
    ensureHiddenInput(form, '_url', window.location.href);
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = 'Отправляем...';
    }
  });
});
