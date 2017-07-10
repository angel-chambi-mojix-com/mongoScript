function insertDocument(doc, targetCollection) {
    while (1) {
        var cursor = targetCollection.find( {}, { _id: 1 } ).sort( { _id: -1 } ).limit(1);
        var seq = cursor.hasNext() ? NumberLong(cursor.next()._id + 1) : NumberLong(1);
        doc._id = seq;
        var results = targetCollection.insert(doc);
        if( results.hasWriteError() ) {
            if( results.writeError.code == 11000 /* dup key */ ){
                printjsononeline(results);
                continue;
            }            
            else{
                print( "unexpected error inserting data: " + tojson( results ) );
            }                
        }
        break;
    }
}

insertDocument({    
    "groupTypeId" : NumberLong(3),
    "groupTypeName" : "Facility",
    "groupTypeCode" : "",
    "groupId" : NumberLong(3),
    "groupCode" : "KW",
    "groupName" : "Kwinana",
    "thingTypeId" : NumberLong(6),
    "thingTypeCode" : "Starflex",
    "thingTypeName" : "Starflex",
    "name" : "001F48F024FF",
    "serialNumber" : "001F48F024FF",
    "modifiedTime" : ISODate("2017-04-24T14:32:45.818Z"),
    "createdTime" : ISODate("2017-04-24T14:32:45.818Z"),
    "time" : ISODate("2017-04-24T14:32:45.776Z"),
    "mqtt_port" : {
        "thingTypeFieldId" : NumberLong(90),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "1883"
    },
    "mqtt_topic_req" : {
        "thingTypeFieldId" : NumberLong(95),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "/v1/flex/001F48F024FF/request"
    },
    "mqtt_topic_res" : {
        "thingTypeFieldId" : NumberLong(96),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "/v1/flex/001F48F024FF/response"
    },
    "mqtt_subscription_name" : {
        "thingTypeFieldId" : NumberLong(92),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "none"
    },
    "macId" : {
        "thingTypeFieldId" : NumberLong(85),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "001F48F024FF"
    },
    "mqtt_topic_data" : {
        "thingTypeFieldId" : NumberLong(93),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "/v1/flex/001F48F024FF/data"
    },
    "mqtt_host" : {
        "thingTypeFieldId" : NumberLong(89),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "10.100.0.234"
    },
    "mqtt_topic_interesting_events" : {
        "thingTypeFieldId" : NumberLong(94),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "/v1/flex/001F48F024FF/interesting_events"
    },
    "metaData_myID" : {
        "thingTypeFieldId" : NumberLong(86),
        "time" : ISODate("2017-04-24T14:32:45.776Z"),
        "value" : "001F48F024FF"
    }
}, 
db.thingTest);