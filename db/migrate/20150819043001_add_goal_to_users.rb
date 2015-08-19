class AddGoalToUsers < ActiveRecord::Migration
  def change
    add_column :users, :goal, :integer
  end
end
