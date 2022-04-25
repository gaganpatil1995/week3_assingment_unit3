// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
amt = localStorage.getItem("amount")
document.querySelector("#wallet").innerText = amt 

function confirMation(){
    noofseat = document.querySelector("#number_of_seats").value
    totalAmt = +(noofseat)*100
    if(totalAmt>amt){
        alert("Insufficient Balance")
    }
    else{
      remainAmt = amt - totalAmt ;
    //   console.log(remainAmt)
    localStorage.setItem("amount",remainAmt)
    alert("Booking succefull")
    window.location.reload()
    }
    
    // remainAmt = +()

}

movieData = JSON.parse(localStorage.getItem("movie")) 
// console.log(movieData.Poster)
hereAp = document.querySelector("#movie") ;
movie_div = document.createElement("div")
 image = document.createElement("img") ;
//  image.setAttribute("id")
 image.src = movieData.Poster
 title = document.createElement("p") ;
 title.innerText = movieData.Title ;
 movie_div.append(title,image) ;
 hereAp.append(movie_div)


