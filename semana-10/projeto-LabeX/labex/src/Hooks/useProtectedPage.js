import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { goToLoginAdmPage } from '../Router/Coordinator';


export const useProtectedPage =() => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(!token) {
            goToLoginAdmPage(history);
        }
    }, [history])
}