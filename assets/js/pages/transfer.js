load.hide()
const transferEl = document.getElementById("transfer")
let dataSource = dataTransfer.filter((item) => item.category === "true")
let dataTarget = dataTransfer.filter((item) => item.category === "false")
let dataTransferTemp

const instanceTransfer = new Transfer(transferEl, {
  dataSource,
  dataTarget,
  pagination: true,
  elementsPerPage: 10,
  search: true,
  titleTarget: "Production",
  titleSource: "Development",
})

function loadDataTransfer() {
  dataTransferTemp = []
  dataTransferTemp = instanceTransfer._dataSource.concat(instanceTransfer._dataTarget)
  return dataTransfer.map((item) => {
    const object = dataTransferTemp.find((itemTemp) => itemTemp.data === item.data)
    return {
      ...item,
      id: object.id,
    }
  })
}

let result = loadDataTransfer()

// Configuration options for the observer
const config = {
  childList: true, // Observes direct children being added or removed
  attributes: true, // Observes attributes being modified
  characterData: true, // Observes changes to text content
  subtree: true, // Observes all descendants (useful if <li> has nested elements)
  selectAll: false,
}

const arrayData = []

// Create a new MutationObserver instance
const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.target.dataset.psaChecked === "true" && mutation.attributeName !== "autocompleted") {
      // console.log(`The ${mutation.attributeName}="${mutation.target.id}" attribute was changed.`)
      arrayData.push(mutation.target.id)
      return false
    }
  }
  // console.log(arrayData)
})

// Select the <li> element you want to observe
const liElement = document.querySelectorAll("#transfer ul").forEach((ul) => {
  observer.observe(ul, config)
})

transferEl.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault()
    // transfer-arrows-arrow
    switch (e.target.textContent) {
      case ">":
        load.show()
        // console.log("Target")
        const arrTarget = []
        for (let i = 0; i < arrayData.length; i++) {
          const src = arrayData[i]
          for (let i = 0; i < result.length; i++) {
            const res = result[i]
            res.id === src ? arrTarget.push(res._id) : false
          }
        }
        const responseTarget = await patch.post(`/transfer/${new Date().getTime()}`, {ids: arrTarget, category: false})
        arrayData.length = 0
        result = loadDataTransfer()
        load.hide()
        break
      case "<":
        load.show()
        // console.log("Source")
        const arrSource = []
        for (let i = 0; i < arrayData.length; i++) {
          const src = arrayData[i]
          for (let i = 0; i < result.length; i++) {
            const res = result[i]
            res.id === src ? arrSource.push(res._id) : false
          }
        }
        const responseSource = await patch.post(`/transfer/${new Date().getTime()}`, {ids: arrSource, category: true})
        arrayData.length = 0
        result = loadDataTransfer()
        load.hide()
        break
    }
  })
})
