import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import uuid from "uuid";
test("should setup remove-expense-action", () => {
  const id = uuid();
  const action = removeExpense({ id });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id
  });
});

test("should setup edit-expense-action", () => {
  const id = uuid();
  const updates = {
    description: "This is an update",
    amount: 12500
  };
  const action = editExpense(id, updates);
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id,
    updates
  });
});

test("should setup add-expense-action with provided values", () => {
  const data = {
    description: "Rent",
    note: "This was last months rent",
    amount: 109500,
    createdAt: 1000
  };
  const action = addExpense(data);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...data,
      id: expect.any(String)
    }
  });
});

test("should setup add-expense-action with default values", () => {
  const defaultData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultData,
      id: expect.any(String)
    }
  });
});
