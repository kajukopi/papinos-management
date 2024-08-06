"use strict"
import {psa} from "../plugins/index.js"

const arrayLocation = [
  "GEDUNG IMEVA",
  "GEDUNG LAMINATING",
  "GEDUNG RS",
  "GEDUNG OFLINE A",
  "GEDUNG OFLINE B",
  "GEDUNG STOCKFITING A",
  "GEDUNG STOCKFITING D",
  " GEDUNG COMPRESOR",
  "GEDUNG ENGINERING",
  "GEDUNG KANTIN",
  "GUDANGTEKNISI",
  "GEDUNG MEKANIK",
  "GEDUNG WAREHOUSE",
  "GEDUNG LABORAT",
  "GEDUNG OFFICE",
  "GEDUNG TECHNICAL",
  "PARKIRAN PERUSAHAAN",
  "GEDUNG TOOLING",
  "GUDANG EDP",
  "GEDUNG A",
  "GEDUNG B",
  "GEDUNG C",
  "GEDUNG D",
  "GEDUNG E",
  "Machine Warehouse",
]
let elementLocation = `<option value="" hidden selected></option>`
arrayLocation.forEach((item) => {
  elementLocation += ` <option value="${item}">${item}</option> `
})
document.querySelector("#from-location-transfer-asset").innerHTML = elementLocation
document.querySelector("#to-location-transfer-asset").innerHTML = elementLocation
