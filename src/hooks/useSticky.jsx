const[IntersectinnState, setIntersectingState] = useState(true);
const[stickyClass, setStickyClass] = useState("");
useEffect(() =>{
const obs = new IntersectionObserver(
  function (entires){
    const ent = entires[0];
    const bodyEl = document.body;
  
    if(ent.isIntersecting===false){
      bodyEl.classList.add("sticky");
      setIntersectingState(false)
      console.log(bodyEl);
    }else{
      if(ent.isIntersecting===true){
        bodyEl.classList.remove("sticky");
        setIntersectingState(true)
        console.log(bodyEl);
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
}, [IntersectinnState])

