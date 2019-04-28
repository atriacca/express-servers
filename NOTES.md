Terms
* Resource - Document
    - An individual peice of data = {}

* Collection
    - An array of objects - aka A collection of similar resources

* Base (root) Url
    - www.google.com/

* API Endpoint
    - www.google.com/images

* RESTful API Endpoint examples
    - Representational State Transfer
    -  www.google.com/images

    - www.campingisgood.com
        - tents
        - equipment
        - sleepingbags
        - cookware
        - sleepware

    www.campingisgood.com/equipment/tents/fj98af9898ef
    www.campingisgood.com/equipment/sleepingbags
    www.campingisgood.com/equipment

* Client
    - Person that's requesting data - device

* Server
    1. Listens for requests
    2. Sends a response

* Request Method
    1. GET
    2. POST
    3. PUT
    4. DELETE
    5. GET ONE

* Middleware
    - express.json  - we receive user object on POST & PUT requests
    - morgan        - debugging

* req.body - The object a user sends in a POST or PUT request

* req.params - Typically used to send an ID in a GET ONE request
             - Also used for PUT and DELETE requests
    // frontend
    axios.get("campingisgood.com/tents/238923929834)
    // backend
    app.get("/campingisgood.com/tents/:id)

* req.query - Filtering out items from a collection 
    ?color=blue&age=10


