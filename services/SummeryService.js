app.factory("SummeryService", function () {
    var address = {};
    return {
       getAddress: function () {
          return address;
       },
       clientAddress: function (record) {
         address = record;
       }
   }
});