import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

// should add an expense
test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Fourth expense",
    note: "",
    amount: 14500,
    createdAt: moment(0)
      .add(2, "days")
      .valueOf()
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense]);
});

// should edit an expense
test('should edit an expense', () => {
  const updates = {
    id: '1',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(updates);
})


// should edit an expense with non-existing id
test('should edit an expense with non-existing id', () => {
  const updates = {
    id: '1',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});