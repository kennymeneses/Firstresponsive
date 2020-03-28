const nav = document.getElementById('main-nav')
const hamburguesa = document.getElementById('main-menu-toogle')


hamburguesa.addEventListener('click',()=>{

        if(nav.style.right != "0px")
        {
            nav.style.right = "0"
            console.log("funciona")
            console.log(nav.style.right)
        }
        else{
            nav.style.right = "-262.5px"
        }

    }
)