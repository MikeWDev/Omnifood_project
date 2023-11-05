import { useEffect, useState } from "react";
import { OmniFoodLogo } from "../assets/img/imgIndex";
import { Link } from "react-scroll";
const NavBar = () => {
  
  const[IntersectinnState, setIntersectingState] = useState(true);
  const[stickyClass, setStickyClass] = useState("");
  useEffect(() =>{
  const obs = new IntersectionObserver(
    function (entires){
      const ent = entires[0];
      
    
      if(ent.isIntersecting===false){
        setIntersectingState(false)
      }else{
        if(ent.isIntersecting===true){
          setIntersectingState(true)
        }
      }
    },
    {
      root:null,
      threshold:0,
      rootMargin:"-90px"
    }
  );
  const heroEl = document.querySelectorAll(".section-hero");
  
  heroEl.forEach((el) =>{
    obs.observe(el)
  })
 })
  console.log(IntersectinnState);
useEffect(() =>{
 console
  const bodyEl = document.body;
   if(IntersectinnState===false){
    setStickyClass("sticky");
    console.log(bodyEl);
    bodyEl.classList.add("sticky");
   } else{
    if(IntersectinnState===true){
      bodyEl.classList.remove("sticky");
      console.log(bodyEl);
    }
   }

},[IntersectinnState])

  // const obs = new IntersectionObserver(
  //   function (entries) {
  //     const ent = entries[0];
  //     console.log(ent);

  //     // if (ent.isIntersecting === false) {
  //     //   setStickyClass("sticky");
  //     //   bodyEl.classList.add({ stickyClass });
  //     // }
  //     // if (ent.isIntersecting === true) {
  //     //   setStickyClass("");
  //     // }
  //   },
  //   {
  //     root: null,
  //     threshold: 0,
  //     rootMargin: "-80px",
  //   }
  // );
  // obs.observe(sectionHeroEl);
  // // sectionHeroEl.forEach((el) => {
  // // });

  
    return <>
      <header className={`header `}>
        <Link to="hero" duration={2000} smooth={true} className="footer-logo">
          <img className="logo" alt="Omnifood logo" src={OmniFoodLogo} />
        </Link>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link
                to="how"
                duration={2000}
                smooth={true}
                className="main-nav-link"
                href="#how"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="meals"
                duration={2000}
                smooth={true}
                className="main-nav-link"
                href="#meals"
              >
                Meals
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                duration={2000}
                smooth={true}
                className="main-nav-link"
                href="#testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                duration={2000}
                smooth={true}
                className="main-nav-link"
                href="#pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="cta"
                duration={1000}
                smooth={true}
                className="main-nav-link nav-cta"
                href="#cta"
              >
                Try for free
              </Link>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav">
          <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
    </>
}


export default NavBar;
