import Button from "../../Components/Buttons/Button"
import InputText from "../../Components/Form/inputs/InputText"
const Start = () => {


  

  return (
    <>
        <Button type="full">Button Full</Button>
        <Button type="border">Button Border</Button>
        <Button type="inline">Button inline</Button>
        <Button type="full" disabled>Button Full Disabled</Button>
        <Button type="border" disabled>Button Border Disabled</Button>
        <Button type="inline" disabled>Button inline Disabled</Button>


        <hr />

        <InputText type="text" label="Name" name="name" placeholder="Insert your name" required />
    </>
  )
}

export default Start
