SiteView = {
    registerUser: function () {
        var login = document.getElementById("registerText").value;
        var email = document.getElementById("emailRegister").value;
        var pw = document.getElementById("passwordRegister").value;

        UserControl.checkUserDataValidity(login, email, pw, "register");

        if (document.getElementById("errorInscription").innerHTML === "") {
            var hash = Sha1.hash(pw);
            gateway("http://localhost/Controller/user/register.php", "login=" + login + "&email=" + email + "&password=" + hash + "", "register");
        }
    },

    signinUser: function () {
        var login = document.getElementById("loginText").value;
        var pw = document.getElementById("passwordLogin").value;

        UserControl.checkUserDataValidity(login, "", pw, "connection");

        if (document.getElementById("errorConnection").innerHTML === "") {
            var hash = Sha1.hash(pw);
            gateway("http://localhost/Controller/user/connexion.php", "login=" + login + "&password=" + hash + "", "connection");
        }
    },

    registerLink: function () {
        var address = document.getElementById("address").value;
        var title = document.getElementById("title").value;
        var description = document.getElementById("description").value;
        var type = document.getElementById("privacyS").options[document.getElementById('privacyS').selectedIndex].text;
        var tags = document.getElementById("tags").value;
        var creator = sessionStorage.getItem("currentUserId");

        gateway("http://localhost/Controller/link/addlink.php", "address=" + address + "&title=" + title + "&description=" + description + "&type=" + type + "&tags=" + tags + "&creator=" + creator + "", "addlink");
    },

    loadToolBarView: function (parent) {
        var body, div, div2, div3, div4, a, a2, a3, a4, a5, p, ul, li, li2, li3;

        div = domHelp.addDiv(parent, {class: "navbar navbar-inverse navbar-fixed-top"});
        div2 = domHelp.addDiv(div, {class: "navbar-inner"});
        div3 = domHelp.addDiv(div2, {class: "container-fluid"});
        a = domHelp.addA(div3, {class: "brand", href: "#", id: "mySocialBM"});
        domHelp.addText(a, "My Social Bookmark");

        div4 = domHelp.addDiv(div3, {class: "nav-collapse collapse"});
        p = domHelp.addP(div4, {class: "navbar-text pull-right"});
        domHelp.addText(p, "Logged in as: ");
        a2 = domHelp.addA(p, {class: "navbar-link", href: "#login", id: "login"});
        domHelp.addText(a2, "Username");

        ul = domHelp.addUl(div4, {class: "nav"});
        li = domHelp.addLi(ul, {class: "active"});
        a3 = domHelp.addA(li, {href: "#", id: "home"});
        domHelp.addText(a3, "home");
        li2 = domHelp.addLi(ul, {});
        a4 = domHelp.addA(li2, {href: "#addLink", id: "addLink"});
        domHelp.addText(a4, "Add Link");
        li3 = domHelp.addLi(ul, {});
        a5 = domHelp.addA(li3, {href: "#contact", id: "contact"});
        domHelp.addText(a5, "Contact");

        var mySocialBM = document.getElementById('mySocialBM');
        if (mySocialBM) {
            mySocialBM.addEventListener("click", SiteView.loadMySocialBMView, false);
        }

        var login = document.getElementById('login');
        if (login) {
            login.addEventListener("click", SiteView.loadLoginSiteView, false);
        }

        var home = document.getElementById("home");
        if (home) {
            home.addEventListener("click", SiteView.loadHomeView, false);
        }

        var addLink = document.getElementById("addLink");
        if (addLink) {
            addLink.addEventListener("click", function () {
                if (document.getElementById('login').text == "null") {
                    SiteView.loadLoginSiteView();
                }
                else {
                    SiteView.loadAddLinkSiteView();
                }
            });
        }

    },

    loadToolBarLeftView: function (parent) {
        var div, div2, ul, li, li2, li3, li4, a, a2, a3, a4;

        div = domHelp.addSpan(parent, {class: "span3"});
        div2 = domHelp.addDiv(div, {class: "well sidebar-nav"});
        ul = domHelp.addUl(div2, {class: "nav nav-list"});
        li = domHelp.addLi(ul, {class: "nav-header"});
        a = domHelp.addA(li, {href: "#myLinks", id: "myLinks"});
        domHelp.addText(a, "My links");

        li2 = domHelp.addLi(ul, {class: "nav-header"});
        a2 = domHelp.addA(li2, {href: "#myGroups", id: "myGroups"});
        domHelp.addText(a2, "My groups");

        li3 = domHelp.addLi(ul, {class: "nav-header"});
        a3 = domHelp.addA(li3, {href: "#myTags", id: "myTags"});
        domHelp.addText(a3, "My tags");

        li4 = domHelp.addLi(ul, {class: "nav-header"});
        a4 = domHelp.addA(li4, {href: "#Logs", id: "Logs"});
        domHelp.addText(a4, "Logs");


        var myLinks = document.getElementById("myLinks");
        if (myLinks) {
            myLinks.addEventListener("click", function () {
                    var log = document.getElementById("login").text;
                    gateway("http://localhost/Controller/link/myLinks.php", "login=" + log + "", "myLinks");
                }
            );
        }

        var myGroups = document.getElementById("myGroups");
        if (myGroups) {
            myGroups.addEventListener("click", function () {
                    var log = document.getElementById("login").text;
                    gateway("http://localhost/Controller/link/myGroups.php", "login=" + log + "", "myGroups");
                }
            );
        }

        var myTags = document.getElementById("myTags");
        if (myTags) {
            myTags.addEventListener("click", function () {
                    var log = document.getElementById("login").text;
                    gateway("http://localhost/Controller/link/myTags.php", "login=" + log + "", "myTags");
                }
            );
        }

        var Logs = document.getElementById("Logs");
        if (Logs) {
            Logs.addEventListener("click", function () {
                    var log = document.getElementById("login").text;
                    if (log == "null") {
                        SiteView.loadLoginSiteView();
                    }
                    else {
                        gateway("http://localhost/Controller/link/logs.php", "login=" + log + "", "logs");
                    }
                }
            );
        }
    },

    loadToolSearchView: function (parent) {
        var div, div2, div3, div4, div5, a, a2, a3, a4, a5, a6, a7, a8, span, span2, ul, li, li2, li3, li4, li5, li6, li7, i;
        var button;
        div = domHelp.addDiv(parent, {class: "row-fluid"});
        div2 = domHelp.addDiv(div, {class: "pull-right"});
        div3 = domHelp.addDiv(div2, {class: "clearfix"});
        div4 = domHelp.addDiv(div3, {class: "input-append input-prepend"});
        div5 = domHelp.addDiv(div4, {class: "btn-group", id: "dropdown1"});
        li = domHelp.addSelect(div5, {id: "selectSearch", class: "selectpicker btn-primary"});
        a2 = domHelp.addOption(li, {});
        domHelp.addText(a2, "Tag");
        li2 = domHelp.addOption(li, {});
        domHelp.addText(li2, "User");
        li3 = domHelp.addOption(li, {});
        domHelp.addText(li3, "Groups");
        li4 = domHelp.addOption(li, {});
        domHelp.addText(li4, "Author");
        li5 = domHelp.addOption(li, {});
        domHelp.addText(li5, "Keywords");
        li6 = domHelp.addOption(li, {});
        domHelp.addText(li6, "Search: all");
        li7 = domHelp.addOption(li, {});
        domHelp.addText(li7, "Search: Username");

        domHelp.addInputText(div4, {
            name: "s",
            id: "search",
            placeholder: "Search",
            class: "placeholder",
            type: "text",
            value: ""
        });
        button = domHelp.addInputSubmit(div4, {class: "btn btn-primary", type: "submit"});
        i = domHelp.addI(button, {class: "icon-search icon-white"});
    },

    linkView: function (parent, i) {
        var div, div2, div3, div4, div5, div6, div7, h2, strong, p2, p3, a, a2, a3, a4, table, tr, td, td2, td3, td4, td5, label;
        div = domHelp.addDiv(parent, {});
        h2 = domHelp.addH3(div, {});
        //strong = domHelp.addStrong(h2,{});
        a = domHelp.addA(h2, {class: "text-info",target: "_blank", id: "linkname" + i});
        domHelp.addText(a, "Link name");

        p3 = domHelp.addP(div, {});
        a4 = domHelp.addA(p3, {class: "text-info", href: "#", id: "linkurl" + i});
        domHelp.addText(a, "Link url");

        p2 = domHelp.addP(div, {});
        label = domHelp.addLabel(p2, {});
        domHelp.addText(label, "At ");
        a2 = domHelp.addA(label, {id: "post_time" + i});
        domHelp.addText(label, " by @");
        a3 = domHelp.addA(label, {id: "usernamePost" + i});
        div2 = domHelp.addDiv(div, {});
        table = domHelp.addTable(div2, {});
        tr = domHelp.addTr(table, {});
        td = domHelp.addTd(tr, {});
        div3 = domHelp.addDiv(td, {class: "like-btn"});
        td2 = domHelp.addTd(tr, {});
        div4 = domHelp.addDiv(td2, {class: "like-count"});
        td3 = domHelp.addTd(tr, {});
        div5 = domHelp.addDiv(td3, {class: "dislike-btn"});
        td4 = domHelp.addTd(tr, {});
        div6 = domHelp.addDiv(td4, {class: "dislike-count"});
        td5 = domHelp.addTd(tr, {});
        div7 = domHelp.addDiv(td5, {class: "share-btn"});
        domHelp.addText(div7, "share");

        //test LIKE
        //var like = document.getElementsByClassName("like-btn");
        //if (like) {
        //   like.addEventListener("click", function () {
        //           alert("ok");
        //       }
        //   );
        //}
    },

    footerView: function (parent) {
        var footer, p, i ;
        footer = domHelp.addFooter(parent,{});
        p = domHelp.addP(footer,{});
        i = domHelp.addI(p, {class: "icon-leaf"});
        domHelp.addText(p," Group Project Technical 2014-2015: Social Bookmark");
    },

    loadHomeView: function () {
        var body, div, div2, div3, table, tr, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9;

        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);
        div = domHelp.addDiv(body, {class: "container-fluid", style: "padding: 20px 20px 0px 20px"});
        div2 = domHelp.addDiv(div, {class: "row-fluid"});

        SiteView.loadToolBarLeftView(div2);
        div3 = domHelp.addDiv(div2, {class: "span9"});
        SiteView.loadToolSearchView(div3);
        table = domHelp.addTable(div3, {});
        tr = domHelp.addTr(table, {});
        SiteView.linkView(tr, 1);

        tr2 = domHelp.addTr(table, {});
        SiteView.linkView(tr2, 2);
        tr3 = domHelp.addTr(table, {});
        SiteView.linkView(tr3, 3);
        tr4 = domHelp.addTr(table, {});
        SiteView.linkView(tr4, 4);
        tr5 = domHelp.addTr(table, {});
        SiteView.linkView(tr5, 5);
        tr6 = domHelp.addTr(table, {});
        SiteView.linkView(tr6, 6);
        tr7 = domHelp.addTr(table, {});
        SiteView.linkView(tr7, 7);
        tr8 = domHelp.addTr(table, {});
        SiteView.linkView(tr8, 8);
        tr9 = domHelp.addTr(table, {});
        SiteView.linkView(tr9, 9);

        domHelp.addHr(div);
        SiteView.footerView(div);
        document.getElementById("login").text = sessionStorage.getItem("currentUserLogin");
    },

    loadLoginSiteView: function () {
        var body, div, div2, center, center2, form, h2, label, button, a;

        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);
        div = domHelp.addDiv(body, {class: "container-fluid", style: "padding: 20px 20px 0px 20px"});
        center = domHelp.addCenter(div, {});
        domHelp.addP(center, {class: "errorConnection", id: "errorConnection"});
        form = domHelp.addForm(div, {class: "form-signin"});
        center2 = domHelp.addCenter(form, {});
        h2 = domHelp.addH2(center2, {class: "form-signin-heading", align: "center"});
        domHelp.addText(h2, "Please sign in");
        label = domHelp.addLabel(form, {for: "login", class: "sr-only"});
        domHelp.addText(label, "Login");
        domHelp.addInputText(form, {
            type: "text",
            id: "loginText",
            name: "login",
            class: "input-block-level",
            placeholder: "Login",
            required: "",
            autofocus: ""
        });
        label = domHelp.addLabel(form, {for: "inputPassword", class: "sr-only"});
        domHelp.addText(label, "Password");
        domHelp.addInputText(form, {
            type: "password",
            id: "passwordLogin",
            name: "password",
            class: "input-block-level",
            placeholder: "Password",
            required: ""
        });
        div2 = domHelp.addDiv(form, {class: "checkbox"});
        label = domHelp.addLabel(div2, {});
        domHelp.addInputCheckbox(label, {type: "checkbox", value: "remember-me", id: "remember-me"});
        domHelp.addText(label, "Remember me");
        center2 = domHelp.addCenter(form, {});
        button = domHelp.addInputSubmit(center2, {
            type: "button",
            id: "submitSignin",
            class: "btn btn-large btn-primary"
        });
        domHelp.addText(button, "Sign in");
        center = domHelp.addCenter(div, {});
        label = domHelp.addLabel(center, {});
        domHelp.addText(label, "If you don't have account yet ");
        a = domHelp.addA(label, {id: "registerLink", href: "#", class: "text-info"});
        domHelp.addText(a, "register now");

        var registerLink = document.getElementById('registerLink');
        if (registerLink) {
            registerLink.addEventListener("click", SiteView.loadRegisterSiteView, false);
        }

        var submit = document.getElementById('submitSignin');
        if (submit) {
            submit.addEventListener("click", SiteView.signinUser, false);
        }

        SiteView.footerView(div);
    },

    loadRegisterSiteView: function () {
        var body, div, div2, center, center2, form, h2, label, button, a;

        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);
        div = domHelp.addDiv(body, {class: "container-fluid", style: "padding: 20px 20px 0px 20px"});
        center = domHelp.addCenter(div, {});
        domHelp.addP(center, {class: "errorInscription", id: "errorInscription"});
        form = domHelp.addForm(div, {class: "form-signin"});
        center2 = domHelp.addCenter(form, {});
        h2 = domHelp.addH2(center2, {class: "form-signin-heading"});
        domHelp.addText(h2, "Register");
        domHelp.addInputText(form, {
            type: "text",
            id: "registerText",
            name: "login",
            class: "input-block-level",
            placeholder: "Login",
            autofocus: ""
        });
        domHelp.addInputText(form, {
            type: "email",
            id: "emailRegister",
            name: "email",
            class: "input-block-level",
            placeholder: "Email address",
            autofocus: ""
        });
        domHelp.addInputText(form, {
            type: "password",
            id: "passwordRegister",
            name: "password",
            class: "input-block-level",
            placeholder: "Password"
        });
        div2 = domHelp.addDiv(form, {class: "checkbox"});
        label = domHelp.addLabel(div2, {});
        domHelp.addInputCheckbox(label, {type: "checkbox", value: "remember-me", id: "remember-me"});
        domHelp.addText(label, "Remember me");
        center2 = domHelp.addCenter(form, {});
        button = domHelp.addInputSubmit(center2, {type: "button", id: "submit", class: "btn btn-large btn-primary"});
        domHelp.addText(button, "Register");
        center = domHelp.addCenter(div, {});
        label = domHelp.addLabel(center, {});
        domHelp.addText(label, "If you already have an account ");
        a = domHelp.addA(label, {id: "signinLink", href: "#", class: "text-info"});
        domHelp.addText(a, "sign in");

        var signinLink = document.getElementById('signinLink');
        if (signinLink) {
            signinLink.addEventListener("click", SiteView.loadLoginSiteView, false);
        }

        var submit = document.getElementById('submit');
        if (submit) {
            submit.addEventListener("click", SiteView.registerUser, false);
        }
        SiteView.footerView(div);
    },

    loadAddLinkSiteView: function () {
        var body, div, div2, p, form, h2, label, table, tr, td, select, option, input, button;

        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);

        div = domHelp.addDiv(body, {class: "container"});
        form = domHelp.addForm(div, {class: "form-addLink"});
        h2 = domHelp.addH2(form, {class: "form-signin-heading"});
        domHelp.addText(h2, "Add Link");
        domHelp.addInputText(form, {
            type: "text",
            id: "address",
            name: "address",
            class: "input-block-level",
            placeholder: "Address",
            style: "weith: 100%"
        });
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "Required");
        domHelp.addInputText(form, {
            type: "text",
            id: "title",
            name: "title",
            class: "input-block-level",
            placeholder: "Title",
            autofocus: ""
        });
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "Required");
        domHelp.addTextarea(form, {
            id: "description",
            name: "description",
            class: "input-block-level",
            placeholder: "Description",
            autofocus: ""
        });
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "You can use anchors to delimit attributes, eg. [author] text [/author]");
        domHelp.addInputText(form, {
            type: "text",
            id: "tags",
            name: "tags",
            class: "input-block-level",
            placeholder: "Tags",
            autofocus: ""
        });
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "Comma-separated");
        p = domHelp.addP(form, {align: "right"});
        domHelp.addText(p, "Note: use '>' to include one tag in another. e.g. Europe>France>Paris");
        table = domHelp.addTable(form, {id: "choice"});
        tr = domHelp.addTr(table, {});
        td = domHelp.addTd(tr, {id: "privacy"});
        select = domHelp.addSelect(td, {id: "privacyS", name: "privacy", class: "input-block-level"});
        option = domHelp.addOption(select, {value: "0", selected: "selected"});
        domHelp.addText(option, "Public");
        option = domHelp.addOption(select, {value: "1"});
        domHelp.addText(option, "Private");
        option = domHelp.addOption(select, {value: "2"});
        domHelp.addText(option, "Group");
        td = domHelp.addTd(tr, {id: "groups"});
        select = domHelp.addSelect(td, {id: "groupsS", name: "groups", class: "input-block-level"});
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
        input = domHelp.addInputText(td, {
            type: "text",
            id: "newGroupI",
            name: "newGroup",
            class: "input-block-level",
            placeholder: "New",
            autofocus: ""
        });
        input.style.visibility = "hidden";
        div2 = domHelp.addDiv(form, {});
        button = domHelp.addInputSubmit(div2, {type: "button", id: "btn_addLink", class: "btn btn-large btn-primary"});
        domHelp.addText(button, "Add Link");
        button = domHelp.addInputSubmit(div2, {type: "button", id: "btn_cancel", class: "btn btn-large btn-primary"});
        domHelp.addText(button, "Cancel");
        SiteView.footerView(div);
        document.getElementById("login").text = sessionStorage.getItem("currentUserLogin");

        var privacy = document.getElementById("privacyS");
        if (privacy) {
            privacy.addEventListener("change", SiteView.checkPrivacy, false);
        }

        var groups = document.getElementById("groupsS");
        if (groups) {
            groups.addEventListener("change", SiteView.checkGroups, false);
        }

        var addLink = document.getElementById("btn_addLink");
        if (addLink) {
            addLink.addEventListener("click", SiteView.registerLink, false);
        }

        var cancel = document.getElementById("btn_cancel");
        if (cancel) {
            cancel.addEventListener("click", SiteView.loadHomeView, false);
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
    },

    loadMyLinksView: function () {
        var body, div, div2, div3, table;

        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);
        div = domHelp.addDiv(body, {class: "container-fluid", style: "padding: 20px 20px 0px 20px"});
        div2 = domHelp.addDiv(div, {class: "row-fluid"});

        SiteView.loadToolBarLeftView(div2);
        div3 = domHelp.addDiv(div2, {class: "span9"});
        SiteView.loadToolSearchView(div3);
        table = domHelp.addTable(div3, {id: "tableMyLinks"});

        SiteView.footerView(div);
    },

    loadMyGroupsView: function () {
        var body, div, div2, div3, div4, table;

        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);
        div = domHelp.addDiv(body, {class: "container-fluid", style: "padding: 20px 20px 0px 20px"});
        div2 = domHelp.addDiv(div, {class: "row-fluid"});

        SiteView.loadToolBarLeftView(div2);
        div3 = domHelp.addDiv(div2, {class: "span9"});
        SiteView.loadToolSearchView(div3);
        div4 = domHelp.addDiv(div3, {class: "row-fluid"});
        table = domHelp.addTable(div4, {id: "tableGroups"});
        SiteView.footerView(div);
    },

    loadMyTagsView: function () {
        var body, div, div2, div3, div4, button, table, tr, td, td2;

        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);
        div = domHelp.addDiv(body, {class: "container-fluid", style: "padding: 20px 20px 0px 20px"});
        div2 = domHelp.addDiv(div, {class: "row-fluid"});

        SiteView.loadToolBarLeftView(div2);
        div3 = domHelp.addDiv(div2, {class: "span9"});
        SiteView.loadToolSearchView(div3);
        div4 = domHelp.addDiv(div3, {class: "row-fluid" });
       //div5 = domHelp.addDiv(div4, {class: "span4"});
        table = domHelp.addTable(div4, {id: "tableTags", class: "table table-hover table-bordered"});
        SiteView.footerView(div);
    },

    loadMySocialBMView: function () {
        var body, div, h, img, p2;
        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);

        div = domHelp.addDiv(body, {class: "jumbotron"});
        p2 = domHelp.addP(div, {});
        h = domHelp.addH1(p2, {});
        domHelp.addText(h, "Group Social Bookmark");
        //domHelp.addBr(h);
        p2 = domHelp.addP(div, {class: "lead"});
        domHelp.addText(p2, "Teacher : Luigi Lancieri");
        p2 = domHelp.addP(div, {class: "lead"});
        domHelp.addText(p2, "Developers : Mounir Daoudi, Theo Calibre, Xuening Zhao");
        img = domHelp.addImg(div, {src: "View/image.jpeg"});
        SiteView.footerView(body);

    },

    loadLogsView: function () {
        var body, div, div2, div3, table;

        domHelp.cleanBody();
        body = document.getElementsByTagName("body").item(0);
        SiteView.loadToolBarView(body);
        div = domHelp.addDiv(body, {class: "container-fluid", style: "padding: 20px 20px 0px 20px"});
        div2 = domHelp.addDiv(div, {class: "row-fluid"});

        SiteView.loadToolBarLeftView(div2);
        div3 = domHelp.addDiv(div2, {class: "span9"});
        SiteView.loadToolSearchView(div3);
        table = domHelp.addTable(div3, {class: "table table-striped table-hover table-bordered", id: "tableLogs"});

        SiteView.footerView(div);
    }
};

