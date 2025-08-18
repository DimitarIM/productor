import { AnimatePresence } from "motion/react";
import { useState } from "react";

function CategoriesLink({ children, CategoriesPopup }: {
  children: React.ReactNode;
  CategoriesPopup: React.ReactNode;
}) {
  const [active, setActive] = useState(false);

  const isShowing = active && CategoriesPopup;

  return (
    <div
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative h-fit w-fit mr-10">
      <div className="realtive text-primary text-2xl">{children}
        <span
          style={{
            transform: isShowing ? "scaleX(1)" : "scaleX(0)",
          }}
          className='absolute -bottom-2 -left-2 -right-2 h-[0.5px] origin-center rounded-full bg-primary transition-transform duration-200 ease-out' />
      </div>
      <AnimatePresence>
        {isShowing && CategoriesPopup}
      </AnimatePresence>
    </div>
  );
}

export default CategoriesLink