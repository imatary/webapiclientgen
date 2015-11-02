/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="HttpClient.ts" />
var DemoWebApi_DemoData_Client;
(function (DemoWebApi_DemoData_Client) {
    (function (AddressType) {
        AddressType[AddressType["Postal"] = 0] = "Postal";
        AddressType[AddressType["Residential"] = 1] = "Residential";
    })(DemoWebApi_DemoData_Client.AddressType || (DemoWebApi_DemoData_Client.AddressType = {}));
    var AddressType = DemoWebApi_DemoData_Client.AddressType;
    (function (Days) {
        Days[Days["Sat"] = 1] = "Sat";
        Days[Days["Sun"] = 2] = "Sun";
        Days[Days["Mon"] = 3] = "Mon";
        Days[Days["Tue"] = 4] = "Tue";
        Days[Days["Wed"] = 5] = "Wed";
        Days[Days["Thu"] = 6] = "Thu";
        Days[Days["Fri"] = 7] = "Fri";
    })(DemoWebApi_DemoData_Client.Days || (DemoWebApi_DemoData_Client.Days = {}));
    var Days = DemoWebApi_DemoData_Client.Days;
})(DemoWebApi_DemoData_Client || (DemoWebApi_DemoData_Client = {}));
var DemoWebApi_Controllers_Client;
(function (DemoWebApi_Controllers_Client) {
    var SuperDemo = (function () {
        function SuperDemo(error, statusCode) {
            this.httpClient = new HttpClient();
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * GET api/SuperDemo/int?d={d}
         * @param {number} d
         * @return {void}
         */
        SuperDemo.prototype.GetIntSquare = function (d, callback) {
            this.httpClient.get(encodeURI('api/SuperDemo/int?d=' + d), callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/decimal?d={d}
         * @param {number} d
         * @return {void}
         */
        SuperDemo.prototype.GetDecimalSquare = function (d, callback) {
            this.httpClient.get(encodeURI('api/SuperDemo/decimal?d=' + d), callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/NullableDatetime?hasValue={hasValue}
         * @param {boolean} hasValue
         * @return {void}
         */
        SuperDemo.prototype.GetDateTime = function (hasValue, callback) {
            this.httpClient.get(encodeURI('api/SuperDemo/NullableDatetime?hasValue=' + hasValue), callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/NullableDecimal?hasValue={hasValue}
         * @param {boolean} hasValue
         * @return {void}
         */
        SuperDemo.prototype.GetNullableDecimal = function (hasValue, callback) {
            this.httpClient.get(encodeURI('api/SuperDemo/NullableDecimal?hasValue=' + hasValue), callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/FloatZero
         * @return {void}
         */
        SuperDemo.prototype.GetFloatZero = function (callback) {
            this.httpClient.get('api/SuperDemo/FloatZero', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/DoubleZero
         * @return {void}
         */
        SuperDemo.prototype.GetDoubleZero = function (callback) {
            this.httpClient.get('api/SuperDemo/DoubleZero', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/DecimalZero
         * @return {void}
         */
        SuperDemo.prototype.GetDecimalZero = function (callback) {
            this.httpClient.get('api/SuperDemo/DecimalZero', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/NullString
         * @return {void}
         */
        SuperDemo.prototype.GetNullString = function (callback) {
            this.httpClient.get('api/SuperDemo/NullString', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/EmptyString
         * @return {void}
         */
        SuperDemo.prototype.GetEmptyString = function (callback) {
            this.httpClient.get('api/SuperDemo/EmptyString', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/NullObject
         * @return {void}
         */
        SuperDemo.prototype.GetNullPerson = function (callback) {
            this.httpClient.get('api/SuperDemo/NullObject', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/TextStream
         * @return {void}
         */
        SuperDemo.prototype.GetTextStream = function (callback) {
            this.httpClient.get('api/SuperDemo/TextStream', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/ByteArray
         * @return {void}
         */
        SuperDemo.prototype.GetByteArray = function (callback) {
            this.httpClient.get('api/SuperDemo/ByteArray', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/ActionResult
         * @return {void}
         */
        SuperDemo.prototype.GetActionResult = function (callback) {
            this.httpClient.get('api/SuperDemo/ActionResult', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/byte
         * @return {void}
         */
        SuperDemo.prototype.Getbyte = function (callback) {
            this.httpClient.get('api/SuperDemo/byte', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/sbyte
         * @return {void}
         */
        SuperDemo.prototype.Getsbyte = function (callback) {
            this.httpClient.get('api/SuperDemo/sbyte', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/short
         * @return {void}
         */
        SuperDemo.prototype.GetShort = function (callback) {
            this.httpClient.get('api/SuperDemo/short', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/ushort
         * @return {void}
         */
        SuperDemo.prototype.GetUShort = function (callback) {
            this.httpClient.get('api/SuperDemo/ushort', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/uint
         * @return {void}
         */
        SuperDemo.prototype.GetUint = function (callback) {
            this.httpClient.get('api/SuperDemo/uint', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/ulong
         * @return {void}
         */
        SuperDemo.prototype.Getulong = function (callback) {
            this.httpClient.get('api/SuperDemo/ulong', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/doulbe
         * @return {void}
         */
        SuperDemo.prototype.Getdouble = function (callback) {
            this.httpClient.get('api/SuperDemo/doulbe', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/decimal
         * @return {void}
         */
        SuperDemo.prototype.GetDecimal = function (callback) {
            this.httpClient.get('api/SuperDemo/decimal', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/char
         * @return {void}
         */
        SuperDemo.prototype.GetChar = function (callback) {
            this.httpClient.get('api/SuperDemo/char', callback, this.error, this.statusCode);
        };
        /**
         * GET api/SuperDemo/bool
         * @return {void}
         */
        SuperDemo.prototype.GetBool = function (callback) {
            this.httpClient.get('api/SuperDemo/bool', callback, this.error, this.statusCode);
        };
        return SuperDemo;
    })();
    DemoWebApi_Controllers_Client.SuperDemo = SuperDemo;
    var Entities = (function () {
        function Entities(error, statusCode) {
            this.httpClient = new HttpClient();
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * Get a person
         * GET api/Entities/{id}
         * @param {number} id unique id of that guy
         * @return {void} person in db
         */
        Entities.prototype.GetPerson = function (id, callback) {
            this.httpClient.get(encodeURI('api/Entities/' + id), callback, this.error, this.statusCode);
        };
        /**
         * POST api/Entities
         * @param {DemoWebApi_DemoData_Client.Person} person
         * @return {void}
         */
        Entities.prototype.CreatePerson = function (person, callback) {
            this.httpClient.post('api/Entities', person, callback, this.error, this.statusCode);
        };
        /**
         * PUT api/Entities
         * @param {DemoWebApi_DemoData_Client.Person} person
         * @return {void}
         */
        Entities.prototype.UpdatePerson = function (person, callback) {
            this.httpClient.put('api/Entities', person, callback, this.error, this.statusCode);
        };
        /**
         * DELETE api/Entities/{id}
         * @param {number} id
         * @return {void}
         */
        Entities.prototype.Delete = function (id, callback) {
            this.httpClient.delete(encodeURI('api/Entities/' + id), callback, this.error, this.statusCode);
        };
        return Entities;
    })();
    DemoWebApi_Controllers_Client.Entities = Entities;
    var Values = (function () {
        function Values(error, statusCode) {
            this.httpClient = new HttpClient();
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * GET api/Values
         * @return {void}
         */
        Values.prototype.Get = function (callback) {
            this.httpClient.get('api/Values', callback, this.error, this.statusCode);
        };
        /**
         * GET api/Values/{id}?name={name}
         * @param {number} id
         * @param {string} name
         * @return {void}
         */
        Values.prototype.Get = function (id, name, callback) {
            this.httpClient.get(encodeURI('api/Values/' + id + '?name=' + name), callback, this.error, this.statusCode);
        };
        /**
         * POST api/Values
         * @param {string} value
         * @return {void}
         */
        Values.prototype.Post = function (value, callback) {
            this.httpClient.post('api/Values', value, callback, this.error, this.statusCode);
        };
        /**
         * PUT api/Values/{id}
         * @param {number} id
         * @param {string} value
         * @return {void}
         */
        Values.prototype.Put = function (id, value, callback) {
            this.httpClient.put(encodeURI('api/Values/' + id), value, callback, this.error, this.statusCode);
        };
        /**
         * DELETE api/Values/{id}
         * @param {number} id
         * @return {void}
         */
        Values.prototype.Delete = function (id, callback) {
            this.httpClient.delete(encodeURI('api/Values/' + id), callback, this.error, this.statusCode);
        };
        return Values;
    })();
    DemoWebApi_Controllers_Client.Values = Values;
})(DemoWebApi_Controllers_Client || (DemoWebApi_Controllers_Client = {}));