json.partial! 'api/users/user', user: @user

if @user.arts
  json.arts(@user.arts) do |art|
    json.partial! 'api/arts/art', art: art
  end
end
