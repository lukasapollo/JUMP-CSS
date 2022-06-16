 const x = {
      screenRemoveClass(operator, props){
        if(operator === '>'){
            const li = document.querySelectorAll(props.element)
            if (document.body.clientWidth > props.largura) {
                li.forEach((x) => {
                    x.classList.remove(props.nameClasse)
                })
            } else {
                li.forEach((x) => {
                    x.classList.add(props.nameClasse)
                })
            }
          }
    
          if(operator === '<'){
            const li = document.querySelectorAll(props.element)
            if (document.body.clientWidth < props.largura) {
                li.forEach((x) => {
                    x.classList.remove(props.nameClasse)
                })
            } else {
                li.forEach((x) => {
                    x.classList.add(props.nameClasse)
                })
            }
          }
      }
  }

  export default x;