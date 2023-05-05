import axios from "axios"

axios.defaults.baseURL = 'https://644667f90431e885f0110f5f.mockapi.io';

export const getAllUsers = async() => {
    const allUsers = await axios({
        method: 'get',
        url: '/tweetsusers'
    })

    console.log('all', allUsers)
}