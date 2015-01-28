autoConnect_Control = {
    setCookie: function (name,value,days) {
        var expire=new Date();
        expire.setDate(expire.getDate()+days);
        document.cookie=name+'='+escape(value)+';expires='+expire.toGMTString();
        return true;
    },

    getCookie: function (name) {
        if(document.cookie.length>0)
        {
            start=document.cookie.indexOf(name+"=");
            pos = start+name.length+1;
            if(start!=0)
            {
                start=document.cookie.indexOf("; "+name+"=");
                pos = start+name.length+3;
            }
            if(start!=-1)
            {
                start=pos;
                end=document.cookie.indexOf(";",start);
                if(end==-1)
                {
                    end=document.cookie.length;
                }
                return unescape(document.cookie.substring(start,end));
            }
        }
        return '';
    },

    saveLoginInfo: function(id,login,password) {
        this.setCookie('id',id,7);
        this.setCookie('login',login,7);
        this.setCookie('password',password,7);
    },

    deleteLoginInfo: function() {
        this.setCookie('id','',-1);
        this.setCookie('login','',-1);
        this.setCookie('password','',-1);
    },

    getLoginInfo: function() {
        var login = this.getCookie('login');
        var password = this.getCookie('password');

        if(login !== '' && password !== '') {
            return (login + " " + password);
        } else {
            return '';
        }
    }
};
