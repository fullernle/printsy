class RemoveUniqueReviewer < ActiveRecord::Migration[5.2]
  def change
		remove_index :reviews, :reviewer_id
		add_index :reviews, :reviewer_id 
  end
end
