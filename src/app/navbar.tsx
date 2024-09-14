import Link from "next/link"
function Navbar(){
    return(
        <div>
            <h5>LOGO</h5>
            <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
        </div>
    )
}
export default Navbar