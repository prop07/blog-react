import Button from "@/shared/components/ui/button/Button";
import { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  onEdit:()=>void,
  onDelete:()=>void

}


const BlogActions = ({onDelete, onEdit}:Props) => {
  const [toggleAction, setToggleAction] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    interface EventType extends MouseEvent {
      target: HTMLElement
    }

    const handleClickOutside = (event: EventType) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleAction(false);
      }
    };

    document.addEventListener("mousedown", (event: MouseEvent) => handleClickOutside(event as EventType));
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as EventListener);
    };
  }, []);



  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${toggleAction ? "relative" : "block"}`}
      ref={menuRef}
    >
      <Button
        onClick={() => {
          setToggleAction(!toggleAction);
        }}
        icon={<BsThreeDotsVertical size={20} />}
      />
      {toggleAction && (
        <div className="absolute top-[73%] -left-15 mt-2 rounded-md inline-block p-1 text-sm tracking-wider bg-primary shadow-md shadow-default border border-default-border">
          <p
          onClick={onEdit}
            className=" px-2 py-1 text-center whitespace-nowrap   cursor-pointer rounded-md hover:bg-default-hover ease-in-out duration-200"
          >
            Update
          </p>
          <p
            onClick={onDelete}
            className=" px-2 py-1  text-center  cursor-pointer rounded-md hover:bg-default-hover ease-in-out duration-200"
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogActions;