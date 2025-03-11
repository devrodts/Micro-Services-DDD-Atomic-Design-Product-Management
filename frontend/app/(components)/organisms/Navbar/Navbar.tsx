"use client";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import { useState } from "react";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }
    
    return(
        <header className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
            <SearchInput 
                placeholder="Search..."
                onChange={handleSearch}
                value={searchQuery}
                icon={true}
                iconPosition="left"
            />
        </header>
    )
}
export default Navbar;