export const setToken = (token) =>{
    sessionStorage.setItem("token",setToken)
}

export const getToken = () =>{
    return sessionStorage.getItem("token")
}

export const removeToken = () =>{
    sessionStorage.clear()
    window.location.href = "/login"
}

export const setEmail = (email)=>{
    sessionStorage.setItem("email",setEmail)
}

export const getEmail = () =>{
    sessionStorage.getItem("email")
}

export const invalidToken = (code) =>{
    if (code===401){
        sessionStorage.clear()
        window.location.href="/login"
    }
}





















































