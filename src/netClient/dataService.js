import http from '@/netClient/config';

export async function register(login,password,email,name) {
    try {
        const responce = await http.post('/auth/register', {
            login,
            password,
            email,
            name
        })
        return responce.data;
    } catch (error) {
        console.log({error});
        throw error;
    }
}

export async function login(login,password) {
    try {
        const responce = await http.post('/auth/login', {
            login,
            password,
        })
        const { accessToken } = responce.data;
        localStorage.accessToken = accessToken;
        return responce.data;
    } catch (error) {
        console.log({error});
        throw error;
    }
}

export async function getTodoList() {
    try {
        const responce = await http.get('/todos/',
        {
            headers :{
                'Content-Type' : 'application/json',
                'token' : localStorage.accessToken
            }
        });
        return responce.data?.todoList || [];
    } catch (error) {
        console.log({error});
        throw error;
    }
}

export async function logout() {
    try {
        const responce = await http.post('/user/logout', {},
        {
            headers :{
                'Content-Type': 'application/json',
                'token':localStorage.accessToken
            }
        });
        localStorage.removeItem('accessToken');
        return responce.data;
    } catch (error) {
        console.log({error});
        throw error;
    }
}