const changeTextButton = document.getElementById("changeTextButton");
let inputBox = document.getElementById("inputBox");
let value ;
inputBox.addEventListener('input',updateValue=>{
    value  =inputBox.value;
});
changeTextButton.addEventListener("click",()=>{

    const options = {
        active:true,currentWindow:true
    };
 

    chrome.tabs.query(options,gotTabs=>{
        let currentTab = gotTabs[0];
        let req ={
            "value":value
        };
        chrome.tabs.sendMessage(currentTab.id,req);

    });


});