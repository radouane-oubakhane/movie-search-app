import { Input } from "@chakra-ui/react"
import { useRef } from "react"


interface Props {
    onKeywordChange: (keywords: string) => void;
}



const KeywordInput = ({ onKeywordChange }: Props) => {
    const keywordsRef = useRef<HTMLInputElement>(null);

    return (
        <form 
        onSubmit={(event) => {
            event.preventDefault();
            if (keywordsRef.current?.value) 
                onKeywordChange(keywordsRef.current.value);
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



