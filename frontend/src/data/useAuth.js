import axios from "axios";
import create from "zustand";

// store the token in the local storage using the setToken function
const setToken = (set) => (token) => set(token);
// store the expire time in the local storage using the setExpire function
const setExpire = (set) => (expire) => set(expire);
// store the user data in the local storage using the setUsers function
const setUsers = (set) => (users) => set(users);
// store the user data in the local storage using the setUsers function
const setisLogin = (set) => (isLogin) => set(isLogin);
// store the user data in the local storage using the setUsers function
const setisLoginAdmin = (set) => (isLoginAdmin) => set(isLoginAdmin);
