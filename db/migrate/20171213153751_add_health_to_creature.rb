class AddHealthToCreature < ActiveRecord::Migration[5.1]
  def change
    add_column :creatures, :health, :integer
  end
end
