var app = {
    loadDatabase: function() {
        this.db = openDatabase('NTU_Connect', '1.0', 'NTU Connect DB', 8192);

        this.db.transaction(
            function(tx) { tx.executeSql( 'CREATE TABLE IF NOT EXISTS users(user VARCHAR(20) PRIMARY KEY, pwd VARCHAR(20), displayName VARCHAR(30), img VARCHAR(50))' ) }
        );

        this.db.transaction(
            function(tx) { tx.executeSql('INSERT INTO users(user, pwd) VALUES("N0627514", "password")') }
        );

    },

    connectUser: function() {
        var user = document.forms["user-login"]["user-id"];
        var user_pwd = document.form["user-login"]["user-pwd"];

        var checkPwd_query = "SELECT password FROM users WHERE users.username = '" + user + "';";


        this.db.readTransaction(
            function (tx) {
                tx.executeSql(checkPwd_query),
                    [],
                    function (tx, results) {
                        var len = results.rows.length;
                        if (len == 0) {
                            document.getElementById("error").innerHTML = "The username you entered was not found.";
                        }
                        else {
                            if (results.rows.item(0).pwd == user_pwd) {
                                // redirect to index.html
                            }
                            else {
                                document.getElementById("error").innerHTML = "The password you entered is incorrect.";
                            }
                        }
                    }
            })
    }
};

app.loadDatabase();