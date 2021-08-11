
document.querySelector('#cargar').addEventListener('click', ()=>{

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function () {
        if (this.status === 200){
            const respuesta = JSON.parse(this.responseText);

            respuesta.forEach(obj =>{
               document.querySelector('#listado').innerHTML += `
                <h3>${obj.title}</h3>
                <p>${obj.id}</p>
                <p>${obj.body}</p>`
            });
        }
    };

    xhr.send();
});

