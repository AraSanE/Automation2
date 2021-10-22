import {Role} from 'testcafe'
import { CREDENTIALS, URLS } from './Constants'
import loginPage from '../pages/LoginPage'
import todayPage from '../pages/TodayPage'

export const EMAIL_USER = Role(URLS.LOGIN_URL, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.EMAIL_USER.EMAIL, CREDENTIALS.EMAIL_USER.PASSWORD)
}, {preserveUrl:true })

export const WRONG_USER = Role(URLS.LOGIN_URL, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.WRONG_USER.EMAIL, CREDENTIALS.WRONG_USER.PASSWORD)
}, {preserveUrl:true })
