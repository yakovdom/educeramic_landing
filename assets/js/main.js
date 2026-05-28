
const siteLabel = 'Студии керамики в Вашей образовательной организации "под ключ"';
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = textWalker.nextNode())) {
  textNode.nodeValue = textNode.nodeValue.replaceAll('Керамические студии', siteLabel);
}

const mainNav = document.querySelector('.main-nav');
document.querySelectorAll('.menu-toggle').forEach(btn=>{btn.addEventListener('click',()=>mainNav?.classList.toggle('open'))});
mainNav?.querySelectorAll('a').forEach(link=>{link.addEventListener('click',()=>mainNav.classList.remove('open'))});
document.querySelectorAll('.slider').forEach(slider=>{const track=slider.querySelector('.slider-track');slider.querySelector('.prev')?.addEventListener('click',()=>track.scrollBy({left:-track.clientWidth*.85,behavior:'smooth'}));slider.querySelector('.next')?.addEventListener('click',()=>track.scrollBy({left:track.clientWidth*.85,behavior:'smooth'}));});
document.querySelectorAll('img').forEach(image=>{image.addEventListener('error',()=>{image.classList.add('image-missing');image.removeAttribute('src');});});
document.querySelectorAll('form.lead-form').forEach(form => {
  form.method = 'POST';

  form.querySelector('[name="name"]')?.setAttribute('required', '');
  form.querySelector('[name="phone"]')?.setAttribute('required', '');
  form.querySelector('[name="phone"]')?.setAttribute('autocomplete', 'tel');
  form.querySelector('[name="email"]')?.setAttribute('autocomplete', 'email');
  form.querySelector('[name="org"]')?.setAttribute('autocomplete', 'organization');

  form.addEventListener('submit', () => {
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = 'Отправляем...';
    }
  });
});
