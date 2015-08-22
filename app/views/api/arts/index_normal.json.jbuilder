json.array! @arts do |art|
  json.partial! 'api/arts/art', art: art
end
