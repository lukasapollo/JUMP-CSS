const colorTheme = document.querySelectorAll('.btn-theme')

colorTheme.forEach(btn => btn.addEventListener('click', systemColors));

function systemColors({ currentTarget }){
   const mode = currentTarget.getAttribute('data-mode')
   if(mode == 'dark'){
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
   } else if(mode == 'light'){
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
   }
}

