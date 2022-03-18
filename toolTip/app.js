const moveTo = new MoveTo();
// беру все кнопки на странице
const buttons = document.querySelectorAll('.button')
// и вещаю на них trigger
buttons.forEach(btn => moveTo.registerTrigger(btn));

// add toolTip
tippy('[data-tippy-content]', {
  // theme: 'light',
  content: '<strong>Bolded content</strong>',
  allowHTML: true,
});
// add toolTip
