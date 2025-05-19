local ipRes = http.get("https://ipwhois.app/json/", {headers={}})

if ipRes and ipRes.body and ipRes.body.success ~= false then
  local data = ipRes.body
  local ip = data.ip or "Unknown IP address"
  local city = data.city or "Unknown city"
  local region = data.region or "Unknown region"
  local country = data.country or "Unknown country"
  local continent = data.continent or "Unknown continent"
  local latitude = data.latitude or "Unknown latitude"
  local longitude = data.longitude or "Unknown longitude"
  
  
  print("📡 IP address: " .. ip)
  print("🏙️ City: " .. city)
  print("🌄 Region: " .. region)
  print("🏛️ Country: " .. country)
  print("🌏 Continent: " .. continent)
  print("📍 Latitude: " .. latitude)
  print("📍 Longitude: " .. longitude)
  
else
  print("🚧 Cannot get IP address and location.")
end