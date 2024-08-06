"use strict"
import {psa, Loading} from "../plugins/index.js"

// const formLogin = document.querySelector("#form-login")
// formLogin.onsubmit = async (e) => {
//   e.preventDefault()
//   Loading.show()
//   const fd = new FormData(formLogin)
//   const payload = Object.fromEntries(fd)
//   fetch(location.pathname + "?login=true", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // credentials: "include",
//     body: JSON.stringify(payload),
//   })
// }

// const formRegister = document.querySelector("#form-register")
// formRegister.onsubmit = async (e) => {
//   Loading.show()
//   e.preventDefault()
//   const fd = new FormData(formRegister)
//   const payload = Object.fromEntries(fd)
//   fetch(location.pathname + "?register=true", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // credentials: "include",
//     body: JSON.stringify(payload),
//   })
// }
