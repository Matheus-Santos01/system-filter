const cards = document.querySelectorAll('.card')
const filterElement = document.querySelector('header .input-search input')

filterElement.addEventListener('input', filterCards)

function filterCards(){
    
    if(filterElement.value != ''){
        
        for(let card of cards){
            let titleCard = card.querySelector('.title-card h2')
            titleCard = titleCard.textContent.toLowerCase()
            let textElement = filterElement.value.toLowerCase()
            
            if(!titleCard.includes(textElement)){
                card.style.display = 'none'
            }else{
                card.style.display = 'block'
            }
        }
    }else{
        for(let card of cards){
            card.style.display = 'block'
        }
    }
}