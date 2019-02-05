//Exercice 4
window.onload = () => {
    document.querySelector("#form").addEventListener("submit", formSubmit);

    

    function formSubmit (e) {
        e.preventDefault();
        var nom = e.target.nom.value;
        var prenom = e.target.prenom.value;
        var ville = e.target.ville.value;
        console.log(nom, prenom, ville);
    }

    

}
 






