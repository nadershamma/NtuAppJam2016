var app = {
    connectUser: function(){
        var user = document.forms["user-login"]["user-id"];
        var pwd = document.form["user-login"]["user-pwd"];

        var sql_query = "SELECT password FROM users WHERE users.username = '" +  user + "';";

        // pass sql_query to database
        // if return != null & password = pwd
        // return index.html
    }
};