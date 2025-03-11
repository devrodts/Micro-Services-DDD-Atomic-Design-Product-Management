import {Search} from "lucide-react";
import { SearchInputInterface } from "./search-input.interface";


const SearchInput = ({children, divClassName, inputClassName, placeholder, onChange, value, icon, iconPosition}: SearchInputInterface) => {

    return(
        <div className={`relative flex h-min w-[200px] ${divClassName}`}>
            {icon && <Search className={`absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer text-gray-500 dark:text-white ${iconPosition === "left" ? "left-[4px]" : "right-[4px]"}`} />}
            <input 
                className={`${inputClassName} w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white`}
                type="text" 
                placeholder={`${placeholder || "Search..."}`}
                onChange={onChange}
                value={value}
            />
            {children}
        </div>
    )
}   
export default SearchInput;
