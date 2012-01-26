class AjtestController < ApplicationController
	def savetodo
		@tlist = Todo.add_new(params)
		render :json => { :data => @tlist }	
	end

	def all
		@dolist = Todo.get_all()[:data]
		render :json => {:data => @dolist}
	end

	def index
	end

	def del
		@dlist = Todo.del_data(params)
		render :json => {:data => @dlist}
	end
end
