import EuropeSvg from "./EuropeSvg";

function EuropeMap() {
  return (
    <div>
      <EuropeSvg />
    </div>
  );
}

export default EuropeMap;

// const Europe = () => {
//   const handleClick = (e) => {
//     const clickedId = e.target.id;
//     if (clickedId) {
//       console.log("Clicked country ID:", clickedId);
//       // You can add logic here to highlight, show info, etc.
//     }
//   };

//   return (
//     <div onClick={handleClick}>
//       <Europe />
//     </div>
//   );
// };
