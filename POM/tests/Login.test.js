import {Selector, t} from 'testcafe'
import loginPage from '../pages/LoginPage'
import { CREDENTIALS, URLS} from '../data/Constants'
import todayPage from '..//pages/TodayPage'
import {EMAIL_USER} from '../data/Roles'

fixture('Login feature test')
    //.page `https://todoist.com`
   .page `${URLS.LOGIN_URL}`
   .beforeEach(async t => {
       await t. setTestSpeed(.3)
   })

test.skip('As a user, I should be able to select an option to login', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.EMAIL_USER.EMAIL, CREDENTIALS.EMAIL_USER.PASSWORD)
    //await t.expect(todayPage.filter.exists).ok()
    //.expect(Selector('#filter_today').innerText).contains('Today')
})

test.meta('type','smoke')('Select option to login', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.EMAIL_USER.EMAIL, CREDENTIALS.EMAIL_USER.PASSWORD)
})

test('Select option to login', async t => {
    await t.useRole(EMAIL_USER)
    //await t.expect(todayPage.filter.exists).ok()
    

})










//.click('/html/body/div/div/main/div[1]/header/nav/div/ul[2]/li[1]/a')
/*.click(loginPage.googleButton)
.typeText(loginPage.emailInput, CREDENTIALS.EMAIL_USER.EMAIL)
.click(loginPage.siguienteButton)
.typeText(loginPage.passwordInput, CREDENTIALS.EMAIL_USER.PASSWORD)
.click(loginPage.siguienteButton)
.wait(5000)






//<input type="email" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="username" spellcheck="false" tabindex="0" aria-label="Correo electrónico o teléfono" name="identifier" autocapitalize="none" id="identifierId" dir="ltr" data-initial-dir="ltr" data-initial-value="">
/*
import {Selector, t} from 'testcafe'

fixture('Login feature test')
    .page `https://todoist.com`

test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t
    .typeText('#user-name','standard_user')
    .typeText('#password', 'secret_sauce')
    .click('#login-button')
    .expect(Selector('.title').innerText).contains('PRODUCTS')
})
*/