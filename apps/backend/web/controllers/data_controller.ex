defmodule Backend.DataController do
	use Backend.Web, :controller

	alias Backend.Expenses

	plug :scrub_params, "expenses" when action in [:create]

	def index(conn, _params) do
			expenses = Repo.all(Expenses)
			render conn, "index.json", expenses: expenses
	end

	def create(conn, %{"expenses" => expenses_params}) do
			changeset = Expenses.changeset(%Expenses{}, expenses_params)

			case Repo.insert(changeset) do
					{:ok, _expenses} ->
							expenses = Repo.all(Expenses)
							render conn, "index.json", expenses: expenses
			end
	end

	def delete(conn, %{"id" => id}) do
		expense = Repo.get(Expenses, id)
		Repo.delete(expense)
		expenses = Repo.all(Expenses)
		render conn, "index.json", expenses: expenses
	end

	def options(conn, _params) do
			conn
			|> send_resp(200, "GET,POST,DELETE,OPTIONS,PUT")
	end

end