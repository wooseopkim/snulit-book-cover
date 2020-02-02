const main = document.querySelector('main')
const render = Handlebars.compile(main.innerHTML)
main.innerHTML = render(values)
setTimeout(() => {
  document.querySelectorAll('script').forEach((x) => x.remove())
}, 0)
