import { createContext, useContext } from "react";

export const AuthContext = createContext(); //Създаваме context-а

const baseUrl = 'http://localhost:3030';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`)

    let pets = await response.json()

    let result = Object.values(pets)

    return result;
}

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult
    } else {
        throw jsonResult
    }

};

export const logout = async (token) => {
    let response = await fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    })

    let json = await response.json()

    return json;
};

export const register = async (email, password, confirmPassword) => {
    let response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password, confirmPassword })
    })
    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult
    } else {
        throw jsonResult
    }
};

export const getOne = (petId) => {
    return fetch(`${baseUrl}/pets/${petId}`)
        .then(res => res.json())
}

export const remove = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'POST',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json())
}

export const useAuth = () => {
    const authState = useContext(AuthContext)

    return authState;

}

export const reservation = async (email, name, people, specialRequest, dateTime) => {
    let response = await fetch(`${baseUrl}/reservations`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, name, people, specialRequest, dateTime })
    });
    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult
    } else {
        throw jsonResult
    }

};

export const profile = async (email, name, phone, bio) => {
    let response = await fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, name, phone, bio })
    });
    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult
    } else {
        throw jsonResult
    }
}