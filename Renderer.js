
class Renderer{
   constructor(){
     
}

renderingridiants(ingerarray){

    var source=$("#recipe-block").html()
    var template=Handlebars.compile(source)
    var newHTML=template(ingerarray)
    $("mainContainer").append(newHTML)
}

renderData(data){
    var source=$("#recipe-block").html()
    var template=Handlebars.compile(source)
    var newHTML=template(data)
    $("mainContainer").append(newHTML)
}
}





}