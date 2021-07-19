class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false, index: true
      t.text :body, null: false
      t.integer :product_id, null: false, index: true
      t.integer :reviewer_id, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
