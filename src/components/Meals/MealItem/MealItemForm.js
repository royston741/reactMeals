import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classess from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amoubntInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amoubntInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form action="" className={classess.form} onSubmit={submitHandler}>
      <Input
        ref={amoubntInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid&&<p>Please enter a valid amount(1-5).</p>}
    </form>
  );
}

export default MealItemForm;
