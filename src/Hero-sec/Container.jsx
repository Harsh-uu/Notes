import NoteContainer from "./NoteContainer";
import Notes from "./Notes";
import Search from "./Search";

export default function Container() {
    return (
        <div className=" flex-1 bg-[#0d1017]">
            <Search />
            <NoteContainer />
        </div>
    )
}