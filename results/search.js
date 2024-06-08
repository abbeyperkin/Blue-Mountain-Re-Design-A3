document.addEventListener('DOMContentLoaded', (event) => {
    let params = new URLSearchParams(document.location.search);
    let query = params.get("search");
    //FIXME: breaks on null lmao
    const searchHeader = document.getElementById('searchQuery');

    if (query){
        searchHeader.innerHTML = '"' + query + '"';
    } else {
        searchHeader.innerHTML = '"Birthday"'
    }
});