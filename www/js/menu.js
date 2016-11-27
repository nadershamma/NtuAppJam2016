class Menu{
  var links;
  var menu_name;

  constructor(name){
    this.links = new array();
    this.menu_name = name;
  }

  addLink(name, href){
    console.log("adding link: " + name + " href=" + href);
    var link = '<a href="' + href + '" class="navlink">' + name + '</a>';
    this.links.push()
  }

  set setMenuName(name){
    this.menu_name = name;
  }

  get printMenu(){
    var output = '<ul class=\"menu\">';
    for(var i = 0; i < this.links.length; i++ ){
      output += '<li class=\"leaf\"' + i+1 + '>' + this.links[i] + '</li>';
    }
    output += "</ul>";

    retrun output;
  }

}
