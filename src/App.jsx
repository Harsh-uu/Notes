import Sidenav from "./Navbar/Sidenav";
import Container from "./Hero-sec/Container";

export default function App(){
  return(
    <div className="flex flex-row h-[100vh] overflow-clip">
      <Sidenav/>
      <Container/>
    </div>
  )
}