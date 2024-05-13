import folium

# Create a map object
w_map = folium.Map()

# Show the map object
w_map

# Create a map object with specific location and zoom level
mapobj = folium.Map(location=[23.0225, 72.5714], zoom_start=8)

# Save the map to an HTML file
mapobj.save('output.html')

# Show the map object
mapobj
