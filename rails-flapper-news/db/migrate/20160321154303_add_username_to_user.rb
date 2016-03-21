class AddUsernameToUser < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_column :users, :string, :string
    add_column :users, :uniq, :string
  end
end
