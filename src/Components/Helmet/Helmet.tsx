import { FC } from "react"

interface HemletProps {
    title:string;
}

const Helmet:FC<HemletProps> = ({title}) => {
  return (
    <>
        <title>{title}</title>
    <meta name="description" content="This is the Start page of the Audiophile Shop." />
    <meta name="robots" content="noindex, nofollow" />
    </>
  )
}

export default Helmet
