class AddUserToCreature < ActiveRecord::Migration[5.1]
  def change
    add_reference :creatures, :user, foreign_key: true
  end
end
