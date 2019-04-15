defmodule Backend.DataView do
	use Backend.Web, :view

	def render("index.json", %{expenses: expenses}) do
		%{
			expenses: Enum.map(expenses, &expenses_json/1)
		}
	end

	def expenses_json(expense) do
		%{
			id: expense.id,
			name: expense.name,
			cost: expense.cost,
			type: expense.type
		}
	end
end