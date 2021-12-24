const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
   const response = await fetch(this.action, {
       method: this.method,
       body: form,
       headers:{
           'Accept':'application/json'
       }
   })
   if (response.ok){
       $form.reset()
       alert('Gracias por contactarme, ¡te escribiré pronto!')
   }
}