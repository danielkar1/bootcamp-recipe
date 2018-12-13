const renderer = new Renderer         //made an instanse of Renderer class for injection
const Api = new apiManager(renderer) //made an instanse of apiManger class and sent it 
                                    //the renderer injection 


const go = function () {
    $("button").on("click", function () {
        input = $("#input").val()
        Api.get(input)
        Api.renderingridiants(input)
    })
}



