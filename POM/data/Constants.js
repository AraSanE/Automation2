import dotenv from 'dotenv'
dotenv.config() //se inicializa dotenv con este comando

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