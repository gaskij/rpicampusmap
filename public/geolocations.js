/*
Each point on the map is a "Feature" type object. These Features
specifically are "Points" that show on the map.
There are many methods that can be used on points, described here:
https://leafletjs.com/reference-1.3.4.html#point

**IMPORTANT**
**Coordinates for Point objects are used backwards (long, lat)
for some reason according to the API**
*/

var locations = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "_id": "amos",
            "id": "amos",
            "properties": {
                "name": "Amos Eaton Hall",
                "nick": "JEC",
                "category": "Academic & Research",
                "description": "Math/CS Department",
                "popupContent": "Amos Eaton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.682596, 42.730189]
            }
        },
        {
            "type": "Feature",
            "_id": "carn",
            "id": "carn",
            "properties": {
                "name": "Carnegie Building",
                "nick": "CARNEG",
                "category": "Academic & Research",
                "description": "CogSci Department",
                "popupContent": "Carnegie Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.68321, 42.730448]
            }
        },
        {
            "type": "Feature",
            "_id": "cbis",
            "id": "cbis",
            "properties": {
                "name": "Center for Biotechnology and Interdisciplinary Studies",
                "nick": "CBIS",
                "category": "Academic & Research",
                "description": "Biotech Building",
                "popupContent": "Center for Biotechnology and Interdisciplinary Studies"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.678419, 42.728252]
            }
        },
        {
            "type": "Feature",
            "_id": "cogs",
            "id": "cogs",
            "properties": {
                "name": "Cogswell Laboratory",
                "nick": "Cogswell",
                "category": "Academic & Research",
                "description": "Science Laboratory",
                "popupContent": "Cogswell Laboratory"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681343, 42.728189]
            }
        },
        {
            "type": "Feature",
            "_id": "dcc",
            "id": "dcc",
            "properties": {
                "name": "Darrin Communications Center",
                "nick": "DCC, DARRIN",
                "category": "Academic & Research",
                "amenity": "CCPD, Starbucks, DCC Cafe",
                "description": "One of the main lecture hall buildings on campus.",
                "popupContent": "Darrin Communications Center"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.679059, 42.729226]
            }
        },
        {
            "type": "Feature",
            "_id": "empire",
            "id": "empire",
            "properties": {
                "name": "Empire State Hall",
                "nick": "Empire",
                "category": "Academic & Research",
                "description": "Building housing Cogswell Lab and Engineering department",
                "popupContent": "Empire State Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.68217, 42.728373]
            }
        },
        {
            "type": "Feature",
            "_id": "empac",
            "id": "empac",
            "properties": {
                "name": "Experimental Media and Performing Arts Center at Rensselaer",
                "nick": "EMPAC",
                "category": "Academic & Research",
                "description": "Performing Arts",
                "popupContent": "Experimental Media & Performing Arts Center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.683828, 42.728883]
            }
        },
        {
            "type": "Feature",
            "_id": "lib",
            "id": "lib",
            "properties": {
                "name": "Folsom Library",
                "nick": "FOLSOM, LIB",
                "category": "Academic & Research",
                "amenity": "Observatory, Library Cafe",
                "description": "Engineering Department",
                "popupContent": "Folsom Library"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.682654, 42.729408]
            }
        },
        {
            "type": "Feature",
            "_id": "greene",
            "id": "greene",
            "properties": {
                "name": "Greene Building",
                "nick": "Greene",
                "category": "Academic & Research",
                "description": "Houses the Department of Architecture",
                "popupContent": "Greene Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681216, 42.730023]
            }
        },
        {
            "type": "Feature",
            "_id": "jec",
            "id": "jec",
            "properties": {
                "name": "Jonsson Engineering Center",
                "nick": "JEC",
                "category": "Academic & Research",
                "description": "Engineering Department",
                "popupContent": "Jonsson Engineering Center"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.6804, 42.72957]
            }
        },
        {
            "type": "Feature",
            "_id": "jrowl",
            "id": "jrowl",
            "properties": {
                "name": "Jonsson Rowland Science Center",
                "nick": "J-ROWL, JROWL",
                "category": "Academic & Research",
                "description": "Science Building",
                "popupContent": "Jonsson-Rowland Science Center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.680432, 42.728776]
            }
        },
        {
            "type": "Feature",
            "_id": "lally",
            "id": "lally",
            "properties": {
                "name": "Lally Hall",
                "nick": "LALLY",
                "category": "Academic & Research",
                "description": "IT Department",
                "popupContent": "Lally Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681929, 42.73007]
            }
        },
        {
            "type": "Feature",
            "_id": "linac",
            "id": "linac",
            "properties": {
                "name": "LINAC Facility (Gaerttner Laboratory)",
                "nick": "LINAC",
                "category": "Academic & Research",
                "description": "What even is this bro lol",
                "popupContent": "LINAC Facility"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.662296, 42.732647]
            }
        },
        {
            "type": "Feature",
            "_id": "cii",
            "id": "cii",
            "properties": {
                "name": "Low Center for Industrial Innovation",
                "nick": "LOW, CII",
                "nicknames": ["low", "cii"],
                "category": "Academic & Research",
                "description": "Right side of the DCC",
                "popupContent": "Low Center for Industrial Innovation"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.67921, 42.729732]
            }
        },
        {
            "type": "Feature",
            "_id": "mrc",
            "id": "mrc",
            "properties": {
                "name": "Materials Research Center",
                "nick": "MRC",
                "category": "Academic & Research",
                "description": "Right side of the DCC",
                "popupContent": "Low Center for Industrial Innovation"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.682706, 42.72849]
            }
        },
        {
            "type": "Feature",
            "_id": "pitt",
            "id": "pitt",
            "properties": {
                "name": "Pittsburgh Building",
                "nick": "PITT",
                "category": "Academic & Research",
                "description": "Business Building",
                "popupContent": "Pittsburgh Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.683313, 42.731174]
            }
        },
        {
            "type": "Feature",
            "_id": "rick",
            "id": "rick",
            "properties": {
                "name": "Ricketts Building",
                "nick": "Ricketts, RIC",
                "category": "Academic & Research",
                "description": "Who knows what's in here",
                "popupContent": "Ricketts Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.679757, 42.730906]
            }
        },
        {
            "type": "Feature",
            "_id": "sage",
            "id": "sage",
            "properties": {
                "name": "Russell Sage Laboratory",
                "nick": "SAGE, RIC",
                "category": "Academic & Research",
                "amenity": "Sage Beanery",
                "description": "Second biggest lecture hall on campus, not to be confused with Sage Dining Hall.",
                "popupContent": "Russell Sage Laboratory"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681671, 42.730898]
            }
        },
        {
            "type": "Feature",
            "_id": "walk",
            "id": "walk",
            "properties": {
                "name": "Walker Laboratory",
                "nick": "WALKER",
                "category": "Academic & Research",
                "description": "Biochem laboratory building",
                "popupContent": "Walker Laboratory"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.682562, 42.730863]
            }
        },
        {
            "type": "Feature",
            "_id": "west",
            "id": "west",
            "properties": {
                "name": "West Hall",
                "nick": "WEST",
                "category": "Academic & Research",
                "description": "Halfway down the hill, dumb far and haunted",
                "popupContent": "West Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.683146, 42.731702]
            }
        },
        {
            "type": "Feature",
            "_id": "winslow",
            "id": "winslow",
            "properties": {
                "name": "Winslow Building",
                "nick": "Winslow",
                "category": "Academic & Research",
                "description": "Who knows what's in here",
                "popupContent": "Winslow Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.684296, 42.730929]
            }
        },
        {
            "type": "Feature",
            "_id": "87",
            "id": "87",
            "properties": {
                "name": "87 Gymnasium",
                "nick": "87",
                "category": "Student Life",
                "description": "Open gyms for clubs or recreation",
                "popupContent": "87 Gymnasium"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.67879, 42.73078]
            }
        },
        {
            "type": "Feature",
            "_id": "acad",
            "id": "acad",
            "properties": {
                "name": "Academy Hall",
                "nick": "ACADMY",
                "category": "Student Life",
                "amenity": "Student Health Center, Registrar, Bursar, Financial Aid, Student Success Office",
                "description": "Various offices and the Academy Hall Auditorium",
                "popupContent": "Academy Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.678715, 42.727454]
            }
        },
        {
            "type": "Feature",
            "_id": "asrc",
            "id": "asrc",
            "properties": {
                "name": "Alumni Sports & Recreation Center",
                "nick": "ASRC",
                "category": "Student Life",
                "description": "???",
                "popupContent": "Alumni Sports & Recreation Center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.676878, 42.728467]
            }
        },
        {
            "type": "Feature",
            "_id": "anderson",
            "id": "anderson",
            "properties": {
                "name": "Anderson Field",
                "nick": "Rugby Field",
                "category": "Student Life",
                "description": "Used for rugby practice",
                "popupContent": "Anderson Field"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.666956, 42.734426]
            }
        },
        {
            "type": "Feature",
            "_id": "chapel",
            "id": "chapel",
            "properties": {
                "name": "Chapel + Cultural Center",
                "nick": "Chapel",
                "category": "Student Life",
                "description": "On campus chapel",
                "popupContent": "Chapel + Cultural Center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.672276, 42.731818]
            }
        },
        {
            "type": "Feature",
            "_id": "commons",
            "id": "commons",
            "properties": {
                "name": "Commons Dining Hall",
                "nick": "Commons",
                "category": "Student Life",
                "description": "Largest dining hall on campus",
                "popupContent": "Commons Dining Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.674332, 42.728289]
            }
        },
        {
            "type": "Feature",
            "_id": "ecav",
            "id": "ecav",
            "properties": {
                "name": "East Campus Athletic Village Arena",
                "nick": "ECAV",
                "category": "Student Life",
                "description": "Official basketball, volleyball courts",
                "popupContent": "East Campus Athletic Village Arena (ECAV)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.66743, 42.732301]
            }
        },
        {
            "type": "Feature",
            "_id": "ecavstad",
            "id": "ecavstad",
            "properties": {
                "name": "East Campus Athletic Village Stadium",
                "nick": "ECAV Stadium",
                "category": "Student Life",
                "description": "Official football field",
                "popupContent": "East Campus Athletic Village Stadium"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.666954, 42.733093]
            }
        },
        {
            "type": "Feature",
            "_id": "houston",
            "id": "houston",
            "properties": {
                "name": "Houston Field House",
                "nick": "field house",
                "category": "Student Life",
                "description": "hockey events",
                "popupContent": "Houston Field House"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.669483, 42.732059]
            }
        },
        {
            "type": "Feature",
            "_id": "mueller",
            "id": "mueller",
            "properties": {
                "name": "Mueller Center",
                "nick": "Mueller",
                "category": "Student Life",
                "description": "Multi-story weight and workout gym",
                "popupContent": "Mueller Center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.676902, 42.728829]
            }
        },
        {
            "type": "Feature",
            "_id": "play",
            "id": "play",
            "properties": {
                "name": "Rensselaer Playhouse",
                "nick": "Playhouse",
                "category": "Student Life",
                "description": "Drama club, plays are held here",
                "popupContent": "Rensselaer Playhouse"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.678227, 42.729227]
            }
        },
        {
            "type": "Feature",
            "_id": "radio",
            "id": "radio",
            "properties": {
                "name": "Radio Club W2SZ",
                "nick": "Radio",
                "category": "Student Life",
                "description": "RPI Student run radio station",
                "popupContent": "Radio Club W2SZ"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.663192, 42.734229]
            }
        },
        {
            "type": "Feature",
            "_id": "union",
            "id": "union",
            "properties": {
                "name": "Rensselaer Student Union",
                "nick": "Union",
                "category": "Student Life",
                "amenity": "Rathskellar Dining (Cusato's Pizza, Collar City, Halal Shack, Thunder Mountain Curry), McNeil Room, Panera Bread, Union Games Room, Clubhouse Pub",
                "description": "Oldest student run union blah blah blah",
                "popupContent": "Rensselaer Student Union"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.676647, 42.729995]
            }
        },
        {
            "type": "Feature",
            "_id": "pool",
            "id": "pool",
            "properties": {
                "name": "Robison Swimming Pool",
                "nick": "Pool",
                "category": "Student Life",
                "description": "Multi-lane pool and open swim",
                "popupContent": "Robison Swimming Pool"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.677313, 42.728007]
            }
        },
        {
            "type": "Feature",
            "_id": "sagedin",
            "id": "sagedin",
            "properties": {
                "name": "Russell Sage Dining Hall",
                "nick": "RSDH, Sage",
                "category": "Student Life",
                "amenity": "Sage-To-Go, Russell Sage Banquet Hall",
                "description": "Dining hall on cmapus, not to be confused with Russell Sage Laboratory",
                "popupContent": "Russell Sage Dining Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.678264, 42.729778]
            }
        },
        {
            "type": "Feature",
            "_id": "barton",
            "id": "barton",
            "properties": {
                "name": "Barton Hall",
                "nick": "Barton",
                "category": "Student Housing",
                "description": "Most recently renoved residence hall on Freshman Hill",
                "popupContent": "Barton Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.674091, 42.729136]
            }
        },
        {
            "type": "Feature",
            "_id": "blitman",
            "id": "blitman",
            "properties": {
                "name": "Blitman Commons",
                "nick": "blitman",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Blitman Commons"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.685893, 42.731215]
            }
        },
        {
            "type": "Feature",
            "_id": "bray",
            "id": "bray",
            "properties": {
                "name": "Bray Hall",
                "nick": "Bray, Freshman Five, Freshman Hill",
                "category": "Student Housing",
                "description": "One of five identical housing buildings in the 'Freshman Five'",
                "popupContent": "Bray Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.673686, 42.728713]
            }
        },
        {
            "type": "Feature",
            "_id": "bryck",
            "id": "bryck",
            "properties": {
                "name": "Bryckwyck",
                "nick": "Bryck",
                "category": "Student Housing",
                "description": "Iss brick",
                "popupContent": "Bryckwyck"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.663865, 42.734785]
            }
        },
        {
            "type": "Feature",
            "_id": "barh",
            "id": "barh",
            "properties": {
                "name": "Burdett Avenue Residence Hall",
                "nick": "BARH, BAR-H",
                "category": "Student Housing",
                "description": "Residence Hall on ECAV with its own dining hall.",
                "popupContent": "Burdett Avenue Residence Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.671231, 42.731026]
            }
        },
        {
            "type": "Feature",
            "_id": "colonie",
            "id": "colonie",
            "properties": {
                "name": "Colonie Apartments",
                "nick": "Colonie",
                "category": "Student Housing",
                "description": "Deep Residence Hall",
                "popupContent": "Colonie Apartments"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.669785, 42.737063]
            }
        },
        {
            "type": "Feature",
            "_id": "hall",
            "id": "hall",
            "properties": {
                "name": "Hall Hall",
                "nick": "Hall Hall",
                "category": "Student Housing",
                "description": "Freshman Five Residence Hall",
                "popupContent": "Hall Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.675048, 42.728552]
            }
        },
        {
            "type": "Feature",
            "_id": "nason",
            "id": "nason",
            "properties": {
                "name": "Nason Hall",
                "nick": "Nason",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Nason Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.673598, 42.727664]
            }
        },
        {
            "type": "Feature",
            "_id": "north",
            "id": "north",
            "properties": {
                "name": "North Hall",
                "nick": "North",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "North Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.679844, 42.731357]
            }
        },
        {
            "type": "Feature",
            "_id": "nugent",
            "id": "nugent",
            "properties": {
                "name": "Nugent Hall",
                "nick": "Nugent",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Nugent Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.675031, 42.727411]
            }
        },
        {
            "type": "Feature",
            "_id": "poly",
            "id": "poly",
            "properties": {
                "name": "Polytechnic Residence Commons",
                "nick": "Poly",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Polytechnic Residence Commons"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.679528, 42.722276]
            }
        },
        {
            "type": "Feature",
            "_id": "quad",
            "id": "quad",
            "properties": {
                "name": "Quadrangle Complex",
                "nick": "Quad",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Quadrangle Complex"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.677616, 42.730189]
            }
        },
        {
            "type": "Feature",
            "_id": "rahpsa",
            "id": "rahpsa",
            "properties": {
                "name": "Rensselaer Apartment Housing Project A",
                "nick": "RAHPS A, RAHP",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Rensselaer Apartment Housing Project A"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.669557, 42.730833]
            }
        },
        {
            "type": "Feature",
            "_id": "rahpsb",
            "id": "rahpsb",
            "properties": {
                "name": "Rensselaer Apartment Housing Project B",
                "nick": "RAHPS B, RAHP",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Rensselaer Apartment Housing Project"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.665257, 42.734795]
            }
        },
        {
            "type": "Feature",
            "_id": "rousseau",
            "id": "rousseau",
            "properties": {
                "name": "Rousseau Apartments",
                "nick": "Rousseau, Stack, Stacwyck",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Rousseau Apartments (Stacwyck)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.664306, 42.734362]
            }
        },
        {
            "type": "Feature",
            "_id": "sharp",
            "id": "sharp",
            "properties": {
                "name": "Sharp Hall",
                "nick": "Sharp",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Sharp Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.674582, 42.727008]
            }
        },
        {
            "type": "Feature",
            "_id": "stack",
            "id": "stack",
            "properties": {
                "name": "Stacwyck Apartments",
                "nick": "Staccc, Stack",
                "category": "Student Housing",
                "description": "The Thiccest Residence Hall",
                "popupContent": "Blitman Commons"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.664715, 42.733772]
            }
        },
        {
            "type": "Feature",
            "_id": "warren",
            "id": "warren",
            "properties": {
                "name": "Warren Hall",
                "nick": "Warren",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Warren Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.67525, 42.727911]
            }
        },
        {
            "type": "Feature",
            "_id": "williams",
            "id": "williams",
            "properties": {
                "name": "Williams Apartments",
                "nick": "Williams, Stack",
                "category": "Student Housing",
                "description": "Residence Hall",
                "popupContent": "Williams Apartments"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.664544, 42.733971]
            }
        },
        {
            "type": "Feature",
            "_id": "exops",
            "id": "exops",
            "properties": {
                "name": "2021 15th Street",
                "nick": "Government & Community Relations, Media Relations",
                "category": "Operations & Administration",
                "description": "External Relations offices",
                "popupContent": "2021 15th Street"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.676977, 42.732908]
            }
        },
        {
            "type": "Feature",
            "_id": "parking",
            "id": "parking",
            "properties": {
                "name": "2144 Burdett Avenue",
                "nick": "Parking Building",
                "category": "Operations & Administration",
                "description": "Go here for parking pass stuffs",
                "popupContent": "2144 Burdett Avenue"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.671402, 42.732192]
            }
        },
        {
            "type": "Feature",
            "_id": "419th",
            "id": "419th",
            "properties": {
                "name": "41 Ninth Street",
                "nick": "41 Ninth Street",
                "category": "Operations & Administration",
                "description": "what even is this",
                "popupContent": "41 Ninth Street"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.682864, 42.732476]
            }
        },
        {
            "type": "Feature",
            "_id": "admissions",
            "id": "admissions",
            "properties": {
                "name": "Admissions Building",
                "nick": "Admissions",
                "category": "Operations & Administration",
                "description": "Admissions office is located here",
                "popupContent": "Admissions Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.675528, 42.730648]
            }
        },
        {
            "type": "Feature",
            "_id": "alumni",
            "id": "alumni",
            "properties": {
                "name": "Heffner Alumni House",
                "nick": "Heffner Alumni House",
                "category": "Operations & Administration",
                "description": "alumni events",
                "popupContent": "Alumni House (Heffner)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.678216, 42.732883]
            }
        },
        {
            "type": "Feature",
            "_id": "blaw",
            "id": "blaw",
            "properties": {
                "name": "Blaw Knox 1 & 2",
                "nick": "Blaw",
                "category": "Operations & Administration",
                "description": "Rusty building",
                "popupContent": "Blaw Knox 1 & 2"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.680893, 42.732037]
            }
        },
        {
            "type": "Feature",
            "_id": "alumni",
            "id": "alumni",
            "properties": {
                "name": "Heffner Alumni House",
                "nick": "Heffner Alumni House",
                "category": "Operations & Administration",
                "description": "alumni events",
                "popupContent": "Alumni House (Heffner)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.678216, 42.732883]
            }
        },
        {
            "type": "Feature",
            "_id": "boiler11",
            "id": "boiler11",
            "properties": {
                "name": "Boiler House, 11th Street",
                "nick": "Boiler House",
                "category": "Operations & Administration",
                "description": "Non-Student Mail service",
                "popupContent": "Boiler House, 11th Street"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.680229, 42.73268]
            }
        },
        {
            "type": "Feature",
            "_id": "boilersage",
            "id": "boilersage",
            "properties": {
                "name": "Boiler House, Sage Avenue",
                "nick": "Boiler House",
                "category": "Operations & Administration",
                "description": "Non-Student Mail service",
                "popupContent": "Boiler House, Sage Avenue"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681762, 42.73117]
            }
        },
        {
            "type": "Feature",
            "_id": "grad",
            "id": "grad",
            "properties": {
                "name": "Graduate Education",
                "nick": "Graduate Education",
                "category": "Operations & Administration",
                "description": "Graduate Education office building",
                "popupContent": "Graduate Education"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.675926, 42.732659]
            }
        },
        {
            "type": "Feature",
            "_id": "grounds",
            "id": "grounds",
            "properties": {
                "name": "Greenhouses and Grounds Barn",
                "nick": "Greenhouses and Grounds Barn",
                "category": "Operations & Administration",
                "description": "Site for plants for Grounds crew",
                "popupContent": "Greenhouses and Grounds Barn"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.66791, 42.728718]
            }
        },
        {
            "type": "Feature",
            "_id": "hbuild",
            "id": "hbuild",
            "properties": {
                "name": "H Building",
                "nick": "H Building",
                "category": "Operations & Administration",
                "description": "What is in here?",
                "popupContent": "H Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.679231, 42.732592]
            }
        },
        {
            "type": "Feature",
            "_id": "jbuild",
            "id": "jbuild",
            "properties": {
                "name": "J Building",
                "nick": "J Building",
                "category": "Operations & Administration",
                "description": "Storage??",
                "popupContent": "J Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.679803, 42.733148]
            }
        },
        {
            "type": "Feature",
            "_id": "patroon",
            "id": "patroon",
            "properties": {
                "name": "Patroon Manor",
                "nick": "Patroon Manor",
                "category": "Operations & Administration",
                "description": "Private property?",
                "popupContent": "Patroon Manor"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.663714, 42.736883]
            }
        },
        {
            "type": "Feature",
            "_id": "pubsafe",
            "id": "pubsafe",
            "properties": {
                "name": "Public Safety",
                "nick": "pubsafe",
                "category": "Operations & Administration",
                "description": "pubsafe Building",
                "popupContent": "Public Safety"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.677031, 42.729261]
            }
        },
        {
            "type": "Feature",
            "_id": "service",
            "id": "service",
            "properties": {
                "name": "Service Building",
                "nick": "Service",
                "category": "Operations & Administration",
                "description": "Various servicing services",
                "popupContent": "Service Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681052, 42.732793]
            }
        },
        {
            "type": "Feature",
            "_id": "troy",
            "id": "troy",
            "properties": {
                "name": "Troy Building",
                "nick": "TROY",
                "category": "Operations & Administration",
                "description": "Location of President Jackson's office",
                "popupContent": "Troy Building"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.680525, 42.731029]
            }
        },
        {
            "type": "Feature",
            "_id": "vcc",
            "id": "vcc",
            "properties": {
                "name": "Voorhees Computing Center",
                "nick": "VCC",
                "category": "Operations & Administration",
                "description": "An old converted chapel, it is now the central building for all issues computer related",
                "popupContent": "Voorhees Computing Center (VCC)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681755, 42.729231]
            }
        },
        {
            "type": "Feature",
            "_id": "garage",
            "id": "garage",
            "properties": {
                "name": "College Ave Parking Garage",
                "nick": "Parking Garage",
                "category": "Operations & Administration",
                "description": "Multilevel parking garage, located off College Ave, close to EMPAC",
                "popupContent": "College Ave Parking Garage"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681549, 42.727745]
            }
        },
        {
            "type": "Feature",
            "_id": "sigep",
            "id": "sigep",
            "properties": {
                "name": "Sigma Phi Epsilon (ΣΦΕ)",
                "nick": "SigEp, SPE",
                "category": "Fraternity/Sorrority",
                "description": "10/10 would recommend",
                "popupContent": "Sigma Phi Epsilon (ΣΦΕ)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.677091, 42.732331]
            }
        }
    ]
};

/*
Locations:
ACADEMIC & RESEARCH
Amos Eaton Hall
Carnegie Building
Center for Biotechnology and Interdisciplinary Studies (CBIS)
Cogswell Laboratory
Darrin Communications Center
Empire State Hall
Experimental Media & Performing Arts Center (EMPAC)
Folsom Library
Greene Building
Jonsson Engineering Center (JEC)
Jonsson-Rowland Science Center
Lally Hall
LINAC Facility (Gaerttner Laboratory)
Low Center for Industrial Innovation (CII)
Materials Research Center (MRC)
Pittsburgh Building
Ricketts Building
Russell Sage Laboratory
Walker Laboratory
West Hall
Winslow Building

STUDENT LIFE
87 Gymnasium
Academy Hall
Alumni Sports & Recreation Center
Chapel + Cultural Center
Commons Dining Hall
East Campus Athletic Village Arena (ECAV)
East Campus Athletic Village Stadium
Houston Field House
Mueller Center
Playhouse
Radio Club W2SZ
Rensselaer Union
Robison Swimming Pool
Russell Sage Dining Hall

STUDENT HOUSING
Barton Hall
Blitman Commons
Bray Hall
Bryckwyck
Burdett Avenue Residence Hall
Colonie Apartments
Hall Hall
Nason Hall
North Hall
Nugent Hall
Polytechnic Residence Commons
Quadrangle Complex
Rensselaer Apartment Housing Project A
Rensselaer Apartment Housing Project B
Rousseau Apartments
Sharp Hall
Stacwyck Apartments
Warren Hall
Williams Apartments

OPERATIONS & ADMINISTRATION
2021 15th Street
2144 Burdett Avenue
41 Ninth Street
Admissions
Alumni House (Heffner)
Blaw-Knox 1 & 2
Boiler House, 11th Street
Boiler House, Sage Avenue
Graduate Education
Greenhouses and Grounds Barn
H Building
J Building
Patroon Manor
Public Safety
Service Building
Troy Building
Voorhees Computing Center (VCC)

PARKING
Parking Garage
*/
