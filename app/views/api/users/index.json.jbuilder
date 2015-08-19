json.array! @artists do |user|

  json.partial! 'api/users/user', user: user

  if user.arts
    json.arts(user.arts) do |art|
      json.partial! 'api/arts/art', art: art
    end
  end

  if user.categories
    json.categories(user.categories) do |category|
      json.partial! 'api/categories/category', category: category
    end
  end
end
