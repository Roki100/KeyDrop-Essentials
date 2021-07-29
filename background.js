$(document).ready(async function () {
    let item = document.getElementsByClassName('hidden lg:flex') [0];
    item.insertAdjacentHTML('afterend', `<div class="flex items-center text-xs font-semibold">
<span class="mt-px saldo_gold" style="font-size: 70%; margin-left: 30%; white-space: nowrap;">Essentials v0.1<br>By Roki_100#0230</span>
</div>`);
});