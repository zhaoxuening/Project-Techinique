UserControl = {
    checkConnection: function (reqResult) {
        var tab_result = reqResult.split(" ");
        if(tab_result[0] !== "") {
            sessionStorage.setItem("currentUserId",tab_result[0]);
            sessionStorage.setItem("currentUserLogin",tab_result[1]);
            if(document.getElementById("remember-me").checked === true) {
                autoConnect_Control.saveLoginInfo(tab_result[0],tab_result[1],tab_result[2]);
            } else {
                autoConnect_Control.deleteLoginInfo();
            }

            var currentUrl = document.location.href.split("/");
            switch (currentUrl[currentUrl.length - 1]) {
                case "#addLink" :
                    SiteView.loadAddLinkSiteView();
                    break;
                case "#myLinks" :
                    SiteView.loadMyLinksView();
                    gateway("http://localhost/Controller/link/myLinks.php", "login=" + tab_result[1] + "", "myLinks");
                    break;
                case "#myGroups" :
                    SiteView.loadMyGroupsView();
                    gateway("http://localhost/Controller/link/myGroups.php", "login=" + tab_result[1] + "", "myGroups");
                    break;
                case "#myTags" :
                    SiteView.loadMyTagsView();
                    gateway("http://localhost/Controller/link/myTags.php", "login=" + tab_result[1] + "", "myTags");
                    break;
                default :
                    gateway("http://localhost/Controller/link/bestLinks.php", null, "bestLinks");
                    break;
            }

            document.getElementById("login").text = tab_result[1];
        } else {
            var error  = document.getElementById("errorConnection");

            for (var i = 0; error.childNodes.length; i++) {
                error.removeChild(error.childNodes.item(0));
            }

            var span = domHelp.addSpan(error, {class: "alert alert-danger"});
            domHelp.addText(span,"Incorrect login or password! ");
        }
    },

    registerUser: function(reqResult) {
        var error, span, i;

        error = document.getElementById("errorInscription");

        for (i = 0; error.childNodes.length; i++) {
            error.removeChild(error.childNodes.item(0));
        }

        if(reqResult.trim() !== "") {
            var tab_result = reqResult.split(" ");
            if(tab_result.length === 3){
                sessionStorage.setItem("currentUserId",tab_result[0]);
                sessionStorage.setItem("currentUserLogin",tab_result[1]);
                if (document.getElementById("remember-me").checked === true) {
                    autoConnect_Control.saveLoginInfo(tab_result[0],tab_result[1],tab_result[2]);
                    SiteView.loadHomeView();
                    document.getElementById("login").text = tab_result[1];
            	} else {
                	autoConnect_Control.deleteLoginInfo();
                	SiteView.loadLoginSiteView();
                }
            } else if(tab_result[0] === "login") {
                span = domHelp.addSpan(error, {class: "alert alert-danger"});
                domHelp.addText(span,"Login already used! ");
            } else {
                span = domHelp.addSpan(error, {class: "alert alert-danger"});
                domHelp.addText(span,"Email already used! ");
            }
        }
    },

    checkUserDataValidity: function(login,email,password,mode) {
        var span, error, i;
        switch(mode) {
            case "connection" :
                error  = document.getElementById("errorConnection");

                for (i = 0; error.childNodes.length; i++) {
                    error.removeChild(error.childNodes.item(0));
                }

                if(login.length < 6) {
                    span = domHelp.addSpan(error, {class: "alert alert-danger"});
                    domHelp.addText(span,"The login is too short! ");
                } else if(password.length < 8){
                    span = domHelp.addSpan(error, {class: "alert alert-danger"});
                    domHelp.addText(span,"The password is too short! ");
                }

                break;
            case "register" :
                var re_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                error = document.getElementById("errorInscription");

                for (i = 0; error.childNodes.length; i++) {
                    error.removeChild(error.childNodes.item(0));
                }

                if(login.length < 6) {
                    span = domHelp.addSpan(error, {class: "alert alert-danger"});
                    domHelp.addText(span,"The login is too short! ");
                } else if(!re_email.test(email)) {
                    span = domHelp.addSpan(error, {class: "alert alert-danger"});
                    domHelp.addText(span,"The email format is not valid! ");
                } else if(password.length < 8){
                    span = domHelp.addSpan(error, {class: "alert alert-danger"});
                    domHelp.addText(span,"The password is too short! ");
                }

                break;
            default:
                break;
        }
    }
};