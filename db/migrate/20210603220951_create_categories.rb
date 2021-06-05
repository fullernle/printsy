class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name, null: false, index: {unique: true}
      t.integer :product_category_id, null: false, index: true 
      t.timestamps
    end
  end
end
