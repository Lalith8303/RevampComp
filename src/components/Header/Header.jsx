

const Header = () => {
  return (
    <div className="navBar flex justify-between p-[3rem]">
      <div className="logoDiv ">
        <h1 className="logo text-Blue-Color text-[24px] "><strong>Job</strong>Seeker</h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuItems text-Gray-Color hover:text-Blue-Color">Home</li>
        <li className="menuItems text-Gray-Color hover:text-Blue-Color">About</li>
        <li className="menuItems text-Gray-Color hover:text-Blue-Color">Contact us</li>
        <li className="menuItems text-Gray-Color hover:text-Blue-Color">Login</li>
        <li className="menuItems text-Gray-Color hover:text-Blue-Color">Register</li>
        
      </div>

    </div>
  )
}

export default Header