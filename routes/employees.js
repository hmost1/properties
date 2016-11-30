//TODO: not sure why this is in "routes"
//should be models, handle db stuff here 

var properties = [
    {"id": 1, "buildingId":3, "apt":"A", "bedrooms":3, "bathrooms":1.5, "nightly":100.00},
    {"id": 2, "buildingId":3, "apt":"B", "bedrooms":3, "bathrooms":1.5, "nightly":100.00},
    {"id": 3, "buildingId":3, "apt":"C", "bedrooms":4, "bathrooms":2, "nightly":150.00},
    {"id": 4, "buildingId":2, "apt":"1100", "bedrooms":1, "bathrooms":1, "nightly":50.00},
    {"id": 5, "buildingId":2, "apt":"206", "bedrooms":1, "bathrooms":1, "nightly":50.00},
    {"id": 6, "buildingId":1, "apt":"1", "bedrooms":2, "bathrooms":2, "nightly":150.00},
    {"id": 7, "buildingId":1, "apt":"2", "bedrooms":2, "bathrooms":2, "nightly":150.00}
    /*{"id": 1, "firstName": "Julinco", "lastName": "Taylor", "managerId": 0, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
    {"id": 2, "firstName": "HugeEuge", "lastName": "Lee", "managerId": 0, "managerName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
    {"id": 3, "firstName": "John", "lastName": "Williams", "managerId": 0, "managerName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
    {"id": 4, "firstName": "Ray", "lastName": "Moore", "managerId": 0, "managerName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
    {"id": 5, "firstName": "Paul", "lastName": "Jones", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
    {"id": 6, "firstName": "Paula", "lastName": "Gates", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
    {"id": 7, "firstName": "Lisa", "lastName": "Wong", "managerId": 1, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
    {"id": 8, "firstName": "Gary", "lastName": "Donovan", "managerId": 1, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
    {"id": 9, "firstName": "Kathleen", "lastName": "Byrne", "managerId": 4, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
    {"id": 10, "firstName": "Amy", "lastName": "Jones", "managerId": 4, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
    {"id": 11, "firstName": "Steven", "lastName": "Wells", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}*/
];

var buildings = [
    {"id": 1, "vacant": 1, "occupied": 1, "description": "Lake Washington Condos", "street": "McGilvra Blvd. E","number": "1815","city": "Seattle", "state": "WA", "zip":"98112"},
    {"id": 2, "vacant": 2, "occupied": 0, "description": "Seattle Edgewater apartments", "street": "Parkside Drive E","number": "1717","city": "Seattle", "state": "WA", "zip":"98112"},
    {"id": 3, "vacant": 0, "occupied": 3, "description": "SF split victorian", "street": "Clay Street","number": "2973","city": "San Francisco", "state": "CA", "zip":"94115"}
]

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(properties.filter(function(employee) {
            return (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(properties);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(properties[id]);
};

exports.findReports = function (req, res, next) {
    var id = parseInt(req.params.id),
        response,
        reports = [],
        employee;

    response = {
        id: id,
        firstName: properties[id].firstName,
        lastName: properties[id].lastName,
        title: properties[id].title,
        pic: properties[id].pic
    }

    for (var i=0; i<properties.length; i++) {
        employee = properties[i];
        if (employee.managerId === id) {
            reports.push({id: employee.id, firstName: employee.firstName, lastName: employee.lastName, title: employee.title, pic: employee.pic});
        }
    }

    response.reports = reports;

    res.send(response);
};

//todo: add search
exports.findAllBuildings = function (req, res, next) {
    res.send(buildings);
};

//To be exported into buildings
exports.findBuildingById = function (req, res, next) {
    var id = req.params.id;
    res.send(buildings[id]);
};

//all the properties in this building
exports.findAllFromBuilding = function(req, res, next) {
    var id = parseInt(req.params.id),
        response,
        spaces = [],
        property;

    response = {
        id: id,
        number: buildings[id-1].number,
        street: buildings[id-1].street,
        city: buildings[id-1].city,
        description: buildings[id-1].description
    }

    for (var i=0; i<properties.length; i++) {
        property = properties[i];

        if (property.buildingId === id) {
            spaces.push(property);        
        }
    }

    response.properties = spaces;
    res.send(response);
}

exports.addNewBuilding = function(req, res, next) {

    //todo: building object, new building()
    var building = req.body; 
    building.id = buildings.length + 1;
    building.vacant = 0; 
    building.occupied = 0;
    buildings.push(building);
    
    res.send(200)
}

exports.addNewProperty = function(req, res, next) {
    //todo: property object, new property()
    var property = req.body;
    property.id = properties.length + 1; 
    property.buildingId = parseInt(property.buildingId);
    properties.push(property);
    
    buildings[property.buildingId-1].vacant += 1;

    res.send(200);
}
