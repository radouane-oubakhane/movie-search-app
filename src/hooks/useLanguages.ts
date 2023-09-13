import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import languages from "../data/languages";



// interface Language {
//     iso_639_1: string;
//     english_name: string;
// }
    


// const useLanguages = () => {
//     const [languages, setLanguages] = useState<Language[]>([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState('') 

//     useEffect(() => {
//         const controller = new AbortController()
//         apiClient
//         .get<Language[]>('/configuration/languages', { signal: controller.signal })
//         .then((response) => {
//             setLanguages(response.data)
//             setIsLoading(false)
//         })
//         .catch((error) => {
//             if (error instanceof CanceledError) return;
//             setError(error.message)
//             setIsLoading(false)
//         })

//         return () => controller.abort()
        
//     }, [])

//     return { languages, isLoading, error }


// }




const useLanguages = () => ({languages: languages, isLoading: false, error: null})

export default useLanguages;