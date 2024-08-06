import {psa} from "./psa.js"
const alertModal = document.getElementById("alertModal")
export const Loading = new psa.Modal(alertModal, {backdrop: "static", keyboard: false, focus: true})
alertModal.addEventListener("shown.psa.modal", (e) => {
  let i = 0
  const timer = setInterval(() => {
    i++
    e.target.querySelector("#modal-content").textContent = `Connecting...${i}`
  }, 1000)
  setTimeout(() => {
    clearInterval(timer)
    Loading.hide()
  }, 10000)
})
Loading.show()
