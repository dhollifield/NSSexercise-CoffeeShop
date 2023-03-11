const url = "https://localhost:7035/api/BeanVariety/";

const listContainer = document.getElementById("beanVarieties");

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            html = ""
            beanVarieties.map(variety => html += `<h1>${variety.name}</h1>`);
            listContainer.innerHTML = html;
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

document.getElementById("addBeanForm").innerHTML =
    `
<form>
    <fieldset>
        <label for="beanName">Bean Name</label>
        <input type="text" placeholder="Enter bean name" name="beanName"/>
    </fieldset>

    <fieldset>
        <label for="beanRegion">Bean Region</label>
        <input type="text" id="beanRegion" placeholder="Enter bean region" name="beanRegion"/>
    </fieldset>

    <fieldset>
        <label for="beanNotes">Bean Note</label>
        <textarea type="text area" id="beanNote" placeholder="Enter note" name="beanNote" rows="5" columns="10"></textarea>
    </fieldset>

    <button type="button" id="saveNewBeanVariety" class="save-button">Save New Bean Variety</button>
</form>`

document.addEventListener("click", (event) => {
    if (event.target.id === "saveNewBeanVariety") {
        const name = document.querySelector("input[name='beanName']").value;
        const region = document.querySelector("input[name='beanRegion']").value;
        const notes = document.getElementById("beanNote")?.value;

        const newBeanVariety = {
            name: name,
            region: region,
            notes: notes
        };
        addNewBeanVariety(newBeanVariety);
    }
})

function addNewBeanVariety(newBeanVariety) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newBeanVariety),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(resp => resp.json());
}
