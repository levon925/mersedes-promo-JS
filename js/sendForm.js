const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    //alert('submit')

    let data = {}


    for (let { name, value } of form.elements) {
        if (value && !/^\s+$/.test(value)) {
            if (name) {
                //console.dir(value)
                data[name] = value
            }
        }

    }
    //console.log(data.name, data.mail, data.phone)
    if (Object.keys(data).length === 3) {
        //console.log(data)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                //console.log(response)
                if (response.status === 200 || response.status === 201) {
                    return response.json()
                } else {
                    throw new Error(response.status)
                }
            }).then(data => {
                //console.log(data)
                alert('Sent!')
                form.reset()
            }).catch(error => {
                alert(error.message)
            })
    } else {
        alert('The Fields are empty or invalid')
    }


})