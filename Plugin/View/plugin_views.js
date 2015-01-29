PluginView = {
    registerUser: function () {
        var log = document.getElementById("login").value;
        var email = document.getElementById("email").value;
        var pw = document.getElementById("password").value;

        UserControl.checkUserDataValidity(log,email,pw,"register");

        if(document.getElementById("errorInscription").innerHTML === "") {
            var hash = Sha1.hash(pw);
            gateway("http://localhost/Controller/user/register.php","login="+log+"&email="+email+"&password="+hash+"","register");
        }
    },

    signinUser: function () {
        var log = document.getElementById("login").value;
        var pw = document.getElementById("password").value;

        UserControl.checkUserDataValidity(log,"",pw,"connection");

        if(document.getElementById("errorConnection").innerHTML === "") {
            var hash = Sha1.hash(pw);
            gateway("http://localhost/Controller/user/connexion.php","login="+log+"&password="+hash+"","connection");
        }
    },

    registerLink: function () {
        var address = document.getElementById("address").value;
        var title = document.getElementById("title").value;
        var description = document.getElementById("description").value;
		var type = document.getElementById("privacyS").options[document.getElementById('privacyS').selectedIndex].text;
        var priorite = document.getElementById("priorities").options[document.getElementById('priorities').selectedIndex].text;
        var tags = document.getElementById("tags").value;
        var creator = sessionStorage.getItem("currentUserId");

        gateway("http://localhost/Controller/link/addlink.php","address="+address+"&title="+title+"&description="+description+"&type="+type+"&priorite="+priorite+"&tags="+tags+"&creator="+creator+"","addlink");
    },

    loadRegisterView: function () {
        var body, div, div2, center, form, h2, label, button, a;

        domHelp.cleanBody();

        body = document.getElementsByTagName("body").item(0);
        div = domHelp.addDiv(body, {class: "container"});
        center = domHelp.addCenter(div, {});
        domHelp.addP(center, {class: "errorInscription", id: "errorInscription"});
        form = domHelp.addForm(div, {class: "form-signin"});
        h2 = domHelp.addH2(form, {class: "form-signin-heading"});
        domHelp.addText(h2, "Register");
        label = domHelp.addLabel(form, {for: "login", class: "sr-only"});
        domHelp.addText(label, "Login");
        domHelp.addInputText(form, {type: "text", id: "login", name: "login", class: "form-control", placeholder: "Login", autofocus: ""});
        label = domHelp.addLabel(form, {for: "inputEmail", class: "sr-only"});
        domHelp.addText(label, "Email address");
        domHelp.addInputText(form, {type: "email", id: "email", name: "email", class: "form-control", placeholder: "Email address", autofocus: ""});
        label = domHelp.addLabel(form, {for: "inputPassword", class: "sr-only"});
        domHelp.addText(label, "Password");
        domHelp.addInputText(form, {type: "password", id: "password", name: "password", class: "form-control", placeholder: "Password"});
        div2 = domHelp.addDiv(form, {class: "checkbox"});
        label = domHelp.addLabel(div2, {});
        domHelp.addInputCheckbox(label, {type: "checkbox", value: "remember-me", id: "remember-me"});
        domHelp.addText(label, "Remember me");
        button = domHelp.addInputSubmit(form, {type: "button", id: "submit", class: "btn btn-lg btn-primary btn-block"});
        domHelp.addText(button, "Register");
        center = domHelp.addCenter(div, {});
        label = domHelp.addLabel(center, {});
        domHelp.addText(label, "If you already have an account ");
        a = domHelp.addA(label, {id: "signinLink", href: "#"});
        domHelp.addText(a, "sign in");

        var signinLink = document.getElementById('signinLink');
        if (signinLink) {
            signinLink.addEventListener("click", PluginView.loadLoginView, false);
        }

        var submit = document.getElementById('submit');
        if (submit) {
            submit.addEventListener("click",PluginView.registerUser,false);
        }
    },

    loadLoginView: function () {
        var body, div, div2, center, form, h2, label, button, a;

        domHelp.cleanBody();

        body = document.getElementsByTagName("body").item(0);
        div = domHelp.addDiv(body, {class: "container"});
        center = domHelp.addCenter(div, {});
        domHelp.addP(center, {class: "errorConnection", id: "errorConnection"});
        form = domHelp.addForm(div, {class: "form-signin"});
        h2 = domHelp.addH2(form, {class: "form-signin-heading"});
        domHelp.addText(h2, "Please sign in");
        label = domHelp.addLabel(form, {for: "login", class: "sr-only"});
        domHelp.addText(label, "Login");
        domHelp.addInputText(form, {type: "text", id: "login", name: "login", class: "form-control", placeholder: "Login", required: "", autofocus: ""});
        label = domHelp.addLabel(form, {for: "inputPassword", class: "sr-only"});
        domHelp.addText(label, "Password");
        domHelp.addInputText(form, {type: "password", id: "password", name: "password", class: "form-control", placeholder: "Password", required: ""});
        div2 = domHelp.addDiv(form, {class: "checkbox"});
        label = domHelp.addLabel(div2, {});
        domHelp.addInputCheckbox(label, {type: "checkbox", value: "remember-me", id: "remember-me"});
        domHelp.addText(label, "Remember me");
        button = domHelp.addInputSubmit(form, {type: "button", id: "submit", class: "btn btn-lg btn-primary btn-block"});
        domHelp.addText(button, "Sign in");
        center = domHelp.addCenter(div, {});
        label = domHelp.addLabel(center, {});
        domHelp.addText(label, "If you don't have account yet ");
        a = domHelp.addA(label, {id: "registerLink", href: "#"});
        domHelp.addText(a, "register now");

        var registerLink = document.getElementById('registerLink');
        if (registerLink) {
            registerLink.addEventListener("click", PluginView.loadRegisterView, false);
        }

        var submit = document.getElementById('submit');
        if (submit) {
            submit.addEventListener("click", PluginView.signinUser,false);
        }
    },

    loadAddLinkView: function () {
        var body, img, div, div2, p, form, h2, label, table, tr, td, select, option, input, button;

        domHelp.cleanBody();

        body = document.getElementsByTagName("body").item(0);
        img = domHelp.addImg(body,{src:"Style/assets/ico/deconnecter.png",id:"deconnecter",class:"deconnecter",title:"Déconexion"});
        div = domHelp.addDiv(body, {class: "container"});
        form = domHelp.addForm(div, {class: "form-addLink"});
        h2 = domHelp.addH2(form, {class: "form-signin-heading"});
        domHelp.addText(h2, "Add Link");
        label = domHelp.addLabel(form, {for: "address", class: "sr-only"});
        domHelp.addText(label, "Address");
        domHelp.addInputText(form, {type: "text", id: "address", name: "address", class: "form-control", placeholder: "Address"});
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "Required");
        label = domHelp.addLabel(form, {for: "title", class: "sr-only"});
        domHelp.addText(label, "Title");
        domHelp.addInputText(form, {type: "text", id: "title", name: "title", class: "form-control", placeholder: "Title", autofocus: ""});
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "Required");
        domHelp.addTextarea(form, {id: "description", name: "description", class: "form-control", placeholder: "Description", autofocus: ""});
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "You can use anchors to delimit attributes, eg. [author] text [/author]");
        domHelp.addInputText(form, {type: "text", id: "tags", name: "tags", class: "form-control", placeholder: "Tags", autofocus: ""});
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "Comma-separated");
	    // priorite
	    table = domHelp.addTable(form, {id: "newPriorite"});
        tr = domHelp.addTr(table, {});
	    td = domHelp.addTd(tr, {id: "priority"});
        select = domHelp.addSelect(td, {id: "priorities", name: "priority", class: "form-control"});
        option = domHelp.addOption(select, {value: "0", selected : "selected"});
        domHelp.addText(option, "1");
        option = domHelp.addOption(select, {value: "1"});
        domHelp.addText(option, "2");
        option = domHelp.addOption(select, {value: "2"});
        domHelp.addText(option, "3");
	    option = domHelp.addOption(select, {value: "3"});
        domHelp.addText(option, "4");
	    option = domHelp.addOption(select, {value: "4"});
        domHelp.addText(option, "5");
	    p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "Priority for your link");
	    // fin
        table = domHelp.addTable(form, {id: "choice"});
        tr = domHelp.addTr(table, {});
        td = domHelp.addTd(tr, {id: "privacy"});
        select = domHelp.addSelect(td, {id: "privacyS", name: "privacy", class: "form-control"});
        option = domHelp.addOption(select, {value: "0", selected: "selected"});
        domHelp.addText(option, "Public");
        option = domHelp.addOption(select, {value: "1"});
        domHelp.addText(option, "Private");
        option = domHelp.addOption(select, {value: "2"});
        domHelp.addText(option, "Group");
        td = domHelp.addTd(tr, {id: "groups"});
        select = domHelp.addSelect(td, {id: "groupsS", name: "groups", class: "form-control"});
        option = domHelp.addOption(select, {value: "0", selected: "selected"});
        domHelp.addText(option, "New group");
        option = domHelp.addOption(select, {value: "1"});
        domHelp.addText(option, "Group 1");
        option = domHelp.addOption(select, {value: "2"});
        domHelp.addText(option, "Group 2");
        option = domHelp.addOption(select, {value: "3"});
        domHelp.addText(option, "Group 3");
        select.style.visibility = "hidden";
        td = domHelp.addTd(tr, {id: "newGroup"});
        input = domHelp.addInputText(td, {type: "text", id: "newGroupI", name: "newGroup", class: "form-control", placeholder: "New", autofocus: ""});
        input.style.visibility = "hidden";
        div2 = domHelp.addDiv(form, {class: "buttons"});
        button = domHelp.addInputSubmit(div2, {type: "button", id: "addLink", class: "btn btn-lg btn-primary btn-block"});
        domHelp.addText(button, "Add Link");
        button = domHelp.addInputSubmit(div2, {type: "button", id: "cancel", class: "btn btn-lg btn-primary btn-block"});
        domHelp.addText(button, "Cancel");

        chrome.tabs.getSelected(null,function(tab) {
            document.getElementById("address").value = tab.url;
            document.getElementById("title").value = tab.title;
        });

        var desc = 'var meta = document.querySelector("meta[name=\'description\']");' +
            'if (meta) meta = meta.getAttribute("content");' +
            '({' +
            ' description: meta || ""' +
            '});';
        var key = 'var meta = document.querySelector("meta[name=\'keywords\']");' +
            'if (meta) meta = meta.getAttribute("content");' +
            '({' +
            ' keywords: meta || ""' +
            '});';

        chrome.tabs.executeScript({
            code: desc
        }, function(results) {
            if (!results) {
                return;
            }
            var result = results[0];
            document.getElementById("description").value = result.description;
        });

        chrome.tabs.executeScript({
            code: key
        }, function(results) {
            if (!results) {
                return;
            }
            var result = results[0];
            document.getElementById("tags").value = result.keywords;
        });

        var privacy = document.getElementById("privacyS");
        if (privacy) {
            privacy.addEventListener("change", PluginView.checkPrivacy, false);
        }

        var groups = document.getElementById("groupsS");
        if (groups) {
            groups.addEventListener("change", PluginView.checkGroups, false);
        }

        var addLink = document.getElementById("addLink");
        if (addLink) {
            addLink.addEventListener("click", PluginView.registerLink, false);
        }

        var cancel = document.getElementById("cancel");
        if (cancel) {
            cancel.addEventListener("click", PluginView.selfClose, false);
        }

        var deconnection = document.getElementById("deconnecter");
        if (deconnection) {
            deconnection.addEventListener("click", domHelp.deconnection, false);
        }
    },

    checkPrivacy: function () {
        if (document.getElementById("privacyS").selectedIndex === 2) {
            document.getElementById("groupsS").style.visibility = "visible";
            document.getElementById("newGroupI").style.visibility = "visible";
            document.getElementById("groupsS").selectedIndex = 0;
            document.getElementById("newGroupI").value = "";
        } else {
            document.getElementById("groupsS").style.visibility = "hidden";
            document.getElementById("newGroupI").style.visibility = "hidden";
        }
    },

    checkGroups: function () {
        if (document.getElementById("groupsS").selectedIndex === 0) {
            document.getElementById("newGroupI").style.visibility = "visible";
        } else {
            document.getElementById("newGroupI").style.visibility = "hidden";
        }
    },

    selfClose: function () {
        window.close();
    }
};
