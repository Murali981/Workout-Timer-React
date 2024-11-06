import { memo } from "react";

/* HANDLING THE PERFORMANCE ISSUE ?

   If the children components are re-rendering just because the parent component is re-rendering then the solution is to
   memoize those children components. Here in the below we are memoizing the ToggleSounds component below. As we are exporting
   the below ToggleSounds component we can memoize using the memo hook directly in the export statement as below where we are
   exporting the result like this "export default memo(ToggleSounds)"
*/

function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds); // Memoizing the component As we are exporting
// the below ToggleSounds component we can memoize using the memo hook directly in the export statement as below where we are
// exporting the result like this "export default memo(ToggleSounds)"
