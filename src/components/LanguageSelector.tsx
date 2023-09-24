import { Select } from "@chakra-ui/react"
import useLanguages from "../hooks/useLanguages";
import useMediaContentQueryStore from "../store";






const LanguageSelector = () => {
    const setOriginalLanguage = useMediaContentQueryStore(s => s.setOriginalLanguage);
    const { data: languages, error } = useLanguages();

    if (error) return null;

    return (
        <Select
        placeholder="Select Language"
         onChange={(event) => setOriginalLanguage(event.target.value)}>
            {languages.map((language, index) => (
            <option key={index} value={language.iso_639_1}>{language.english_name}</option>))
            }
        </Select> 
    )
}

export default LanguageSelector


