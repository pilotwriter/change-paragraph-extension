chrome.runtime.onMessage.addListener((req,sender,sendResponde) =>{

    let paragraphs = document.getElementsByTagName("p");
        console.log(paragraphs)
    for(elem of paragraphs){
        elem.innerHTML = req.value;
    }
})