document.addEventListener(`DOMContentLoaded`, () => {
    const container = document.getElementById(`monster-container`)
    fetch(`http://localhost:3000/monsters/?_limit=20`)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(({name, age, description}) => {
            let div = document.createElement(`div`)
            let h2 = document.createElement(`h2`)
            let h4 = document.createElement(`h4`)
            let p = document.createElement(`p`)

            h2.textContent = name
            h4.textContent = `Age: ${age}`
            p.textContent = description
            div.append(h2, h4, p)
            container.appendChild(div)
        });
    })

    document.getElementById(`button`).addEventListener(`click`, (e) => {
        e.preventDefault()
        let nameInput = document.getElementById(`name`).value
        let ageInput = document.getElementById(`age`).value
        let desc = document.getElementById(`description`).value
        console.log(nameInput)
        fetch(`http://localhost:3000/monsters`, {
        method: 'POST',    
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput,
            age: ageInput,
            description: desc
        })
        
        })
    })
    
    
})