import Notes from "./Notes";
import Search from "./Search";

export default function Container() {
    return (
        <div className=" flex-1">
            <Search />
            <Notes />
        </div>
    )
}