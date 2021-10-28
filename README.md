# Sample JWT sign and verify
`These .key files are samples and aren't used for anything`

## usage
- get token
```sh
node index.js
#eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MzU0MTY4NDAsImV4cCI6MTYzNTQxNjk2MCwiYXVkIjoiUmVjaXBpZW50U2VydmljZSIsImlzcyI6IlN1cGVyU2VjdXJlQXV0aG9yaXR5Iiwic3ViIjoiYnJlbmRlbiJ9.VOtsErboy7-k-LHZ-DSCXNpUi0sADcgB9vF0ry9G1WSr0cIYCyuwdz7hZzN3ZbyNM7vtHSEHxT3x_yGDH9RzFIXvweeyXYdjSl1juWs7XbNi1SY20ZgK-izE-CtHMJ-Q6Kbew70YwogO8nb0OVPCesjYk8wsqRDQCF86go4bweg
#{
#  foo: 'bar',
#  iat: 1635416840,
#  exp: 1635416960,
#  aud: 'RecipientService',
#  iss: 'SuperSecureAuthority',
#  sub: 'brenden'
#}
```

- check verify 
```sh
node verify.js eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MzU0MTY5NTksImV4cCI6MTYzNTQxNjk3NCwiYXVkIjoiUmVjaXBpZW50U2VydmljZSIsImlzcyI6IlN1cGVyU2VjdXJlQXV0aG9yaXR5Iiwic3ViIjoiYnJlbmRlbiJ9.A1WyEvmquhvHh749XQ5XIJv9bBBKEnlEYun2LC5CDdhfcq5d5hm9NvOlWj6mQUc8J7ggxBKawND5l3m-fTrY0V-A9tivGmmjIc4TdEKgEHUpl4UiaY7bNzTOVmSyvqnc7NlMow8XHaaWABXdydNt8HOA0vrsgu1EiEpApfjxiq0

# either
# {
#   foo: 'bar',
#   iat: 1635416840,
#   exp: 1635416960,
#   aud: 'RecipientService',
#   iss: 'SuperSecureAuthority',
#   sub: 'brenden'
# }
# or 
# Expired/invalid token
```