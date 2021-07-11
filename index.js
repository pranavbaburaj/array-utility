const DOG_API_URL = "https://dog.ceo/api/breeds/image/random"

const div = document.querySelector('.ll')

const fetchRandomDogImages = async (count) => {
    const imageUrls = new Array()
    for(let counter=0; counter<count; counter++){
        console.log(counter+1, "/", count)
        const response = await window.fetch(DOG_API_URL)
        const json = await response.json()
        imageUrls.push(json.message)
    }
    return imageUrls
}

const images = fetchRandomDogImages(8).then((response) => {
    // window.document.body += `<img src=${respons}`
    response.forEach((element) => {
        div.innerHTML += `<img src=${element}>`
    })
})