import {Role} from 'testcafe'
import { CREDENTIALS, URLS } from './Constants'
import loginPage from '../pages/LoginPage'

export const EMAIL_USER = Role(URLS.LOGIN_URL, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.EMAIL_USER.EMAIL, CREDENTIALS.EMAIL_USER.PASSWORD)
    //await t.expect(TodayPage.filter.exist)
}, {preserveUrl:true })
