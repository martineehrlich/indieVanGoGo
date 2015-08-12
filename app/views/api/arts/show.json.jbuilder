json.partial! 'api/arts/art', art: @art
json.artist do
  json.partial! 'api/users/user', user: @artist
end
