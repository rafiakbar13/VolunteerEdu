import axios from 'axios'
import create from 'zustand'

export const useLogin = create(set => ({
  isLogin: false,
  doLogin: async (data) => {
    try {
      const {data} = await axios.post("http://localhost:8080/api/v1/users/login")
      set(state => ({isLogin: true}))
    } catch (error) {
      set(state => ({isLogin: false}))
    }
  }
}))