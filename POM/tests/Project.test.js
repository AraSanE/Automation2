import {Selector, t} from 'testcafe'
import { URLS} from '../data/Constants'
import {EMAIL_USER} from '../data/Roles'

fixture('New task test')
    
   .page `${URLS.LOGIN_URL}`

   test('Add a new task', async t => {
    await t.useRole(EMAIL_USER),
    await t
        .click('#list_holder > div.sidebar_expansion_panel.expansion_panel.expansion_panel--expanded > div.expansion_panel__header > div > button > svg')
        .typeText('.form_field_control','AraProject')
        .click('.reactist_switch--handle')
        .click('.ist_button_red')
        .expect(Selector('.main_content').innerText).contains('AraProject')
        .wait(5000)
   })