document.addEventListener("DOMContentLoaded", () => {
  // Reveal animations on scroll
  const revealElements = document.querySelectorAll(".reveal")

  function checkReveal() {
    const windowHeight = window.innerHeight
    const revealPoint = 100 // Reduced from 150 to 100 to reveal elements sooner

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("revealed")
      }
    })
  }

  // Check for elements to reveal on page load and scroll
  window.addEventListener("scroll", checkReveal)

  // Small delay to ensure DOM is fully loaded
  setTimeout(checkReveal, 100)

  // Mobile navigation toggle
  const toggle = document.querySelector(".mobile-nav-toggle")
  const links = document.querySelector(".nav-links")

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("active")
      const isActive = links.classList.contains("active")
      toggle.innerHTML = isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>'
    })

    // Close nav when clicking a link
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("active")
        toggle.innerHTML = '<i class="fas fa-bars"></i>'
      })
    })
  }

  // Set current year in footer
  const yearElement = document.getElementById("current-year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString()
  }

  // Enhanced smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Get the height of the fixed navigation
        const navHeight = document.querySelector(".nav-container").offsetHeight

        // Calculate the target position with offset
        // Adding a smaller offset (30px) to position sections higher in the viewport
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 30

        // Smooth scroll to target
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Preload images for smoother experience
  function preloadImages() {
    const images = document.querySelectorAll("img")
    images.forEach((img) => {
      const src = img.getAttribute("src")
      if (src && !src.includes("placeholder")) {
        const preloadLink = document.createElement("link")
        preloadLink.href = src
        preloadLink.rel = "preload"
        preloadLink.as = "image"
        document.head.appendChild(preloadLink)
      }
    })
  }

  // Call preload function
  preloadImages()
})
