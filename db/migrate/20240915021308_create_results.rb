class CreateResults < ActiveRecord::Migration[7.2]
  def change
    create_table :results do |t|
      t.integer :score, null: false

      t.timestamps
    end
  end
end
