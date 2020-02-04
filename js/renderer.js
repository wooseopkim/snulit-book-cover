const html = document.querySelector('html')
const render = Handlebars.compile(html.innerHTML)
html.innerHTML = render(values)
setTimeout(() => {
  document.querySelectorAll('script.renderer').forEach((x) => x.remove())
}, 0)