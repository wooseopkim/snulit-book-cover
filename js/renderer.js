const main = document.querySelector('main')
const render = Handlebars.compile(main.innerHTML)
main.innerHTML = render(values)
setTimeout(() => {
  document.querySelectorAll('script.renderer').forEach((x) => x.remove())
}, 0)