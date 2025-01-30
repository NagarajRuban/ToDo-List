// chrome://extensions/

let myLeads = []
/* myLeads = JSON.parse(myLeads)
myLeads.push("www.mohan.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads); */



const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem)...inputBtn..

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()

    console.log( localStorage.getItem("myLeads") );
})


function renderLeads() {
    let listItems = ""
    for(let i = 0 ; i< myLeads.length ; i++) {
        // listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] +  "</a></li>"         
        listItems += `
           <li> 
              <a target='_blank' href='${myLeads[i]}'> 
                 ${myLeads[i]}
              </a>
           </li>
          `
    }
    ulEl.innerHTML = listItems
}