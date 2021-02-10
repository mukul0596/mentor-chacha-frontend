const AuthService = {
    login: (user) => {
        return fetch('http://localhost:5000/api/user/login', {
            method: "post",
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: {} }
        });
    },

    logout: () => {
        return fetch('http://localhost:5000/api/user/logout', {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => data);
    },
    
    isAuthenticated: () => {
        return fetch('http://localhost:5000/api/user/authenticated', {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        })
        .then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: {} }
        })
    },
}

export default AuthService;