import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children:React.ReactNode;
    setselectedPage:(value:SelectedPage)=>void;
}

const ActionButton = ({children,setselectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-yellow-400 h-[40px] p-2 hover:bg-primary-500 hover:text-white"
    onClick={()=>setselectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}>
        {children}
    </AnchorLink>
  )
}

export default ActionButton