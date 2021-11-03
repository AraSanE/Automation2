import { Selector, t} from 'testcafe'
import { WRONGCREDENTIALS, CREDENTIALS, URLS} from '../data/Constants'

fixture('Login feature test')
   .page `${URLS.LOGIN_URL}`
   .beforeEach(async t => {
       await t. setTestSpeed(.3)
   })

test.skip('Test wrong user name', async t => {
    await t
    .typeText('#email', WRONGCREDENTIALS.WRONG_USER.EMAIL)
    .click('.submit_btn.ist_button.ist_button_red.sel_login')
    .expect(Selector('.error_msg').innerText).contains('Invalid email address.')
    .wait(5000)
})

test('Test incorrect pwd', async t => {
    await t
    .typeText('#email', CREDENTIALS.EMAIL_USER.EMAIL)
    .typeText('#password', WRONGCREDENTIALS.WRONG_USER.PASSWORD)
    .click('.submit_btn.ist_button.ist_button_red.sel_login')
    .expect(Selector('.error_msg').innerText).contains('Wrong email or password')
    .wait(5000)
})

test.skip('Empty fields', async t => {
    await t
    .click('.submit_btn.ist_button.ist_button_red.sel_login')
    .expect(Selector('.error_msg').innerText).contains('Invalid email address.')
    .wait(5000)
})

