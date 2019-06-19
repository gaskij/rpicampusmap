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
            "id": "jec",
            "properties": {
                "name": "Jonsson Engineering Center",
                "nick": "JEC",
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
            "id": "dcc",
            "properties": {
                "name": "Darrin Communications Center",
                "nick": "DCC",
                "thumbnail": "http://tours.pocketsights.com/media/1/11ef2a38f7884fd58ecc6a78e3e70ea7_large.jpg",
                "description": "Large lecture hall where most lectures are held.",
                "popupContent": "Darrin Communications Center"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.679059, 42.729226]
            }
        },
        {
            "type": "Feature",
            "id": "ae",
            "properties": {
                "name": "Amos Eaton Hall",
                "nick": "JEC",
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
            "id": "lib",
            "properties": {
                "name": "Folsom Library",
                "nick": "Lib-Lob",
                "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/2/26/Folsom_Library-_RPI.JPG",
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
            "id": "lally",
            "properties": {
                "name": "Lally Hall",
                "nick": "lally",
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
            "id": "empac",
            "properties": {
                "name": "Experimental Media and Performing Arts Center at Rensselaer",
                "nick": "EMPAC",
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
            "id": "blitman",
            "properties": {
                "name": "Blitman Commons",
                "nick": "blitman",
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
            "id": "jrowl",
            "properties": {
                "name": "Jonsson Rowland Science Center",
                "nick": "jrowl",
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
            "id": "pubsafe",
            "properties": {
                "name": "Public Safety",
                "nick": "pubsafe",
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
            "id": "alumni",
            "properties": {
                "name": "Heffner Alumni House",
                "nick": "Heffner Alumni House",
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
            "id": "houston",
            "properties": {
                "name": "Houston Field House",
                "nick": "field house",
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
            "id": "rugby",
            "properties": {
                "name": "Rugby Field",
                "nick": "rugby",
                "description": "rugby practice",
                "popupContent": "Rugby Field"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.666956, 42.734426]
            }
        },
        {
            "type": "Feature",
            "id": "sigep",
            "properties": {
                "name": "Sigma Phi Epsilon",
                "nick": "SigEp",
                "description": "10/10 would recommend",
                "popupContent": "Sigma Phi Epsilon"
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
    Amos Eaton
    DCC
    JEC
    Library
    Empac
    Blitman
    JROWL
    PUb Safe
    Alumni House
    Houston Field House
    Rugby Field
    H-Building
*/

var locations_shops = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": "jec_shop",
            "properties": {
                "name": "JEC Student Machines Shop",
                "nick": "Processes Shop",
                "description": "Machine Shop located in JEC",
                "popupContent": "JEC Student Machines Shop"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.680042, 42.729716]
           },
            "room": {
                "hours": {
                    "mon":"9 a.m.-noon and 2-8 p.m.",
                    "tues":"9 a.m.—noon and 1-7 p.m. ",
                    "weds": "10 a.m.—1 p.m.  and 2-8 p.m.",
                    "thurs":"9 a.m.—noon and 2-8 p.m.",
                    "fri":"8-11 a.m. and noon-3 p.m.",
                    "sat":"11 a.m. -3 p.m.,",
                    "sun":"2-6 p.m."
                },
                "info": "All students who intend to use the machines in this room\n\
                must pass the SOE Safety Test Rensselaer Manufacturing and Prototyping\n\
                Laboratories-Safety Orientation listed on RPI HR Skillport Site. \n\
                They must show proof of taking and passing the class to shop supervisors.\n\
                Afterwards, all students are welcome to use the machines in the JEC Student Machines Shop.\n\
                No prior knowledge of machining is required. However, it is recommended\n\
                that students take Engineering Processes (ENGR 1300).",
                "location": "Jonsson Engineering Center (JEC) 1010"
            },
            "contents": {
                "machines": ["Haas TL 1 CNC Lathe", "Acer 3-Axis CNC Milling Machine",
                    "Laguna Swift 4’x4’ CNC Router", "Thunder Mars90 100w laser Cutter",
                    "Snap-on Sandblaster", "General Machining and Fabrication Equipment",
                    "General Machining and Fabrication Equipment",
                    "Metal and Plastic Forming and Shearing Equipment",
                    "Steel and Plastic Welding Equipment" ],
                "available_materials": "",
                "equipment": ""
            }
        },
        {
            "type": "Feature",
            "id": "ied_shop",
            "properties": {
                "name": "Design Lab/IED Shop",
                "nick": "IED Shop",
                "description": "Machine Shop located in JEC",
                "popupContent": "Design Lab/IED Shop"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.6804, 42.72957]
           },
            "room": {
                "hours": {
                    "mon":"9 am - 4 pm and 5-9 pm",
                    "tues":"9 am - 4 pm and 5-9 pm",
                    "weds":"9 am - 4 pm and 5-9 pm",
                    "thurs":"9 am - 4 pm and 5-9 pm",
                    "fri":"9 am - 4 pm and 5-7 pm",
                    "sat":"",
                    "sun":""
                },
                "info": "All students who intend to use the machines in this room\n\
                must pass the SOE Safety Test Rensselaer Manufacturing and Prototyping\n\
                Laboratories-Safety Orientation listed on RPI HR Skillport Site. \n\
                They must show proof of taking and passing the class to shop supervisors.\n\
                Afterwards, usage of machines is determined on case-by-case basis.\n\
                Students are always welcome to see the shop supervisor to discuss their projects.",
                "location": "Jonsson Engineering Center (JEC) Room 2332"
            },
            "contents": {
                "machines": ["Haas CNC Control Simulators", "Haas Mini Mill", "Haas SL 10",
                    "Haas Super VF 2", "Haas Tool Room Mill", "Mitutoyo Crysta-Plus M574 CMM",
                    "Paint Booth", "General Machining and Fabrication Equipment",
                    "Electronic Scopes and Meters"],
                "available_materials": "",
                "equipment": ""
            }
        },
        {
            "type": "Feature",
            "id": "forge_shop",
            "properties": {
                "name": "Maker Space: The Forge",
                "nick": "The Forge",
                "description": "Maker Space located in",
                "popupContent": "Design Lab/IED Shop"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.678974, 42.729574]
           },
            "room": {
                "hours": {
                    "mon":"",
                    "tues":"",
                    "weds": "",
                    "thurs":"",
                    "fri":"",
                    "sat":"",
                    "sun":""
                },
                "info": "The Forge charges $10 per semester for students to gain access to\n\
                all of the machines. Afterwards, students are charged $0.05/gram of filament\n\
                for the 3D Printer and $0.50 per hour of light time for the laser cutter.",
                "location": "George M. Low Center for Industrial Innovation (CII) Room 2037"
            },
            "contents": {
                "machines": ["3D Scanners","Form 1+ 3D Printer","gCreate 3D Printer",
                    "Laser Cutter","Makerbot Mini","Makerbot Z18’s","Prusa i3’s",
                    "Sewing Machine","Taz 5","Taz Mini","Taz MOAR-Struder","Taz Quadfusion",
                    "Vinyl Cutter"],
                "available_materials": ["PLA", "ABS", "PETG"],
                "equipment": ""
            }
        },
        {
            "type": "Feature",
            "id": "mill_shop",
            "properties": {
                "name": "Manufacturing Innovation Learning Laboratory",
                "nick": "The MILL",
                "description": "Manufacturing/maching shop located in the CII.",
                "popupContent": "Manufacturing Innovation Learning Laboratory"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.679208, 42.72975]
           },
            "room": {
                "hours": {
                    "mon":"",
                    "tues":"",
                    "weds": "",
                    "thurs":"",
                    "fri":"",
                    "sat":"",
                    "sun":""
                },
                "info": "All students who intend to use the machines in this room\n\
                must pass the SOE Safety Test Rensselaer Manufacturing and Prototyping\n\
                Laboratories-Safety Orientation listed on RPI HR Skillport Site. \n\
                They must show proof of taking and passing the class to shop supervisors.\n\
                Afterwards, usage of machines is determined on case-by-case basis.\n\
                Students are always welcome to see the shop supervisor to discuss their projects.",
                "location": "George M. Low Center for Industrial Innovation (CII) Room 1027"
            },
            "contents": {
                "machines": ["Haas VF 1 – CNC Milling Machine",
                    "Haas OM-2 CNC Milling Machine",
                    "Moore Nanotechnology Systems 350 UPL Lathe",
                    "Hurricane Laser Cutter Category 4 Charley 80W",
                    "Adept Cobra 800 SCARA Robot",
                    "SONY Conveyor System",
                    "Staubli RX 90 Robot",
                    "Fanuc LR Mate, with Vision, Robot Educational Training System",
                    "Stratasys Dimension FDM Machine",
                    "Stratasys UPrint FDM Machine",
                    "Z-Corporation Z310 3D Printer",
                    "B-9 Creator Stereolithography Printer",
                    "Phenix Direct Metal Selective Laser Sintering 3D Printer",
                    "Brown and Sharpe Gage 2000 CMM",
                    "Faro Platinum Inspection Arm",
                    "Arburg Allrounder 270c Injection Molder",
                    "Arburg Allrounder 221k Injection Molder",
                    "Battenfeld Injection Molder",
                    "Formech 660 Vacuum Former",
                    "Flow Mach2 Abrasive Water-Jet Cutter",
                    "Sonitek S840 Ultrasonic Welder",
                    "Sonitek TS500 Thermal Press",
                    "Branson Ultrasonic Welder 2000 D",
                    "Branson Ultrasonic Welder 2000 DT",
                    "General Machining Equipment"],
                "available_materials": [],
                "equipment": ""
            }
        }
    ]
};

/*
Locations:
JEC Student Machines Shop
Design Lab/IED Shop
Maker Space: The Forge
Manufacturing Innovation Learning Laboratory
*/

