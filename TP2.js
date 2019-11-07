   /* var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var email = document.getElementById("email");
    var adresse = document.getElementById("adresse");
    var resultat= document.getElementById("resultat");
*/
var element=document.getElementsByClassName("condition");
    var tabs=[nom,prenom,email,adresse];

    function Valider(e) {

        resultat.textContent = "";
        var index=0;

        tabs.forEach(elt => {
            if (elt.value.length ===0) {
                // resultat.appendChild(document.createTextNode(`L'élément ${elt.id} doit contenir au moins 5 caractères`));
                var error = document.createElement("p");
                error.textContent = "L'élément " +elt.id+ " ne doit pas etre vide";
                resultat.appendChild(error);
            }
            else if (elt.value.length>0 && elt.value.length<5){
                var error = document.createElement("p");
                error.textContent = "L'élément " +elt.id+ " doit faire plus de 5 caractères";
                resultat.appendChild(error);
            }
            else {
                 index++;
            }
        })
        if (tabs.length===index){
            resultat.textContent = `Bienvenue ${nom.value}`;
            resultat.style.backgroundColor = "rgb(78, 181, 76)";
        } else {
            resultat.style.backgroundColor = "rgb(227, 66, 85)";
        }
        e.preventDefault();
    }

    document.getElementById("bouton").addEventListener("click", Valider);