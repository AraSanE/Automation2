import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL : 'https://todoist.com/users/showlogin',
    TASK_URL : 'https://todoist.com/app/today'
}

export const CREDENTIALS = {
    EMAIL_USER: {
        EMAIL: process.env.EMAIL_USER_EMAIL,
        PASSWORD: process.env.EMAIL_USER_PASSWORD
    }
}
    export const WRONGCREDENTIALS = {
        WRONG_USER: {
            EMAIL: process.env.WRONG_USER_EMAIL,
            PASSWORD: process.env.WRONG_USER_PASSWORD
        }
    }

    export const EMPTYCRED = {
        EMPTY_USER: {
            EMAIL: process.env.EMPTY_USER_EMAIL,
            PASSWORD: process.env.EMPTY_USER_PWD
        }
    } 