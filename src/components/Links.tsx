import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../types";


type Props = {
    page:string,
    selectedPage:SelectedPage,
    setselectedPage: (value:SelectedPage) => void;
}

const Links = ({page,
    selectedPage,
    setselectedPage}: Props) => {

    const lowerCasePage=page.toLowerCase().replace(/ /g,"") as SelectedPage;

  return (
    <AnchorLink
        className={`${selectedPage===lowerCasePage? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={()=>setselectedPage(lowerCasePage)}
        
    >
        {page}
    </AnchorLink>
  )
}

export default Links