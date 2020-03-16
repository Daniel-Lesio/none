const header = document.querySelector("header")
const arrowup = document.querySelector(".toTop")

module.exports = {
    sectionsViewDetect(){
       const targets = document.querySelectorAll(".target");
       let observer = new IntersectionObserver(entries=>{
           entries.forEach(entry=>{
               if(entry.intersectionRatio>0){
                switch(entry.target.dataset.value){
                    case "header":
                        header.classList.remove("headerIn")
                        arrowup.classList.remove("toTop-inview")
                        break;
                    case 'hr':
                        entry.target.classList.add("hrInView")
                        break;
                    case 'numbers':
                        
                    default:
                        entry.target.classList.add("inView");
                }
            }
               else{
                    switch(entry.target.dataset.value){
                        case 'header':
                            header.classList.add("headerIn");
                            arrowup.classList.add('toTop-inview')
                            break;
                        case 'hr':
                            entry.target.classList.remove('hrInView');
                            break;
                        default:
                            entry.target.classList.remove('inView');             
                    }
               }
           })
       })
       targets.forEach(target=>{
           observer.observe(target)
       })
    }
 
}


