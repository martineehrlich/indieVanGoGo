json.array! @results do |result|
  if result.is_a? User
    json.type "Artist"
    json.header result.search_header
    json.id result.id
    json.artist_id result.id
    json.image result.search_image
  else
    json.type "Art"
    json.header result.search_header
    json.id result.id
    json.artist_id result.artist_id
    json.image result.search_image
  end
end
