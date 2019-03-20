/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AdditionalPropertiesAnyType from './model/AdditionalPropertiesAnyType';
import AdditionalPropertiesArray from './model/AdditionalPropertiesArray';
import AdditionalPropertiesBoolean from './model/AdditionalPropertiesBoolean';
import AdditionalPropertiesClass from './model/AdditionalPropertiesClass';
import AdditionalPropertiesInteger from './model/AdditionalPropertiesInteger';
import AdditionalPropertiesNumber from './model/AdditionalPropertiesNumber';
import AdditionalPropertiesObject from './model/AdditionalPropertiesObject';
import AdditionalPropertiesString from './model/AdditionalPropertiesString';
import Animal from './model/Animal';
import ApiResponse from './model/ApiResponse';
import ArrayOfArrayOfNumberOnly from './model/ArrayOfArrayOfNumberOnly';
import ArrayOfNumberOnly from './model/ArrayOfNumberOnly';
import ArrayTest from './model/ArrayTest';
import Capitalization from './model/Capitalization';
import Cat from './model/Cat';
import Category from './model/Category';
import ClassModel from './model/ClassModel';
import Client from './model/Client';
import Dog from './model/Dog';
import EnumArrays from './model/EnumArrays';
import EnumClass from './model/EnumClass';
import EnumTest from './model/EnumTest';
import File from './model/File';
import FileSchemaTestClass from './model/FileSchemaTestClass';
import FormatTest from './model/FormatTest';
import HasOnlyReadOnly from './model/HasOnlyReadOnly';
import List from './model/List';
import MapTest from './model/MapTest';
import MixedPropertiesAndAdditionalPropertiesClass from './model/MixedPropertiesAndAdditionalPropertiesClass';
import Model200Response from './model/Model200Response';
import ModelReturn from './model/ModelReturn';
import Name from './model/Name';
import NumberOnly from './model/NumberOnly';
import Order from './model/Order';
import OuterComposite from './model/OuterComposite';
import OuterEnum from './model/OuterEnum';
import Pet from './model/Pet';
import ReadOnlyFirst from './model/ReadOnlyFirst';
import SpecialModelName from './model/SpecialModelName';
import Tag from './model/Tag';
import TypeHolderDefault from './model/TypeHolderDefault';
import TypeHolderExample from './model/TypeHolderExample';
import User from './model/User';
import XmlItem from './model/XmlItem';
import AnotherFakeApi from './api/AnotherFakeApi';
import FakeApi from './api/FakeApi';
import FakeClassnameTags123Api from './api/FakeClassnameTags123Api';
import PetApi from './api/PetApi';
import StoreApi from './api/StoreApi';
import UserApi from './api/UserApi';


/**
* This_spec_is_mainly_for_testing_Petstore_server_and_contains_fake_endpoints_models__Please_do_not_use_this_for_any_other_purpose__Special_characters__.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OpenApiPetstore = require('index'); // See note below*.
* var xxxSvc = new OpenApiPetstore.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OpenApiPetstore.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OpenApiPetstore.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OpenApiPetstore.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdditionalPropertiesAnyType model constructor.
     * @property {module:model/AdditionalPropertiesAnyType}
     */
    AdditionalPropertiesAnyType,

    /**
     * The AdditionalPropertiesArray model constructor.
     * @property {module:model/AdditionalPropertiesArray}
     */
    AdditionalPropertiesArray,

    /**
     * The AdditionalPropertiesBoolean model constructor.
     * @property {module:model/AdditionalPropertiesBoolean}
     */
    AdditionalPropertiesBoolean,

    /**
     * The AdditionalPropertiesClass model constructor.
     * @property {module:model/AdditionalPropertiesClass}
     */
    AdditionalPropertiesClass,

    /**
     * The AdditionalPropertiesInteger model constructor.
     * @property {module:model/AdditionalPropertiesInteger}
     */
    AdditionalPropertiesInteger,

    /**
     * The AdditionalPropertiesNumber model constructor.
     * @property {module:model/AdditionalPropertiesNumber}
     */
    AdditionalPropertiesNumber,

    /**
     * The AdditionalPropertiesObject model constructor.
     * @property {module:model/AdditionalPropertiesObject}
     */
    AdditionalPropertiesObject,

    /**
     * The AdditionalPropertiesString model constructor.
     * @property {module:model/AdditionalPropertiesString}
     */
    AdditionalPropertiesString,

    /**
     * The Animal model constructor.
     * @property {module:model/Animal}
     */
    Animal,

    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse,

    /**
     * The ArrayOfArrayOfNumberOnly model constructor.
     * @property {module:model/ArrayOfArrayOfNumberOnly}
     */
    ArrayOfArrayOfNumberOnly,

    /**
     * The ArrayOfNumberOnly model constructor.
     * @property {module:model/ArrayOfNumberOnly}
     */
    ArrayOfNumberOnly,

    /**
     * The ArrayTest model constructor.
     * @property {module:model/ArrayTest}
     */
    ArrayTest,

    /**
     * The Capitalization model constructor.
     * @property {module:model/Capitalization}
     */
    Capitalization,

    /**
     * The Cat model constructor.
     * @property {module:model/Cat}
     */
    Cat,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The ClassModel model constructor.
     * @property {module:model/ClassModel}
     */
    ClassModel,

    /**
     * The Client model constructor.
     * @property {module:model/Client}
     */
    Client,

    /**
     * The Dog model constructor.
     * @property {module:model/Dog}
     */
    Dog,

    /**
     * The EnumArrays model constructor.
     * @property {module:model/EnumArrays}
     */
    EnumArrays,

    /**
     * The EnumClass model constructor.
     * @property {module:model/EnumClass}
     */
    EnumClass,

    /**
     * The EnumTest model constructor.
     * @property {module:model/EnumTest}
     */
    EnumTest,

    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File,

    /**
     * The FileSchemaTestClass model constructor.
     * @property {module:model/FileSchemaTestClass}
     */
    FileSchemaTestClass,

    /**
     * The FormatTest model constructor.
     * @property {module:model/FormatTest}
     */
    FormatTest,

    /**
     * The HasOnlyReadOnly model constructor.
     * @property {module:model/HasOnlyReadOnly}
     */
    HasOnlyReadOnly,

    /**
     * The List model constructor.
     * @property {module:model/List}
     */
    List,

    /**
     * The MapTest model constructor.
     * @property {module:model/MapTest}
     */
    MapTest,

    /**
     * The MixedPropertiesAndAdditionalPropertiesClass model constructor.
     * @property {module:model/MixedPropertiesAndAdditionalPropertiesClass}
     */
    MixedPropertiesAndAdditionalPropertiesClass,

    /**
     * The Model200Response model constructor.
     * @property {module:model/Model200Response}
     */
    Model200Response,

    /**
     * The ModelReturn model constructor.
     * @property {module:model/ModelReturn}
     */
    ModelReturn,

    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name,

    /**
     * The NumberOnly model constructor.
     * @property {module:model/NumberOnly}
     */
    NumberOnly,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OuterComposite model constructor.
     * @property {module:model/OuterComposite}
     */
    OuterComposite,

    /**
     * The OuterEnum model constructor.
     * @property {module:model/OuterEnum}
     */
    OuterEnum,

    /**
     * The Pet model constructor.
     * @property {module:model/Pet}
     */
    Pet,

    /**
     * The ReadOnlyFirst model constructor.
     * @property {module:model/ReadOnlyFirst}
     */
    ReadOnlyFirst,

    /**
     * The SpecialModelName model constructor.
     * @property {module:model/SpecialModelName}
     */
    SpecialModelName,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The TypeHolderDefault model constructor.
     * @property {module:model/TypeHolderDefault}
     */
    TypeHolderDefault,

    /**
     * The TypeHolderExample model constructor.
     * @property {module:model/TypeHolderExample}
     */
    TypeHolderExample,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The XmlItem model constructor.
     * @property {module:model/XmlItem}
     */
    XmlItem,

    /**
    * The AnotherFakeApi service constructor.
    * @property {module:api/AnotherFakeApi}
    */
    AnotherFakeApi,

    /**
    * The FakeApi service constructor.
    * @property {module:api/FakeApi}
    */
    FakeApi,

    /**
    * The FakeClassnameTags123Api service constructor.
    * @property {module:api/FakeClassnameTags123Api}
    */
    FakeClassnameTags123Api,

    /**
    * The PetApi service constructor.
    * @property {module:api/PetApi}
    */
    PetApi,

    /**
    * The StoreApi service constructor.
    * @property {module:api/StoreApi}
    */
    StoreApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
