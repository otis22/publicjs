function openPopup(me) {
    window.importType = me.getAttribute("data-type")
    window.importUrl = me.getAttribute("data-url")

    if (me.getAttribute('data-domain')) {
        window.importRun(me.getAttribute('data-domain'));
        return;
    }

    window.popup = document.createElement("div");
    var newWindow = window.popup;
    newWindow.innerHTML = `
      <div class="body-blackout" style="
         position: absolute;
         z-index: 1010;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(0, 0, 0, .65);
         "></div>
      <div style="
         height: 365px;
         width: 650px;
         background-color: #fff;
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         padding: 45px;
         opacity: 1;
         pointer-events: auto;
         transition: all 300ms ease-in-out;
         z-index: 1011;
         ">
         <i style="
            position: absolute;
            font-size: 1.2rem;
            right: -10px;
            top: -10px;
            cursor: pointer;
            background-color: #007bff !important;
            padding: 1rem!important;
            color: white" onclick="window.popup.remove()">X</i>
         <p>Введите url адрес вашей программы или доменное имя.</p>
         <img src="https://i.ibb.co/ZSM3syp/image.gif" style="width:100%" alt="где взять ссылку?">
         <form action="#" align="center" onsubmit="return window.importRun();">
            <input type="text" size="26" id="popup-url" placeholder="https://xxx.vetmanager.ru/index.php"> <br>
            <button type="submit">Импортировать</button>
         </form>
      </div>`;
    document.body.insertAdjacentElement('afterbegin', newWindow);
}
window.importRun = function(domain_name = "") {

    //validate input
    if (domain_name == "") {
        var input = document.getElementById("popup-url").value;
        regex1 = new RegExp('[\\/\\.]');
        regex2 = new RegExp('https:\/\/.*.');
        if (!regex1.test(input)) {
            domain_name = input;
        } else if (regex2.test(input)) {
            domain_name = input.split('//')[1].split('.')[0];
        } else {
            window.popup.alert("Неверный ввод");
            return false;
        }
    }

    function vetmanagerUrl(domain_name) {
        var request = new XMLHttpRequest();
        var result = '';
        request.open('Get', 'https://billing-api.vetmanager.cloud/host/' + domain_name, false);
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                switch (request.status) {
                    case 200:
                        var response = JSON.parse(request.response);
                        result += response.protocol + "://" + response.url;
                        break;
                    default:
                        alert('An error occurred during your request: ' + request.status + ' ' + request.statusText);
                        break;
                }
            }
        };
        request.send()
        return result
    }

    var vetmanagerUrl = vetmanagerUrl(domain_name);
    if (window.popup !== undefined) {
        window.popup.remove();
    }
    var win = window.open(vetmanagerUrl + "/import_content.php?type=" + window.importType + "&url=" + window.importUrl, '_blank');
    win.focus();
}
