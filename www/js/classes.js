function Menu(name){
  this.links = new Array(),
  this.name = name,


  this.addLink = function(content, href){
    console.log("adding link: " + content + " href=" + href);
    var link = '<a href="' + href + '" class="navlink">' + content + '</a>';
    this.links.push(link);
  }

  this.setMenuName = function(name){
    this.menu_name = name;
  }

  this.printMenu = function(){
    var output = '<ul class=\"menu\">';
    for(var i = 0; i < this.links.length; i++ ){
      output += '<li class=\"leaf\"' + i+1 + '>' + this.links[i] + '</li>';
    }
    output += "</ul>";

    return output;
  }

}
