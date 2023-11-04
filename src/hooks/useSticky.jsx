// const UseSticky = () => {
//   const [stickyClass, setStickyClass] = useState("");
//   const sectionHeroEl = document.querySelectorAll(".section-hero");
//   const bodyEl = document.querySelectorAll("body");
//   const obs = new IntersectionObserver(
//     function (entries) {
//       const ent = entries[0];
//       console.log(ent);

//       if (ent.isIntersecting === false) {
//         setStickyClass("sticky");
//         console.log(bodyEl);
//       }

//       if (ent.isIntersecting === true) {
//         setStickyClass("");
//       }
//     },
//     {
//       // In the viewport
//       root: null,
//       threshold: 0,
//       rootMargin: "-80px",
//     }
//   );
//   sectionHeroEl.forEach((el) => {
//     obs.observe(el);
//   });
//   return stickyClass;
// };

// export default UseSticky;
