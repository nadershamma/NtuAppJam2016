var main_menu = new Menu("main manu");

main_menu.addLink("home", "#");
main_menu.addLink("News", "#");
main_menu.addLink("Events", '#');

app.initialize();

document.getElementById("main-menu").innerHTML = main_menu.printMenu();

//parentElement.innerHTML = main_menu.printMenu();
