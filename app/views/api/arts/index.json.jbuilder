json.arts do
  json.array! @arts do |art|
    json.partial! 'api/arts/art', art: art
  end
end

json.page(@page)
json.total_pages(@total_pages)
