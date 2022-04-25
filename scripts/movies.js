// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

/*"Title":"The Avengers","Year":"2012","imdbID":"tt0848228","Type":"movie","Poster" */
let id ;
amt = localStorage.getItem("amount")
document.querySelector("#wallet").innerText = amt 

async function showAllMovie(){

    try{
        sear = document.querySelector("#search").value

        const url = `https://www.omdbapi.com/?s=${sear}&apikey=3612724f` ;
         
        res = await fetch(url)
        res =  await res.json()
        data = res.Search
        // console.log(data)
        // appendAllData(data)
        return data 
    }
    catch(err){
        console.log(err)
    }
    
      


}

async function main(){
    allData = await showAllMovie()
    if(allData == undefined){
        return false
    }
    else{
        appendAllData(allData)
    }
    
}

function debounc(func,time){
    if(id){
        clearInterval(id)
    }
    id = setTimeout(function(){
        func()
    },time)

}
function appendAllData(data){
   document.querySelector("#movies").innerHTML = null

    data.map(function(ele){
        movie_div = document.createElement("div") ;

        image = document.createElement("img") 
        image.src = ele.Poster
        title = document.createElement("p")
        title.innerHTML = ele.Title

        button = document.createElement("button")
        button.setAttribute("class","book_now")
        button.innerHTML = "Book Now"
        button.addEventListener("click",function(){
            showCheckOut(ele)
        })
        movie_div.append(image,title,button)
        document.querySelector("#movies").append(movie_div)
    })
}
function showCheckOut(data){
    localStorage.setItem("movie",JSON.stringify(data))
    window.location.href ="checkout.html"
}