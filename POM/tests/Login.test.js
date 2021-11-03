import loginPage from '../pages/LoginPage'
import { CREDENTIALS, URLS} from '../data/Constants'
import todayPage from '..//pages/TodayPage'
import {EMAIL_USER} from '../data/Roles'

fixture('Login feature test')
   .page `${URLS.LOGIN_URL}`
   .beforeEach(async t => {
       await t. setTestSpeed(.3)
   })

test.skip('As a user, I should be able to select an option to login', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.EMAIL_USER.EMAIL, CREDENTIALS.EMAIL_USER.PASSWORD)
    
    
})

test.meta('type','smoke')('Select option to login', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.EMAIL_USER.EMAIL, CREDENTIALS.EMAIL_USER.PASSWORD)
})

test('Select option to login', async t => {
    await t.useRole(EMAIL_USER)
    await t.expect(todayPage.filter.exists).ok()
})

test('Select option to login', async t => {
    await t.useRole(EMAIL_USER)

})


    .afterEach(async t => {
        await t.wait(5000)
    })