import {Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        
        this.emailInput = Selector('input[id=email]')
        this.passwordInput = Selector('input[id=password]')
        this.siguienteButton = Selector('.submit_btn.ist_button.ist_button_red.sel_login')
    }

    async submitLoginForm(email, password){
        await t    
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.siguienteButton)  
            
    }
}

export default new LoginPage