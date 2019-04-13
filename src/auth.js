export default {
    login(cb) {
        cb = arguments[arguments.length - 1]
        localStorage.token = 'aaa'
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
    },
    logout(cb) {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },
    loggedIn() {
        return !!localStorage.token
    },
    onChange() { }
}