const moveTo = new MoveTo();
// беру все кнопки на странице
const buttons = document.querySelectorAll('.button')
// и вещаю на них trigger
buttons.forEach(btn => moveTo.registerTrigger(btn));