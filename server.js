const express = require('express') // import express
const request = require('request') // import request
const path = require('path') // import path (built-in)
const app = express()



app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))

let data = [{
    title: "Recipe Puppy",
    version: 0.1,
    href: "http://www.recipepuppy.com/",
    results: [
        {
            title: "Ginger Champagne",
            href: "http://allrecipes.com/Recipe/Ginger-Champagne/Detail.aspx",
            ingredients: "champagne, ginger, ice, vodka",
            thumbnail: "http://img.recipepuppy.com/1.jpg"
        },
        {
            title: "Potato and Cheese Frittata",
            href: "http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx",
            ingredients: "cheddar cheese, eggs, olive oil, onions, potato, salt",
            thumbnail: "http://img.recipepuppy.com/2.jpg"
        },
        {
            title: "Eggnog Thumbprints",
            href: "http://allrecipes.com/Recipe/Eggnog-Thumbprints/Detail.aspx",
            ingredients: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
            thumbnail: "http://img.recipepuppy.com/3.jpg"
        },
        {
            title: "Succulent Pork Roast",
            href: "http://allrecipes.com/Recipe/Succulent-Pork-Roast/Detail.aspx",
            ingredients: "brown sugar, garlic, pork chops, water",
            thumbnail: "http://img.recipepuppy.com/4.jpg"
        },
        {
            title: "Irish Champ",
            href: "http://allrecipes.com/Recipe/Irish-Champ/Detail.aspx",
            ingredients: "black pepper, butter, green onion, milk, potato, salt",
            thumbnail: "http://img.recipepuppy.com/5.jpg"
        },
        {
            title: "Chocolate-Cherry Thumbprints",
            href: "http://allrecipes.com/Recipe/Chocolate-Cherry-Thumbprints/Detail.aspx",
            ingredients: "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
            thumbnail: "http://img.recipepuppy.com/6.jpg"
        },
        {
            title: "Mean Woman Pasta",
            href: "http://allrecipes.com/Recipe/Mean-Woman-Pasta/Detail.aspx",
            ingredients: "garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato",
            thumbnail: "http://img.recipepuppy.com/7.jpg"
        },
        {
            title: "Hot Spiced Cider",
            href: "http://allrecipes.com/Recipe/Hot-Spiced-Cider/Detail.aspx",
            ingredients: "allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt",
            thumbnail: "http://img.recipepuppy.com/8.jpg"
        },
        {
            title: "Isa's Cola de Mono",
            href: "http://allrecipes.com/Recipe/Isas-Cola-de-Mono/Detail.aspx",
            ingredients: "cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar",
            thumbnail: "http://img.recipepuppy.com/9.jpg"
        },
        {
            title: "Amy's Barbecue Chicken Salad",
            href: "http://allrecipes.com/Recipe/Amys-Barbecue-Chicken-Salad/Detail.aspx",
            ingredients: "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato",
            thumbnail: "http://img.recipepuppy.com/10.jpg"
        }
    ]
}]

// class apiManger {
//     constructor(renderer) {
//         this.renderer=renderer

//         getAPiData() {

//             app.get('/:food', function (req, res) {
//                 let food = req.params.food

//                 request('http://www.recipepuppy.com/api', function (err, res, body) {
//                     let data = JSON.parse(body)
//                     console.log(data)
//                     filterData = data.results.ingredients
//                     res.send(filterData)
//                 })

//             }

// app.listen(8080, function () {
//                     console.log(`"My Roster" server RUNNING!`)
//                 })



class apiManger {                    //api manger extracs the data 
    constructor(renderer) {
        this.renderer = renderer   
        this.data=data
    }

    getIngredients(input){    // the method recives the name of the food , when th button 
                                 //is pushed
let ingredians=[]
app.get(`/:${input}`,(req, res)=>{
    
    // let food=request.params.input

    let items=data.request.find(p=> p.title===input) //finds the food with the same name
                                                    // that has been typed.
    ingredians=items.split()                       //split to an array

    ingredians=ingredians.forEach({ingredians:ingredians}) //transform the array to array
    .map(ingredians)         
                                                    //of object to i can use in handlebars

ingerediants= data.results.ingredians.split()  // an attemp to make a search by ingidiants.
 findMatch=ingerediants.map(p=> input== p )
})
this.renderer.renderIngridiants(ingredians)     //we use the depandancy injection so 
                                                //we can use its rendering methods, which
                                                //appends the relavent info through handlebars to the view
    }


 getData(input){                        // send all that fits to the word on the search button
                                                      
     let data=data.results.filter(p=> p.title===input)
     this.renderer.renderData(data)
 }  

 

 RenderAll(){

    this.getData()
    this.getIngredients()
 }
 
}

