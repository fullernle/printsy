class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
