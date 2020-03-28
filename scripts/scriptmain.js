const nav = document.getElementById('main-nav')
const hamburguesa = document.getElementById('main-menu-toogle')


hamburguesa.addEventListener('click',()=>{

        if(nav.style.right != "0px")
        {
            nav.style.right = "0"
        }
        else{
            nav.style.right = "-262.5px"
        }

    }
)