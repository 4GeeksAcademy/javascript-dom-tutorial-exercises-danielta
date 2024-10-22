let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
document.querySelector("#mySelect").addEventListener('change', (e) => {
    alert(e.target.value);
})

countries.forEach(
    country => {
        let newElem = document.createElement("option");
        newElem.innerHTML= country;
        newElem.value= country;
        // let newElem = `<option value="${country}">${country}</option>`;
        document.querySelector("#mySelect").appendChild(newElem);
    }
)