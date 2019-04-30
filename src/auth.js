import axios from "axios";

export default {
    login() {
        axios.get('/api/auth2').then(res => { window.location = res.data.to })
    },
    login2(cb) {
        cb = arguments[arguments.length - 1]
        localStorage.token = 'aaa'
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
    },
    logout(cb) {
        localStorage.setItem('loggedIn', false)
        axios.get('/api/logout').then(res => console.log(res))
        if (cb) cb()
        this.onChange(false)
    },
    loggedIn() {
        return localStorage.loggedIn === 'true'
    },
    onChange() { }
}