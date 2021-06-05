class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false, index: true
      t.string :description, null: false
      t.integer :price, null: false
      t.integer :seller_id, null: false, index: true

      t.timestamps
    end
  end
end
