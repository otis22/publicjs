    function openPopup(me) {
        var params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=514,height=328,left=-1000,top=-1000`;
        var url = 'about:blank';

        window.importType = me.getAttribute("data-type")
        window.importUrl = me.getAttribute("data-url")

        if(me.getAttribute('data-domain')) {
            window.importRun(me.getAttribute('data-domain'));
            return;
        }

        window.popup = open(url, 'popup', params);
        var newWindow = window.popup;
        let html = `
            <p>Введите url адрес вашей программы или доменное имя.</p>
            <img src="https://i.ibb.co/ZSM3syp/image.gif" style="width:100%" alt="где взять ссылку?">
            <form action="#" align="center" onsubmit="return window.opener.importRun();">
                <input type="text" size="26" id="url" pattern="https://.*.vetmanager.ru.*" placeholder="https://xxx.vetmanager.ru/index.php"> <br>
                <button id="import" type="submit">Импортировать</button>
            </form>
        `;
        newWindow.document.body.insertAdjacentHTML('afterbegin', html);
    }
    window.importRun = function(domain_name="") {

        //validate input
        if(domain_name == "") {
            var input = window.popup.document.getElementById("url").value;
            regex1 = new RegExp('[\\/\\.]');
            regex2 = new RegExp('https:\/\/.*.');
            if(!regex1.test(input)) {
                domain_name = input;
            } else if(regex2.test(input)) {
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
            request.onreadystatechange = function () {
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
            window.popup.close();
        }
        console.log(vetmanagerUrl + "/import_content.php?type=" + window.importType + "&url=" + window.importUrl)
        window.location = vetmanagerUrl + "/import_content.php?type=" + window . importType + "&url=" + window.importUrl;
    }
