LinkControl = {
    addLink: function() {
        SiteView.loadHomeView();
    },

    myLinks : function(reqResult) {
        SiteView.loadMyLinksView();

        var myLinks = reqResult.split(";");
        document.getElementById("login").text = myLinks[0];

        var div, table, tr;

        table = document.getElementById("tableMyLinks");
        for(var i=0;i<(myLinks.length-1)/4;i++) {
            tr = domHelp.addTr(table,{});
            SiteView.linkView(tr,i);
            document.getElementById("linkname"+i).text = myLinks[i*4+2];
            document.getElementById("linkname"+i).setAttribute("href",myLinks[i*4+4]);
            document.getElementById("linkname"+i).setAttribute("target","_blank");
            document.getElementById("linkurl"+i).text = myLinks[i*4+1];
            document.getElementById("post_time"+i).text = myLinks[i*4+3];
            document.getElementById("usernamePost"+i).text = myLinks[0];
        }
    },

    myGroups : function(reqResult) {
        SiteView.loadMyGroupsView();

        var groups = reqResult.split(";");
        document.getElementById("login").text = groups[0];

        var table, tr, td, td2;
        table = document.getElementById("tableGroups");
        for(var i=1;i<groups.length-1;i++) {
            tr = domHelp.addTr(table, {id: "group" + i});
            td = domHelp.addTd(tr, {id: "groupName"+i});
            domHelp.addText(td, groups[i]);
            td2 = domHelp.addTd(tr, {});
            button = domHelp.addInputSubmit(td2, {
                type: "button",
                id: "btnDeleteGroup"+i,
                class: "btn btn-small btn-primary"
            });
            domHelp.addText(button, "Delete");
        }
    },

    myTags : function(reqResult) {
        SiteView.loadMyTagsView();

        var tags = reqResult.split(";");
        document.getElementById("login").text = tags[0];
        var table, tr, td, td2, td3, button, h, tbody, thead;
        table = document.getElementById("tableTags");
        thead = domHelp.addTbody(table, {});
        tbody = domHelp.addTbody(table, {});
        tr = domHelp.addTr(thead,{class: "success"});
        td = domHelp.addTd(tr,{});
        h = domHelp.addH3(td, {});
        domHelp.addText(h, "Tag Name");
        td = domHelp.addTd(tr,{});
        h = domHelp.addH3(td, {});
        domHelp.addText(h, "Tag Parent Name");
        td = domHelp.addTd(tr,{});
        h = domHelp.addH3(td, {});
        domHelp.addText(h, "Option");
        for(var i=0;i<(tags.length-1)/2;i++) {
            tr = domHelp.addTr(tbody, {id: "tag" + i, class: "info"});
            td = domHelp.addTd(tr, {id: "tagName"+i});
            domHelp.addText(td, tags[i+1]);
            td3 = domHelp.addTd(tr, {id: "tagParentName"+i});
            domHelp.addText(td3, tags[i+2]);
            td2 = domHelp.addTd(tr, {});
            button = domHelp.addInputSubmit(td2, {
                type: "button",
                id: "btnDeleteTag"+i,
                class: "btn btn-small btn-primary"
            });
            domHelp.addText(button, "Delete");
            //var btn_d = document.getElementById("btnDeleteTag"+i);
            //if (btn_d) {
            //    btn_d.addEventListener("click", function(){
            //
            //        }
            //
            //    );
            //}
        }
    },

    logs : function (reqResult) {
        SiteView.loadLogsView();

        var logs = reqResult.split(";");
        document.getElementById("login").text = logs[0];

        var  table, tr, td, td2, tbody,thead, h, h2;

        table = document.getElementById("tableLogs");
        thead = domHelp.addTbody(table, {});
        tr = domHelp.addTr(thead,{class: "info"});
        td = domHelp.addTd(tr,{});
        h= domHelp.addH3(td, {});
        domHelp.addText(h, "Time");
        td2 = domHelp.addTd(tr,{});
        h2 = domHelp.addH3(td2, {});
        domHelp.addText(h2, "Message");
        tbody = domHelp.addTbody(table, {});
        for(var i=1;i<(logs.length-1)/2-1;i++) {
            tr = domHelp.addTr(tbody,{});
            td = domHelp.addTd(tr, { id: "logNumber"+i});
            domHelp.addText(td, logs[i*2]);
            td2 = domHelp.addTd(tr, {id: "logTime"+i});
            domHelp.addText(td2, logs[i*2-1]);

        }

    },

    search: function (reqResult) {
        SiteView.loadSearchView();

        var myLinks = reqResult.split(";");
        document.getElementById("login").text = myLinks[0];

        var search = myLinks[1];
        var table, tr, td, td2, button, thead, tbody, h, h2;

        table = document.getElementById("tableSearch");

        if(search == "User"){
            for(var i=0;i<(myLinks.length-2)/4-1;i++) {
                tr = domHelp.addTr(table,{});
                SiteView.linkView(tr,i);
                document.getElementById("linkname"+i).text = myLinks[i*4+3];
                document.getElementById("linkname"+i).setAttribute("href",myLinks[i*4+5]);
                document.getElementById("linkname"+i).setAttribute("target","_blank");
                document.getElementById("linkurl"+i).text = myLinks[i*4+2];
                document.getElementById("post_time"+i).text = myLinks[i*4+4];
                document.getElementById("usernamePost"+i).text = myLinks[0];
            }
        }
        else if (search == "Tag") {
            for(var i=0;i<(myLinks.length-2)/4-1;i++) {
                tr = domHelp.addTr(table,{});
                SiteView.linkView(tr,i);
                document.getElementById("linkname"+i).text = myLinks[i*4+3];
                document.getElementById("linkname"+i).setAttribute("href",myLinks[i*4+5]);
                document.getElementById("linkname"+i).setAttribute("target","_blank");
                document.getElementById("linkurl"+i).text = myLinks[i*4+2];
                document.getElementById("post_time"+i).text = myLinks[i*4+4];
                document.getElementById("usernamePost"+i).text = myLinks[0];
            }
        }
        else if(search == "Group"){
            for(var i=0;i<myLinks.length-2;i++) {
                tr = domHelp.addTr(table, {id: "group" + i});
                td = domHelp.addTd(tr, {id: "groupName"+i});
                domHelp.addText(td, myLinks[i+2]);
                td2 = domHelp.addTd(tr, {});
                button = domHelp.addInputSubmit(td2, {
                    type: "button",
                    id: "btnDeleteGroup"+i,
                    class: "btn btn-small btn-primary"
                });
                domHelp.addText(button, "Delete");
            }
        }
        else if(search == "Log") {
            table.setAttribute("class", "table table-striped table-hover table-bordered");
            thead = domHelp.addTbody(table, {});
            tr = domHelp.addTr(thead,{class: "info"});
            td = domHelp.addTd(tr,{});
            h= domHelp.addH3(td, {});
            domHelp.addText(h, "Time");
            td2 = domHelp.addTd(tr,{});
            h2 = domHelp.addH3(td2, {});
            domHelp.addText(h2, "Message");
            tbody = domHelp.addTbody(table, {});
            for(var i=0;i<(myLinks.length-2)/2-1;i++) {
                tr = domHelp.addTr(tbody,{});
                td = domHelp.addTd(tr, { id: "logTime"+i});
                domHelp.addText(td, myLinks[i*2+3]);
                td2 = domHelp.addTd(tr, {id: "logMessage"+i});
                domHelp.addText(td2, myLinks[i*2+2]);

            }
        }
        else if(search == "Keywords") {
            for(var i=0;i<(myLinks.length-2)/4-1;i++) {
                tr = domHelp.addTr(table,{});
                SiteView.linkView(tr,i);
                document.getElementById("linkname"+i).text = myLinks[i*4+3];
                document.getElementById("linkname"+i).setAttribute("href",myLinks[i*4+5]);
                document.getElementById("linkname"+i).setAttribute("target","_blank");
                document.getElementById("linkurl"+i).text = myLinks[i*4+2];
                document.getElementById("post_time"+i).text = myLinks[i*4+4];
                document.getElementById("usernamePost"+i).text = myLinks[0];
            }
        }

    },

    bestLinks: function(reqResult) {
        SiteView.loadHomeView();

        var bestLinks = reqResult.split(";");

        var div, table, tr;

        table = document.getElementById("tableBestLinks");
        for(var i=0;i<bestLinks.length/5-1;i++) {
            tr = domHelp.addTr(table,{});
            SiteView.linkView(tr,i);
            document.getElementById("linkurl"+i).text = bestLinks[i*5];
            document.getElementById("linkname"+i).text = bestLinks[i*5+1];
            document.getElementById("post_time"+i).text = bestLinks[i*5+2];
            document.getElementById("linkname"+i).setAttribute("href",bestLinks[i*5+3]);
            document.getElementById("usernamePost"+i).text = bestLinks[i*5+4];
            document.getElementById("linkname"+i).setAttribute("target","_blank");
        }
    }
};