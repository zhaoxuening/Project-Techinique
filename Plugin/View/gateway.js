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
                        LinkControl.bestLinks();
                        break;
                    case "myLinks" :
                        UserDataController.myLinks(responseText);
                        break;
                    case "myGroups" :
                        UserDataController.myGroups(responseText);
                        break;
                    case "myTags" :
                        UserDataController.myTags(responseText);
                        break;
                    case "logs" :
                        UserDataController.logs(responseText);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    XHR.send();
};