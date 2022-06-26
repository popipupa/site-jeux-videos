writeNavbarInHTML();

function writeNavbarInHTML () {
    document.write(`
    <nav>
    <div>
        <a href="/index.html">Accueil</a>
    </div>
    <div>
        Consoles
        <a href="/consoles/pc.html">PC</a>
        <a href="/consoles/ps4.html">PS4</a>
        <a href="/consoles/switch.html">Switch</a>
    </div>
    <div>
        A propos               
        <a href="/a_propos/histoire.html">Histoire</a>
        <a href="/a_propos/equipe.html">L'équipe</a>
        <a href="/a_propos/prix.html">Prix et récompenses</a>
    </div>
    <div>
        Store               
        <a href="/store/goodies.html">Goodies</a>
        <a href="/store/events.html">Events</a>
    </div>
    <div>
        Community              
        <a href="/community/news.html">News</a>
        <a href="/community/tests.html">Tests</a>
        <a href="/community/avis.html">Avis</a>
    </div>
    <div>
        <a href="/contact.html">Contact</a>
    </div>`);
}
