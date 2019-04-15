defmodule Backend.Router do
	use Backend.Web, :router

	pipeline :api do
			plug :cors
			plug :accepts, ["json"]
	end

	scope "/", Backend do
			pipe_through :api

			get "/data", DataController, :index
			post "/data", DataController, :create
			delete "/data/:id", DataController, :delete
			options "/data/:id", DataController, :options
			options "/data", DataController, :options
	end

	def cors(conn, _opts) do
			conn
			|> put_resp_header("Access-Control-Allow-Origin", "http://localhost:3000")
			|> put_resp_header("Access-Control-Allow-Headers", "Content-Type")
			|> put_resp_header("Access-Control-Allow-Methods", "GET,PUT,PATCH,OPTIONS,DELETE,POST")
	end

end