defmodule Backend.Repo.Migrations.Expenses do
  use Ecto.Migration

  def change do
		create table(:expenses) do

			add :name, :string
			add :cost, :decimal
			add :type, :string

		timestamps()
		end
	end
end
