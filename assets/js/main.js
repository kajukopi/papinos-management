"use strict"
import {psa, io} from "./plugins/index.js"
import {Loading} from "./plugins/Loading.js"
window["psa"] = psa
Loading.hide()
try {
  const sidenav = document.getElementById("sidenav")
  const sidenavInstance = psa.Sidenav.getInstance(sidenav)

  let innerWidth = null

  const setMode = (e) => {
    // Check necessary for Android devices
    if (window.innerWidth === innerWidth) {
      return
    }
    innerWidth = window.innerWidth
    if (window.innerWidth < 660) {
      sidenavInstance.changeMode("over")
      sidenavInstance.hide()
    } else {
      sidenavInstance.changeMode("side")
      sidenavInstance.show()
    }
  }
  setMode()
  // Event listeners
  window.addEventListener("resize", setMode)
} catch (error) {
  console.info("No Sidebar")
}
const url = location.origin === "http://localhost:5000" ? "http://localhost" : "https://tpm.teamkece.com"
// window.Siduru = {
//   login: async (payload) => {
//     Loading.show()
//     try {
//       const response = await fetch(url + "/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(payload),
//       })
//       Loading.hide()
//       return response
//     } catch (error) {
//       Loading.hide()
//       return error
//     }
//   },
//   register: async (payload) => {
//     Loading.show()
//     try {
//       const response = await fetch(url + "/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(payload),
//       })
//       Loading.hide()
//       return response
//     } catch (error) {
//       Loading.hide()
//       return error
//     }
//   },
//   logout: async () => {
//     Loading.show()
//     try {
//       console.log(document.cookie)
//       const response = await fetch(url + "/auth/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       })
//       Loading.hide()
//       return response
//     } catch (error) {
//       Loading.hide()
//       return error
//     }
//   },
//   post: async (collection, payload) => {
//     Loading.show()
//     try {
//       const response = await fetch(url + `/api/${collection}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(payload),
//       })
//       Loading.hide()
//       return response
//     } catch (error) {
//       Loading.hide()
//       return error
//     }
//   },
//   update: async (collection, payload, id) => {
//     Loading.show()
//     try {
//       const response = await fetch(url + `/api/${collection}/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(payload),
//       })
//       Loading.hide()
//       return response
//     } catch (error) {
//       Loading.hide()
//       return error
//     }
//   },
//   delete: async (collection, id) => {
//     Loading.show()
//     try {
//       const response = await fetch(url + `/api/${collection}/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       })
//       Loading.hide()
//       return response
//     } catch (error) {
//       Loading.hide()
//       return error
//     }
//   },
//   getById: async (collection, id) => {
//     Loading.show()
//     try {
//       const response = await fetch(url + `/api/${collection}/${id}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       })
//       Loading.hide()
//       return response
//     } catch (error) {
//       Loading.hide()
//       return error
//     }
//   },
//   get: async (collection) => {
//     Loading.show()
//     try {
//       const response = await fetch(url + `/api/${collection}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       })
//       Loading.hide()
//       return response
//     } catch (error) {
//       Loading.hide()
//       return error
//     }
//   },
// }
