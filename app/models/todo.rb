class Todo < ActiveRecord::Base

	def self.add_new(params)
		tl = Todo.new(:name => params[:tdata])
		tl.save
		return tl
	end

	def self.get_all()
		dodata=[]
		dname=Todo.select("name, id")
		dname.each do|d|
			dodata << {
				:name => d.name,
				:id => d.id
			}
		end
		return {:data => dodata}
	end

	def self.del_data(params)
		#idlist=Todo.where('name' => params[:rdata]).select("id")
		Todo.destroy_all(:id => params[:rd])
		return params
	end

end

