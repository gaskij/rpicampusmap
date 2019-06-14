var machine_sites = {
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
               "coordinates": [-73.6804, 42.72957]
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
                "permissions": ""
            },
            "contents": {
                "machines": ["Haas TL 1 CNC Lathe", "Acer 3-Axis CNC Milling Machine", 
                    "Laguna Swift 4’x4’ CNC Router", "Thunder Mars90 100w laser Cutter", 
                    "Snap-on Sandblaster", "General Machining and Fabrication Equipment", 
                    "General Machining and Fabrication Equipment", 
                    "Metal and Plastic Forming and Shearing Equipment", 
                    "Steel and Plastic Welding Equipment" ],
                "materials": "",
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
                    "weds": "9 am - 4 pm and 5-9 pm",
                    "thurs":"9 am - 4 pm and 5-9 pm",
                    "fri":"9 am - 4 pm and 5-7 pm",
                    "sat":"",
                    "sun":""
                },
                "permissions": ""
            },
            "contents": {
                "machines": ["Haas CNC Control Simulators", "Haas Mini Mill", "Haas SL 10", 
                    "Haas Super VF 2", "Haas Tool Room Mill", "Mitutoyo Crysta-Plus M574 CMM",
                    "Paint Booth", "General Machining and Fabrication Equipment",
                    "Electronic Scopes and Meters"],
                "materials": "",
                "equipment": ""
            }
        }
    ]    
};

/*
Locations:
JEC Student Machines Shop
Design Lab/IED Shop
*/
