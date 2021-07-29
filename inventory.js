const sleep = (t) => new Promise(r => setTimeout(r, t))

$(document).ready(async function () {
    let FETCH_URL = 'my_winner_list?type=all&state=all&per_page=1000&current_page=1';
    let PRICES = [];
    if (!document.location.href.endsWith('/')) FETCH_URL = '/' + FETCH_URL;
    let data = await fetch(document.location.href + FETCH_URL);
    data = await data.json();

    for (let i = 0; i < data.data.length; i++) {
        PRICES.push(data.data[i].price);
    }
    let TOTAL = PRICES.reduce(function (a, b) { return a + b });
    TOTAL = `${TOTAL} ${data.data[0].currency}`;
    check();

    async function check() {
        if (document.getElementsByClassName("flex items-center justify-center order-2 border border-solid rounded-lg h-14 my-5 xl:my-0 xl:order-3 border-navy-500  css-18bnk4x").length == 1) return append();
        await sleep(500);
        return check();
    }
    function append() {
        let item = document.getElementsByClassName("flex items-center justify-center order-2 border border-solid rounded-lg h-14 my-5 xl:my-0 xl:order-3 border-navy-500  css-18bnk4x") [0];
        item.insertAdjacentHTML('beforeend', `<div class="flex items-center justify-center order-2 border border-solid rounded-lg h-14 my-4 xl:my-0 xl:order-3 border-navy-500  css-18bnk4x" style="font-size:70%;" id="keydrop-essentials-by-roki-inventory-history-value">Inventory worth [All Items]:<br>${TOTAL}</div>`)
    }
});