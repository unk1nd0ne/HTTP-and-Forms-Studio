function setSearchEngine(engine){
    let actions = {
        "google": "https://www.google.com/search",
        "duckduckgo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web"
    };
    return(actions[engine]);
}

function init () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let q = document.querySelector("input[name=q]");
        let engine = document.querySelector("input[name=engine]:checked");
        try {
        form.action = setSearchEngine(engine.value);
        form.method = 'GET';
        if (q.value){
            form.innerHTML = '<input name="q" value="' + q.value + '">';
            form.submit();
        } else {
            throw Error("Search box cannot be empty!");
        }
        } catch (error){
            alert(error.message);
        }
    });
}
window.onload = init;