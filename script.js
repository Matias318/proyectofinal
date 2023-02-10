fetch('https://randomuser.me/api/?seed=6e421f67192e4f05')
    .then(response =>  {
        return response.json()
    })
    .then(function(data){
        let people = data.results;

        
        document.getElementById('nombre').innerHTML = "Nombre: " + people[0].name.first;
        document.getElementById('apellido').innerHTML = "Apellido: " + people[0].name.last;
        document.getElementById('nacimiento').innerHTML = "Fecha de nacimiento: " + people[0].dob.date;
        document.getElementById('edad').innerHTML = "Edad: " + people[0].dob.age;
        document.getElementById('dni').innerHTML = "DNI: " + people[0].id.value;
        document.getElementById('nacionalidad').innerHTML = "Nacionalidad: " + people[0].nat;
        document.getElementById('pais').innerHTML = "País: " + people[0].location.country;
        document.getElementById('estado').innerHTML = "Estado: " + people[0].location.state;
        document.getElementById('ciudad').innerHTML = "Ciudad: " + people[0].location.city;
        document.getElementById('calle').innerHTML = "Calle: " + people[0].location.street.name;
        document.getElementById('altura').innerHTML = "Altura: " + people[0].location.street.number;
        document.getElementById('codigo_postal').innerHTML = "Código postal: " + people[0].location.postcode;
        document.getElementById('tel').innerHTML = "Teléfono: " + people[0].phone;
        document.getElementById('cel').innerHTML = "Celular: " + people[0].cell;
        document.getElementById('mail').innerHTML = "Email: " + people[0].email;

    }) 

$(document).ready(function () {
    let url = "https://randomuser.me/api/?seed=6e421f67192e4f05";
    let p = "";
    fetchInformation(url)
    function fetchInformation(url) {
        fetch(url)
            .then((response) => response.json())
            .then(function (data) {        
                data.results.forEach(person => {
                    p = `<div>
                            <img src="${person.picture.medium}">
                        </div>`;
                    $("#foto_perfil").append(p);
                    
                    });                                
                })
        }
});

/* Este link es el importante para que se vea la imagen
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>*/