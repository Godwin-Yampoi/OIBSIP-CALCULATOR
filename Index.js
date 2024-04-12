document.addEventListener('DOMContentLoaded', function () {

    const resultField =document.getElementById('result')

    const buttons = document.querySelectorAll('#calcu input[type="button"]')

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value

            if (value === '=') {
                try {
                    resultField.value = eval(resultField.value)
                } catch(error) {
                    resultField.value = 'Error'
                }
                
            } else if (value === 'c') {
                resultField.value = ''
            }else {
                resultField.value += value
            }

            
        })
    })
    //keyboard inputs

    document.addEventListener('keypress', function (event) {
     //getting the clicked key

     const key = event.key

     //selecting allowed keys

     const allowedKeys = '0123456789+-*/.=\r\b'

     if (allowedKeys.includes(key)) {

        if (key === '=' || key === '\r') {
            try {
                resultField.value = eval(resultField.value)
            } catch(error) {
                resultField.value = 'Error'
            }
            } else if (key === 'c' || key === '\b') {
                    resultField.value = ''

                } else {

                    resultField.value += key

                }

                //preventing default behaviours of keys

                event.preventDefault()
                
            
            }  
        })
     })


    