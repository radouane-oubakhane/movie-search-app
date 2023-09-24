import { Input } from "@chakra-ui/react"
import { useRef } from "react"
import useMediaContentQueryStore from "../store";






const KeywordInput = () => {
    const setKeywords = useMediaContentQueryStore(s => s.setWithKeywords);
    const keywordsRef = useRef<HTMLInputElement>(null);

    return (
        <form 
        onSubmit={(event) => {
            event.preventDefault();
            if (keywordsRef.current?.value) 
            setKeywords(keywordsRef.current.value);
            }
        }
        >
            <Input 
            placeholder='Filter by keywords...' 
            ref={keywordsRef}
            />
        </form>
    )
}

export default KeywordInput



