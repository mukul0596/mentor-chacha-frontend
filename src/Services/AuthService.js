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
                return { isAuthenticated: false, user: {}, message: {msgBody: 'Invalid credentials!'} };
        });
    },

    logout: () => {
        return fetch('http://localhost:5000/api/user/logout', {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        }).then(res => res.json())
        .then(data => data);
    },
    
    isAuthenticated: () => {
        return fetch('http://localhost:5000/api/user/authenticated', {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: {} };
        });
    },

    updateProfile: (user) => {
        return fetch('http://localhost:5000/api/user/updateProfile', {
            method: "put",
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { success: false };
        });
    },

    resetPassword: (passwords) => {
        return fetch('http://localhost:5000/api/user/resetPassword', {
            method: "put",
            body: JSON.stringify(passwords),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { success: false };
        });
    }
}

export default AuthService;