gateway = function(url, params, mode) {
    var XHR = new XMLHttpRequest;
    if(params == null) {
        XHR.open('GET', url, true);
    }
    else {
        XHR.open('GET', url+"?"+params, true);
    }
    XHR.onreadystatechange = function () {
        if (4 == this.readyState) {
            var status = this.status;
            if (400 > status) {
                responseText = this.responseText;
                switch(mode) {
                    case "connection" :
                        if (responseText) {
                            UserControl.checkConnection(responseText);
                        }
                        break;
                    case "register" :
                        if (responseText) {
                            UserControl.registerUser(responseText);
                        }
                        break;
                    case "addlink" :
                        LinkControl.addLink();
                        break;
                    case "bestLinks" :
                        LinkControl.bestLinks(responseText);
                        break;
                    case "myLinks" :
                        LinkControl.myLinks(responseText);
                        break;
                    case "myGroups" :
                        LinkControl.myGroups(responseText);
                        break;
                    case "myTags" :
                        LinkControl.myTags(responseText);
                        break;
                    case "logs" :
                        LinkControl.logs(responseText);
                        break;
                    case "search" :
                        LinkControl.search(responseText);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    XHR.send();
};