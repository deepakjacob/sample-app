import React from "react";
// SFC
export const ChildComponent = props => {
  props.f(100);
  return (
    <div>
      My Glorified Child Component Value from app component is {props.v}
    </div>
  );
};

// export function ChildComponent(props) {
//   return (
//     <div>
//       My Glorified Child Component Value Normal Function from app component is{" "}
//       {props.value1}
//     </div>
//   );
// }
