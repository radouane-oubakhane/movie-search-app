import { Select } from "@chakra-ui/react"
import useLanguages from "../hooks/useLanguages";



interface Props {
    onLanguageChange: (languageOption: string) => void;
}


const LanguageSelector = ({ onLanguageChange }: Props) => {
    const { data: languages, error } = useLanguages();

    if (error) return null;

    return (
        <Select
        placeholder="Select Language"
         onChange={(event) => onLanguageChange(event.target.value)}>
            {languages.map((language, index) => (
            <option key={index} value={language.iso_639_1}>{language.english_name}</option>))
            }
        </Select> 
    )
}

export default LanguageSelector


