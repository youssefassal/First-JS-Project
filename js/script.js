var allproducts = document.querySelectorAll(".item-btn")
var itemsdiv = document.querySelector(".items-added")
var pricediv = document.querySelector(".items-added-price")
var showbtn = document.querySelector(".show-btn")
var totalprice = 0
var itemname = document.querySelector(".item-info-name")
var itemprice = document.querySelector(".item-info-price")


allproducts.forEach(function(item){
    item.onclick = function(){
        itemsdiv.innerHTML += "->" + item.getAttribute("name") + "<br>"
        totalprice += +(item.getAttribute("price"))
        if(itemsdiv != ""){
            showbtn.style.display = "block"
        }
    }
})

showbtn.onclick = function(){
    pricediv.innerHTML = totalprice + "$"
    pricediv.style.color = "black"
    pricediv.style.fontSize = "40px"
    pricediv.style.paddingTop = "30px"
    pricediv.style.textAlign = "center"
}

itemsdiv.style.textAlign = "center"
itemsdiv.style.fontSize = "30px"
itemsdiv.style.paddingTop = "30px"
