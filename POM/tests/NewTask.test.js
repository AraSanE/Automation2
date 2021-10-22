import {Selector, t} from 'testcafe'
import { CREDENTIALS, URLS} from '../data/Constants'
import todayPage from '../pages/TodayPage'
import {EMAIL_USER} from '../data/Roles'

fixture('New task test')
    
   .page `${URLS.LOGIN_URL}`

   test.skip('Add a new task', async t => {
        await t.useRole(EMAIL_USER),
        await t
            .click('.empty-state-button')
            .typeText('.public-DraftEditor-content','AraTest')
            .typeText('.task_editor__description_field','This is an aratest')
            .click('.reactist_button--primary')
            .expect(Selector('.view_content').innerText).contains('AraTest')
            .wait(5000)
})

    test.skip('Cancel to add a new task', async t => {
        await t.useRole(EMAIL_USER),
        await t
            .click('.empty-state-button')
            .typeText('.public-DraftEditor-content','AraTestCancel')
            .typeText('.task_editor__description_field','This is an aratest in order to cancel task')
            .click('.reactist_button--secondary')
            .wait(5000)

})
    test.skip('Delete every task created', async t => {
        await t.useRole(EMAIL_USER),
        await t
            .click('.items')
            .click('.task_list_item__content')
            .click('.more_actions_button')
            .click('.icon_menu_item danger_menu')
            //lo intente pero fracase.... no logro hacer q la borre... :(
    })
    test.skip('Create task for tomorrow', async t => {
        await t.useRole(EMAIL_USER),
        await t
            .click('.plus_add_button')
            .typeText('.public-DraftEditor-content','Tomorrow\'s task')
            .typeText('.task_editor__description_field','This is a test for tomorrow\'s task')
            .click('.item_due_selector')
            .click('.scheduler-suggestions-item')
            .click('.reactist_button--primary')
            .click('#filter_inbox')
            .expect(Selector('.view_content').innerText).contains('Tomorrow')
            .wait(5000)

    })

    test.only('Create 10 tasks for today and verify they are been created', async t => {
        await t.setTestSpeed(.3)
        await t.useRole(EMAIL_USER),
        
        await t
            for (let index = 0; index < 10; index++) {
                
                await t
                .click('#quick_add_task_holder')
                .typeText('.public-DraftEditor-content','AraTest '+ index)
                .typeText('.task_editor__description_field','This is an aratest')
                .click('.reactist_button--primary')
                .expect(Selector('.view_content').innerText).contains('AraTest')
            }
             
                
    })