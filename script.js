document.addEventListener('DOMContentLoaded', function(){
      let x = document.createElement('p')
      let divHolder = document.createElement('div')
      x.textContent = "newly created paragraph!"
      divHolder.appendChild(x)

      let root = document.getElementById('root')
      root.appendChild(divHolder)

})


function normal(username){

}

console.log(username)