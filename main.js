var typingEffect = new Typed(".typedText",{
    strings : ["Word- Counter","Letters Counter","Sentences Counter"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })

 const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

sr.reveal('.container ',{delay: 200})
sr.reveal('.count ',{delay: 200})


const upCount=()=>{
    let message=document.getElementById('text').value;
    let wordCount=(message).split(' ').length;
    let sentenceCount=(message).split('.').length;
    document.getElementById('wcount').innerText = wordCount;
    document.getElementById('ccount').innerText=message.length;
    document.getElementById('scount').innerText=sentenceCount;
}