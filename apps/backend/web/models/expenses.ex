defmodule Backend.Expenses do
	use Backend.Web, :model

	schema "expenses" do
			field :name, :string
			field :cost, :decimal
			field :type, :string

			timestamps()
	end

	def changeset(struct, params \\ %{}) do
			struct
			|> cast(params, [:name, :cost, :type])
			|> unique_constraint(:id)
	end

end