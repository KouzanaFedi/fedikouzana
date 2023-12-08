import React from "react";

const Cursor = () => {
  const DELAY = 5;

  const cursorVisible = React.useRef(true);
  const cursorEnlarged = React.useRef(false);

  const innerRef = React.useRef<HTMLDivElement>();
  const outerRef = React.useRef<HTMLDivElement>();

  const endX = React.useRef(-window.innerWidth / 2);
  const endY = React.useRef(-window.innerHeight / 2);

  const _x = React.useRef(0);
  const _y = React.useRef(0);

  const requestRef = React.useRef(null);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      innerRef.current.style.opacity = "1";
      outerRef.current.style.opacity = "1";
    } else {
      innerRef.current.style.opacity = "0";
      outerRef.current.style.opacity = "0";
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      innerRef.current.style.transform = "translate(-50%, -50%) scale(0, 0)";
      outerRef.current.style.transform = "translate(-50%, -50%) scale(2, 2)";
      outerRef.current.style.backgroundColor = "#75d9b3";
      outerRef.current.style.mixBlendMode = "exclusion";
      outerRef.current.style.border = "0";
    } else {
      innerRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      outerRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      outerRef.current.style.backgroundColor = "transparent";
      outerRef.current.style.mixBlendMode = "normal";
      outerRef.current.style.border = "1px solid #75d9b3";
    }
  };

  const mouseMoveEvent = (e: MouseEvent) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    innerRef.current.style.top = endY.current + "px";
    innerRef.current.style.left = endX.current + "px";

    if (checkIfHoverOnSpecialTargets(e)) {
      cursorEnlarged.current = true;
      toggleCursorSize();
    } else {
      cursorEnlarged.current = false;
      toggleCursorSize();
    }
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  function checkIfHoverOnSpecialTargets(event: MouseEvent) {
    if (event.target instanceof Element) {
      // if target element
      if (event.target.classList.contains("special-element")) return true;
      const tagName = event.target.tagName.toLowerCase();
      if (tagName === "a" || tagName === "button") return true;

      // if closest parent
      if (event.target.closest(".special-element")) return true;
      if (event.target.closest("a")) return true;
      if (event.target.closest("button")) return true;
      else return false;
    }
  }

  const animateOuter = () => {
    _x.current += (endX.current - _x.current) / DELAY;
    _y.current += (endY.current - _y.current) / DELAY;

    outerRef.current.style.top = _y.current + "px";
    outerRef.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateOuter);
  };

  React.useEffect(() => {
    document.body.addEventListener("mouseenter", mouseEnterEvent);
    document.body.addEventListener("mouseleave", mouseLeaveEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    animateOuter();

    return () => {
      document.body.removeEventListener("mouseenter", mouseEnterEvent);
      document.body.removeEventListener("mouseleave", mouseLeaveEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div ref={innerRef} className="cursor-inner hidden md:block"></div>
      <div ref={outerRef} className="cursor-outer hidden md:block"></div>
    </>
  );
};

export default Cursor;
