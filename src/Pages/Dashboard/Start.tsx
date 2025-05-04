import Button from "../../Components/Buttons/Button"
const Start = () => {


  

  return (
    <>
        <Button type="full">Button Full</Button>
        <Button type="border">Button Border</Button>
        <Button type="inline">Button inline</Button>
        <Button type="full" disabled>Button Full Disabled</Button>
        <Button type="border" disabled>Button Border Disabled</Button>
        <Button type="inline" disabled>Button inline Disabled</Button>
    </>
  )
}

export default Start
