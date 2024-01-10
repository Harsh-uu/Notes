import Sidenav from "./Navbar/Sidenav";
import Container from "./Note-container/Container";

export default function App(){
  return(
    <div className="flex flex-row">
      <Sidenav/>
      <Container/>
    </div>
  )
}