class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :quantity, null: false
      t.integer :cart_id, null: false, index: true
      t.integer :product_id, null: false, index: true

      t.timestamps
    end
  end
end
