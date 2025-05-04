import Button from "../../Components/Buttons/Button"
const Start = () => {

  const clickhandler = (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Yes");
        resolve();
      }, 5000);
    });
  };
  

  return (
    <>
        <Button onClick={clickhandler} type="full">Test</Button>
    </>
  )
}

export default Start
