class AddAttackToCreature < ActiveRecord::Migration[5.1]
  def change
    add_column :creatures, :attack, :integer
  end
end
