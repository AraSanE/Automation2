import {Selector, t} from 'testcafe'
import { CREDENTIALS, URLS} from '../data/Constants'
import todayPage from '..//pages/TodayPage'
import {EMAIL_USER} from '../data/Roles'

fixture('New task test')
    
   .page `${URLS.TASK_URL}`
   //.beforeEach(async t => {
   //    await t.useRole(EMAIL_USER)
   //})

test.skip('As a user I should be able to add a new task', async t => {
    //await loginPage.submitLoginForm(CREDENTIALS.EMAIL_USER.EMAIL, CREDENTIALS.EMAIL_USER.PASSWORD)

    await t
    .click('.empty-state-button')
   
})

