



fetch("https://restcountries.com/v3.1/all")
.then(response=>response.json())
.then(data=>{console.log(data)
    data.forEach((country)=>{
        const flag=document.createElement("div")
            flag.setAttribute("class","container")
            flag.innerHTML=`
           
            <div class="card">
            <div class="card-body">
            <img class="flag" src=${country.flags.svg}>
            <div class="info">
            <h4>${country.name.official}</h4>
            <p>population: ${country.population}</p>
            <p>region :${country.region}</p>
            <p>capital :${country.capital} <br><br>
            <button class="btn btn-primary" >click the wheather </button>
            </div>
            </div>
            </div>`
            document.body.append(flag);
    
      
    })
})
