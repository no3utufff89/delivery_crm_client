import { Search } from "lucide-react"

export const SearchForm = () => {
   return (
    <form className="searchForm w-[400px] border rounded-[25px] overflow-hidden h-[40px] flex bg-mainBg">
    <button className="btn searchBtn w-[40px] h-full flex items-center justify-center" aria-label="Search button">
        <Search size={20}/>
    </button>
    <input className="searchInput h-full bg-transparent flex-grow p-2 overflow-hidden outline-none placeholder:text-[14px]" type="text" placeholder="Search" />
</form>
   )
}