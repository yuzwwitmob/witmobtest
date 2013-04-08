var Db=require('mongodb').Db,
MongoClient=require("mongodb").MongoClient,
Server=require("mongodb").Server,
ReplSetServers=require("mongodb").ReplSetServers,
ObjectID=require("mongodb").ObjectID,
Binary = require("mongodb").Binary,
GridStore = require("mongodb").GridStore,
Code = require("mongodb").Code,
BSON = require("mongodb").pure().BSON,
assert = require("assert");
//var doc={hello : "world_no_safe"};
//var doc1={yuzw:"123"};
var db = new Db('world',new Server("localhost",27017));
console.log("new test");
var collection=db.collection('witmobtest');
console.log("collection insert");
db.open(function(err,db){
    collection.insert({name:"yuzhanwu"});
//    collection.remove(doc);
    console.log("remove");
})

console.log("timeout");

setTimeout(function(){
    collection.findOne({name:"yuzhanwu"},function(error,item){
//        assert.equal(null,error);
//        assert.equal("world_no_safe",item.hello);
        console.log("world_no_safe",item.name);
    })
},10);

