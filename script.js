fetch('https://randomuser.me/api/?seed=6e421f67192e4f05')
    .then(response =>  {
        return response.json()
    })
    .then(function(data){
        let people = data.results;

        
        document.getElementById('nombre').innerHTML = "Nombre: " + people[0].name.first;
        document.getElementById('mail').innerHTML = people[0].email
        
        
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