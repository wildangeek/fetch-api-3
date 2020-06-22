const endPoint = 'https://api.github.com/users/wildangeek';
const options = {
    method:'GET',
}
let p = document.querySelector('p');
let p1 = document.querySelector('.p1');

async function getUserData(){
    try{
        let response = await fetch(endPoint, options)
        let result = await response.json();
        console.log(result)
        document.querySelector('.h1').innerHTML = result.login;
        let text = document.createTextNode(`User ID: ${result.id}`);
        let text1 = document.createTextNode(`URL: ${result.url}`)
        p.appendChild(text)
        p1.appendChild(text1)
        document.querySelector('.user-data').appendChild(p)
        document.querySelector('.user-data').appendChild(p1)
        console.log(p)
        console.log(text)
        
    }
    catch(error){
        console.log(error)
    }
}

getUserData()