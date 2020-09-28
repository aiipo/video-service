import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './scrollbar.scss';

const SCROLL_BOX_MIN_HEIGHT = 20;

interface ScrollbarInterface {
  children: React.ReactNode;
}

const Scrollbar = ({ children }: ScrollbarInterface): React.ReactElement => {
  const scrollHostRef = useRef<HTMLDivElement>(null);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);

  const handleDocumentMouseUp = useCallback((event: MouseEvent) => {
    if (isDragging) {
      event.preventDefault();
      setDragging(false);
    }
  }, [isDragging]);

  const handleDocumentMouseMove = useCallback((event: MouseEvent) => {
    if (isDragging && scrollHostRef.current) {
      event.preventDefault();
      event.stopPropagation();
      const scrollHostElement = scrollHostRef.current;
      const { scrollHeight, offsetHeight } = scrollHostElement;

      const deltaY = event.clientY - lastScrollThumbPosition;
      const percentage = deltaY * (scrollHeight / offsetHeight);

      setScrollThumbPosition(event.clientY);
      setScrollBoxTop(
        Math.min(
          Math.max(0, scrollBoxTop + deltaY),
          offsetHeight - scrollBoxHeight,
        ),
      );
      scrollHostElement.scrollTop = Math.min(
        scrollHostElement.scrollTop + percentage,
        scrollHeight - offsetHeight,
      );
    }
  }, [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]);

  const handleScrollThumbMouseDown = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setScrollThumbPosition(event.clientY);
    setDragging(true);
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollHostRef && scrollHostRef.current) {
      const { scrollTop, scrollHeight, offsetHeight } = scrollHostRef.current;

      let newTop = (scrollTop / scrollHeight) * offsetHeight;
      newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
      setScrollBoxTop(newTop);
    }
  }, []);

  useEffect(() => {
    const scrollHostElement = scrollHostRef.current;
    if (scrollHostElement) {
      const { clientHeight, scrollHeight } = scrollHostElement;
      const scrollThumbPercentage = clientHeight / scrollHeight;
      const scrollThumbHeight = Math.max(
        scrollThumbPercentage * clientHeight,
        SCROLL_BOX_MIN_HEIGHT,
      );
      setScrollBoxHeight(scrollThumbHeight);
      scrollHostElement.addEventListener('scroll', handleScroll, true);
      return (): void => {
        scrollHostElement.removeEventListener('scroll', handleScroll, true);
      };
    }
    return undefined;
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mouseleave', handleDocumentMouseUp);
    return (): void => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mouseleave', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return (
    <div className="scroll-host-container">
      <div className="scroll-host" ref={scrollHostRef}>
        {children}
      </div>
      <div className="scroll-bar">
        <div
          className="scroll-thumb"
          style={{ height: scrollBoxHeight, top: scrollBoxTop }}
          onMouseDown={handleScrollThumbMouseDown}
        />
      </div>
    </div>
  );
};

export default Scrollbar;
