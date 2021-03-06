import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button} from '../../globalStyles';
import { 
  Nav, 
  NavbarContainer,
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn 
} from './Navbar.elements';


const Navbar = () => {
    
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  }
  const handleCloseMobileMenu =() => {
    setClick(false);
  }
  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  }


  useEffect(()=>{
    showButton();
  },[])


  window.addEventListener('resize',showButton);


  return (
    <>
      <IconContext.Provider value={{color: 'white'}}>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/" onClick={handleCloseMobileMenu}>
                      <NavIcon/>
                      ULTRA
                  </NavLogo>
                  <MobileIcon
                    onClick={handleClick}
                  >
                    {click ? <FaTimes/> : <FaBars/>}
                  </MobileIcon>
                  <NavMenu onclick={handleClick} click={click}>
                    <NavItem>
                      <NavLinks onClick={handleCloseMobileMenu} to="/">
                        Home
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks onClick={handleCloseMobileMenu} to="/services">
                        Services
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks onClick={handleCloseMobileMenu} to="/products">
                        Products
                      </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                      {
                        button ? (
                          <NavBtnLink onClick={handleCloseMobileMenu} to="/sign-up">
                            <Button primary>
                              SIGN UP
                            </Button>
                          </NavBtnLink>
                        ) : (
                          <NavBtnLink to="/sign-up">
                            <Button fontBig primary>
                              SIGN UP
                            </Button>
                          </NavBtnLink>
                        )
                      } 
                    </NavItemBtn>
                  </NavMenu>

              </NavbarContainer>
          </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;