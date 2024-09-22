const input = document.getElementById('input_search');

input.focus();
input.value = '';

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        let value = input.value;
        if (value.length != 0) {
            search(value)
        }
    }
});

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 27) {
        input.value = '';
    }
});

function search(value) {
    let search_service = document.getElementById('search_select').value;
    if (search_service.match('startpage')) {
        let url = search_service.replace('SEARCH', value);
        window.location = url;
        return;
    }
    window.location = search_service + value;
}