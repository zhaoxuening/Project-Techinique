/**
 * Created by xuening on 15/1/5.
 */
window.onload = function () {
    SiteView.loadHomeView();
    if(autoConnect_Control.getLoginInfo() !== '') {
        sessionStorage.setItem("currentUserId", autoConnect_Control.getCookie('id'));
        sessionStorage.setItem("currentUserLogin", autoConnect_Control.getCookie('login'));
        document.getElementById("login").text = autoConnect_Control.getCookie('login');
    }

    gateway("http://localhost/Controller/link/bestLinks.php",null,"bestLinks");
};