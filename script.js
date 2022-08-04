const counters = document.querySelectorAll(".counter")

function main() {
  counters.forEach((counter) => {
    counter.textContent = 0

    function updateCounter(basis = 100) {
      const target = +counter.getAttribute("data-target")
      const c = +counter.textContent
      let increment = target / basis
      console.log(increment)
      if (c < target) {
        counter.textContent = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 1)
        return
      }
      counter.textContent = target
    }
    updateCounter()
  })
}

main()
