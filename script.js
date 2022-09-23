window.addEventListener('load',()=>{
    let form=document.querySelector(".form-input")

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let name=document.querySelector(".input-name").value
        let email=document.querySelector(".input-email").value
        let rating=document.querySelector(".input-ratings").value
        let movie=document.querySelector(".Movies").value
        let color=document.querySelector(".input-color").value
        let book=document.querySelector(".input-radio").querySelectorAll("li")

        let book_value=""
        if(book[0].childNodes[1].checked){
            book_value=book[0].childNodes[1].value
            book[1].childNodes[1].checked=false
            book[2].childNodes[1].checked=false

        }else if(book[1].childNodes[1].checked){
            book[0].childNodes[1].checked=false
            book[2].childNodes[1].checked=false
            book_value=book[1].childNodes[1].value
        }else if(book[2].childNodes[1].checked){
            book[0].childNodes[1].checked=false
            book[1].childNodes[1].checked=false
            book_value=book[2].childNodes[1].value
        }

        let checkBox=document.querySelector(".input-checkbox").checked
        if(checkBox){
            console.log("allo")
        }

        form.style.display="none"

        let newDiv=document.createElement("div")
        newDiv.classList.add("new-div")

        if(checkBox){
        newDiv.innerHTML= `
            <h1>Hello ${name} </h1>
            <h2>Email: ${email} </h2>
            <h2>Your Movie: ${movie} </h2>
            <h2>color: ${color} </h2>
            <h2>Rating: ${rating} </h2>
            <h2>Book Genre: ${book_value} ${color} </h2>
            <h2>You agreed to Terms and conditions</h2>
        `
        }else{
            newDiv.innerHTML= `
            <h1>Hello ${name} </h1>
            <h2>Email: ${email} </h2>
            <h2>Your Movie: ${movie} </h2>
            <h2>color: ${color} </h2>
            <h2>Rating: ${rating} </h2>
            <h2>Book Genre: ${book_value} ${color} </h2>
            <h2>You haven't agreed</h2>
        `
        }

        let btn=document.createElement("button")
        btn.innerText="close"
        btn.id="close-btn"

        btn.addEventListener('click',(e)=>{
            form.style.display='block'
            newDiv.style.display='none'
        })

        newDiv.appendChild(btn)
        document.body.appendChild(newDiv)

    })

})