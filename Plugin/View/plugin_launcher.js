window.onload = function () {
   if(autoConnect_Control.getLoginInfo() === '') {
      PluginView.loadLoginView();
   } else {
      sessionStorage.setItem("currentUserId",autoConnect_Control.getCookie('id'));
      PluginView.loadAddLinkView();
   }
};