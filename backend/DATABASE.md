     

### <a id="documentation-body"></a>

![Hackolade image](./Database/image1.png?raw=true)

MongoDB Physical Model
----------------------

#### Schema for:

Model name: sell\_courses

Author: Phuc Hoang

Version:

File name: sell\_course.hck.json

File path: /home/lordkickass/Documents/sell\_course.hck.json

Printed On: Thu May 11 2023 10:12:28 GMT+0700 (Indochina Time)

Created with: [Hackolade](https://hackolade.com/) - Polyglot data modeling for NoSQL databases, storage formats, REST APIs, and JSON in RDBMS

### <a id="contents"></a>

*   [Table of Contents](#contents)
*   [1\. Model](#model)
*   [2\. Databases](#containers)
    *   [2.1 BanKhoaHoc](#56fa4821-fb8a-4925-b373-89733686924a)
        
        [2.1.2. Collections](#56fa4821-fb8a-4925-b373-89733686924a-children)
        
        [2.1.2.1 billings](#dd398e23-e65c-4d6f-b4a1-985e080b2b4b)
        
        [2.1.2.2 courses](#34fb3d70-57d0-4028-b679-efc879f2836e)
        
        [2.1.2.3 lecturer](#7763d428-db9e-4464-ae2f-19edd261c592)
        
        [2.1.2.4 users](#5caea1b9-171f-48a0-9410-077677c63b7e)
        
*   [3\. Relationships](#relationships)
    *   [3.1 fk billings.orders.\[0\].items.\[0\].course\_id to courses.\_id](#fa072c5a-c321-49f8-8ce9-11e25c07206e)
    *   [3.2 fk billings.user\_id to users.\_id](#00eeb596-86e2-497d-a673-4c67d0dd1d52)
    *   [3.3 fk courses.course\_review.\[0\].user\_id to users.\_id](#51211563-d260-4743-9dae-e4c9f5c3719c)
    *   [3.4 fk courses.instructors.\[0\].User.user\_id to users.\_id](#08548243-1b42-47f2-b095-172e566bf03e)
    *   [3.5 fk courses.instructors.\[0\].bio to lecturer.bio](#2533f787-3102-4221-b095-59a9619e617e)
    *   [3.6 fk courses.students.\[0\].user\_id to users.\_id](#1fa088c1-d98e-4288-bb16-d35df76f8baf)
    *   [3.7 fk lecturer.User.user\_id to users.\_id](#9c4de11c-3531-4e67-8395-d732fd56d371)
    *   [3.8 fk lecturer.lecturer\_courses.\[0\].course\_id to courses.\_id](#322752c6-7dbd-4cc6-b431-2a796727e906)
    *   [3.9 fk users.billings\_id to billings.\_id](#5a22d3a9-a07a-4408-bb82-cbebe362d9f0)
    *   [3.10 fk users.owned\_courses.\[0\].course\_id to courses.\_id](#dd62e73f-6ef7-45b8-8940-baea4332cb83)
    *   [3.11 fk users.wishlist.\[0\].course\_id to courses.\_id](#6b0bd35e-3dea-45b3-95fd-f1471eba130e)

### <a id="model"></a>

##### 1\. Model

##### 1.1 Model **sell\_courses**

##### 1.1.1 **sell\_courses** Entity Relationship Diagram

![Hackolade image](./Database/image2.png?raw=true)

##### 1.1.2 **sell\_courses** Properties

##### 1.1.2.1 **Details** tab

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td><span>Model name</span></td><td>sell_courses</td></tr><tr><td><span>Technical name</span></td><td></td></tr><tr><td><span>Description</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Author</span></td><td>Phuc Hoang</td></tr><tr><td><span>Version</span></td><td></td></tr><tr><td><span>Target</span></td><td>MongoDB</td></tr><tr><td><span>DB version</span></td><td>v5.0</td></tr><tr><td><span>Synchronization Id</span></td><td></td></tr><tr><td><span>Lineage capture</span></td><td></td></tr><tr><td><span>Polyglot models</span></td><td></td></tr><tr><td><span>Comments</span></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 1.1.3 **sell\_courses** DB Definitions

### <a id="containers"></a>

##### 2\. Databases

### <a id="56fa4821-fb8a-4925-b373-89733686924a"></a>2.1 Database **BanKhoaHoc**

![Hackolade image](./Database/image3.png?raw=true)

##### 2.1.1 **BanKhoaHoc** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>BanKhoaHoc</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="56fa4821-fb8a-4925-b373-89733686924a-children"></a>2.1.2 **BanKhoaHoc** Collections

### <a id="dd398e23-e65c-4d6f-b4a1-985e080b2b4b"></a>2.1.2.1 Collection **billings**

##### 2.1.2.1.1 **billings** Tree Diagram

![Hackolade image](./Database/image4.png?raw=true)

##### 2.1.2.1.2 **billings** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>billings</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Bảng chi tiết hóa đơn &amp; thanh toán</p></div></td></tr><tr><td>Database</td><td><a href=#56fa4821-fb8a-4925-b373-89733686924a><span class="name-container">BanKhoaHoc</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3 **billings** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#b85dd627-f4c6-4312-970c-3c75e62cc3ad class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>dk</td><td><div class="docs-markdown"><p>ID chi tiết hóa đơn</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#86d31629-427a-41ef-9c83-4338dd46f10e class="margin-0">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>ID người dùng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#32015ca7-d719-429e-b805-54c72f6abdb0 class="margin-0">user_name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Họ tên người mua</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9edd1e07-f6da-4cc0-b6e8-32b450901ef1 class="margin-0">email</a></td><td class="no-break-word">email</td><td>false</td><td></td><td><div class="docs-markdown"><p>Email người dùng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0ff296d9-3ad7-4137-9a1f-3ea4ec0a4532 class="margin-0">payment_method</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"><p>Phương thức thanh toán</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7cf35c2e-5608-4618-8012-f819b9a1fa65 class="margin-5">type</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b1e0292d-8575-41e2-aafb-2f47c32ea798 class="margin-5">card_number</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#baa1ba09-17fd-47fe-9253-5bc40a7757bf class="margin-5">expiration_date</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e5e5e5cd-46ef-46d6-ac0a-7cc9c29d7f4b class="margin-5">security_code</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7dd54342-552d-469e-8284-956f66fec46c class="margin-0">orders</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>hóa đơn</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8a9bdc9d-dbe2-4400-8dda-b63ad1eed8ea class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#866fe39b-1de1-4d6f-859e-6d7c69717358 class="margin-10">order_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"><p>ID mua hàng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#47a345ba-ed34-47dc-bbe0-c879c7d607dc class="margin-10">date</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>Ngày mua các khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7ad03c69-bca6-4f4a-a502-51f9631b847f class="margin-10">status</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Trạng thái hóa đơn</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#944af035-7d66-46c3-9af9-e6bab946d689 class="margin-10">items</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Danh sách các khóa học mua</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2f1e0eff-8794-4990-b66f-a066348e0915 class="margin-15">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#386052d2-ec30-4e18-985a-603c7487a282 class="margin-20">course_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>ID khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1a30ba1f-3963-483f-b123-829156468d75 class="margin-20">course_name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tên khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a836d7b6-cc7f-42a4-b131-54836d2978ee class="margin-20">course_price</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>Giá 1 khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d5aae5bc-e19a-4ab2-bd9d-7be0fe872836 class="margin-10">total_amount</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tổng giá trị của 1 order</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b85dd627-f4c6-4312-970c-3c75e62cc3ad"></a>2.1.2.1.3.1 Field **\_id**

##### 2.1.2.1.3.1.1 **\_id** Tree Diagram

![Hackolade image](./Database/image5.png?raw=true)

##### 2.1.2.1.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID chi tiết hóa đơn</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="86d31629-427a-41ef-9c83-4338dd46f10e"></a>2.1.2.1.3.2 Field **user\_id**

##### 2.1.2.1.3.2.1 **user\_id** Tree Diagram

![Hackolade image](./Database/image6.png?raw=true)

##### 2.1.2.1.3.2.2 **user\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID người dùng</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Foreign field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk billings.user_id to users._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="32015ca7-d719-429e-b805-54c72f6abdb0"></a>2.1.2.1.3.3 Field **user\_name**

##### 2.1.2.1.3.3.1 **user\_name** Tree Diagram

![Hackolade image](./Database/image7.png?raw=true)

##### 2.1.2.1.3.3.2 **user\_name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user_name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Họ tên người mua</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>John Smith</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9edd1e07-f6da-4cc0-b6e8-32b450901ef1"></a>2.1.2.1.3.4 Field **email**

##### 2.1.2.1.3.4.1 **email** Tree Diagram

![Hackolade image](./Database/image8.png?raw=true)

##### 2.1.2.1.3.4.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Email người dùng</p></div></td></tr><tr><td>Format</td><td>email</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0ff296d9-3ad7-4137-9a1f-3ea4ec0a4532"></a>2.1.2.1.3.5 Field **payment\_method**

##### 2.1.2.1.3.5.1 **payment\_method** Tree Diagram

![Hackolade image](./Database/image9.png?raw=true)

##### 2.1.2.1.3.5.2 **payment\_method** Hierarchy

Parent field: **billings**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#7cf35c2e-5608-4618-8012-f819b9a1fa65 class="margin-NaN">type</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b1e0292d-8575-41e2-aafb-2f47c32ea798 class="margin-NaN">card_number</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#baa1ba09-17fd-47fe-9253-5bc40a7757bf class="margin-NaN">expiration_date</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e5e5e5cd-46ef-46d6-ac0a-7cc9c29d7f4b class="margin-NaN">security_code</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.5.3 **payment\_method** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>payment_method</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Phương thức thanh toán</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7cf35c2e-5608-4618-8012-f819b9a1fa65"></a>2.1.2.1.3.6 Field **type**

##### 2.1.2.1.3.6.1 **type** Tree Diagram

![Hackolade image](./Database/image10.png?raw=true)

##### 2.1.2.1.3.6.2 **type** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>type</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>credit_card</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b1e0292d-8575-41e2-aafb-2f47c32ea798"></a>2.1.2.1.3.7 Field **card\_number**

##### 2.1.2.1.3.7.1 **card\_number** Tree Diagram

![Hackolade image](./Database/image11.png?raw=true)

##### 2.1.2.1.3.7.2 **card\_number** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>card_number</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>1234123412341234</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="baa1ba09-17fd-47fe-9253-5bc40a7757bf"></a>2.1.2.1.3.8 Field **expiration\_date**

##### 2.1.2.1.3.8.1 **expiration\_date** Tree Diagram

![Hackolade image](./Database/image12.png?raw=true)

##### 2.1.2.1.3.8.2 **expiration\_date** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>expiration_date</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>12/23</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e5e5e5cd-46ef-46d6-ac0a-7cc9c29d7f4b"></a>2.1.2.1.3.9 Field **security\_code**

##### 2.1.2.1.3.9.1 **security\_code** Tree Diagram

![Hackolade image](./Database/image13.png?raw=true)

##### 2.1.2.1.3.9.2 **security\_code** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>security_code</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>loại: thẻ tín dụng, momo, vv</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>1234</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7dd54342-552d-469e-8284-956f66fec46c"></a>2.1.2.1.3.10 Field **orders**

##### 2.1.2.1.3.10.1 **orders** Tree Diagram

![Hackolade image](./Database/image14.png?raw=true)

##### 2.1.2.1.3.10.2 **orders** Hierarchy

Parent field: **billings**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#8a9bdc9d-dbe2-4400-8dda-b63ad1eed8ea class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.10.3 **orders** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>orders</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>hóa đơn</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8a9bdc9d-dbe2-4400-8dda-b63ad1eed8ea"></a>2.1.2.1.3.11 Field **\[0\]**

##### 2.1.2.1.3.11.1 **\[0\]** Tree Diagram

![Hackolade image](./Database/image15.png?raw=true)

##### 2.1.2.1.3.11.2 **\[0\]** Hierarchy

Parent field: **orders**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#866fe39b-1de1-4d6f-859e-6d7c69717358 class="margin-NaN">order_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"><p>ID mua hàng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#47a345ba-ed34-47dc-bbe0-c879c7d607dc class="margin-NaN">date</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>Ngày mua các khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7ad03c69-bca6-4f4a-a502-51f9631b847f class="margin-NaN">status</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Trạng thái hóa đơn</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#944af035-7d66-46c3-9af9-e6bab946d689 class="margin-NaN">items</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Danh sách các khóa học mua</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d5aae5bc-e19a-4ab2-bd9d-7be0fe872836 class="margin-NaN">total_amount</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tổng giá trị của 1 order</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.11.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="866fe39b-1de1-4d6f-859e-6d7c69717358"></a>2.1.2.1.3.12 Field **order\_id**

##### 2.1.2.1.3.12.1 **order\_id** Tree Diagram

![Hackolade image](./Database/image16.png?raw=true)

##### 2.1.2.1.3.12.2 **order\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>order_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID mua hàng</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="47a345ba-ed34-47dc-bbe0-c879c7d607dc"></a>2.1.2.1.3.13 Field **date**

##### 2.1.2.1.3.13.1 **date** Tree Diagram

![Hackolade image](./Database/image17.png?raw=true)

##### 2.1.2.1.3.13.2 **date** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>date</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Ngày mua các khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7ad03c69-bca6-4f4a-a502-51f9631b847f"></a>2.1.2.1.3.14 Field **status**

##### 2.1.2.1.3.14.1 **status** Tree Diagram

![Hackolade image](./Database/image18.png?raw=true)

##### 2.1.2.1.3.14.2 **status** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>status</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Trạng thái hóa đơn</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Đã thanh toán</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="944af035-7d66-46c3-9af9-e6bab946d689"></a>2.1.2.1.3.15 Field **items**

##### 2.1.2.1.3.15.1 **items** Tree Diagram

![Hackolade image](./Database/image19.png?raw=true)

##### 2.1.2.1.3.15.2 **items** Hierarchy

Parent field: **\[0\]**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#2f1e0eff-8794-4990-b66f-a066348e0915 class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.15.3 **items** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>items</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Danh sách các khóa học mua</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="2f1e0eff-8794-4990-b66f-a066348e0915"></a>2.1.2.1.3.16 Field **\[0\]**

##### 2.1.2.1.3.16.1 **\[0\]** Tree Diagram

![Hackolade image](./Database/image20.png?raw=true)

##### 2.1.2.1.3.16.2 **\[0\]** Hierarchy

Parent field: **items**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#386052d2-ec30-4e18-985a-603c7487a282 class="margin-NaN">course_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"><p>ID khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1a30ba1f-3963-483f-b123-829156468d75 class="margin-NaN">course_name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tên khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a836d7b6-cc7f-42a4-b131-54836d2978ee class="margin-NaN">course_price</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>Giá 1 khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.16.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="386052d2-ec30-4e18-985a-603c7487a282"></a>2.1.2.1.3.17 Field **course\_id**

##### 2.1.2.1.3.17.1 **course\_id** Tree Diagram

![Hackolade image](./Database/image21.png?raw=true)

##### 2.1.2.1.3.17.2 **course\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>course_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Foreign field</td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk billings.orders.[0].items.[0].course_id to courses._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1a30ba1f-3963-483f-b123-829156468d75"></a>2.1.2.1.3.18 Field **course\_name**

##### 2.1.2.1.3.18.1 **course\_name** Tree Diagram

![Hackolade image](./Database/image22.png?raw=true)

##### 2.1.2.1.3.18.2 **course\_name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>course_name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Tên khóa học</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a836d7b6-cc7f-42a4-b131-54836d2978ee"></a>2.1.2.1.3.19 Field **course\_price**

##### 2.1.2.1.3.19.1 **course\_price** Tree Diagram

![Hackolade image](./Database/image23.png?raw=true)

##### 2.1.2.1.3.19.2 **course\_price** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>course_price</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Giá 1 khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>200000</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d5aae5bc-e19a-4ab2-bd9d-7be0fe872836"></a>2.1.2.1.3.20 Field **total\_amount**

##### 2.1.2.1.3.20.1 **total\_amount** Tree Diagram

![Hackolade image](./Database/image24.png?raw=true)

##### 2.1.2.1.3.20.2 **total\_amount** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>total_amount</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Tổng giá trị của 1 order</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>150000</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.4 **billings** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "billings",
    "description": "Bảng chi tiết hóa đơn & thanh toán",
    "properties": {
        "_id": {
            "type": "string",
            "description": "ID chi tiết hóa đơn",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "user_id": {
            "type": "string",
            "description": "ID người dùng",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "user_name": {
            "type": "string",
            "description": "Họ tên người mua"
        },
        "email": {
            "type": "string",
            "description": "Email người dùng",
            "format": "email"
        },
        "payment_method": {
            "type": "object",
            "description": "Phương thức thanh toán",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "loại: thẻ tín dụng, momo, vv"
                },
                "card_number": {
                    "type": "number",
                    "description": "loại: thẻ tín dụng, momo, vv"
                },
                "expiration_date": {
                    "type": "string",
                    "description": "loại: thẻ tín dụng, momo, vv"
                },
                "security_code": {
                    "type": "number",
                    "description": "loại: thẻ tín dụng, momo, vv"
                }
            },
            "additionalProperties": false
        },
        "orders": {
            "type": "array",
            "description": "hóa đơn",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "order_id": {
                        "type": "string",
                        "description": "ID mua hàng",
                        "pattern": "^[a-fA-F0-9]{24}$"
                    },
                    "date": {
                        "type": "string",
                        "description": "Ngày mua các khóa học",
                        "format": "date-time"
                    },
                    "status": {
                        "type": "string",
                        "description": "Trạng thái hóa đơn"
                    },
                    "items": {
                        "type": "array",
                        "description": "Danh sách các khóa học mua",
                        "additionalItems": true,
                        "items": {
                            "type": "object",
                            "properties": {
                                "course_id": {
                                    "type": "string",
                                    "description": "ID khóa học",
                                    "pattern": "^[a-fA-F0-9]{24}$"
                                },
                                "course_name": {
                                    "type": "string",
                                    "description": "Tên khóa học"
                                },
                                "course_price": {
                                    "type": "number",
                                    "description": "Giá 1 khóa học"
                                }
                            },
                            "additionalProperties": false
                        }
                    },
                    "total_amount": {
                        "type": "number",
                        "description": "Tổng giá trị của 1 order"
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "additionalProperties": false
}
```

##### 2.1.2.1.5 **billings** JSON data

```
{
    "_id": ObjectId("deb7dceafcb3372a1f83d7d6"),
    "user_id": ObjectId("0fa3c25cd7e6aff1ebf0ef6c"),
    "user_name": "John Smith",
    "email": "sample@email.com",
    "payment_method": {
        "type": "credit_card",
        "card_number": 1234123412341234,
        "expiration_date": "12/23",
        "security_code": 1234
    },
    "orders": [
        {
            "order_id": ObjectId("d784c92ef5becb1fcf3b8fdf"),
            "date": ISODate("2016-04-08T15:06:21.595Z"),
            "status": "Đã thanh toán",
            "items": [
                {
                    "course_id": ObjectId("28e27cfd4bc6c5c00dccf6e8"),
                    "course_name": "Lorem",
                    "course_price": 200000
                }
            ],
            "total_amount": 150000
        }
    ]
}
```

##### 2.1.2.1.6 **billings** Target Script

```
use BanKhoaHoc;

db.createCollection("billings", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "billings",
            "description": "Bảng chi tiết hóa đơn & thanh toán",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "description": "ID chi tiết hóa đơn"
                },
                "user_id": {
                    "bsonType": "objectId",
                    "description": "ID người dùng"
                },
                "user_name": {
                    "bsonType": "string",
                    "description": "Họ tên người mua"
                },
                "email": {
                    "bsonType": "string",
                    "description": "Email người dùng"
                },
                "payment_method": {
                    "bsonType": "object",
                    "description": "Phương thức thanh toán",
                    "properties": {
                        "type": {
                            "bsonType": "string",
                            "description": "loại: thẻ tín dụng, momo, vv"
                        },
                        "card_number": {
                            "bsonType": "number",
                            "description": "loại: thẻ tín dụng, momo, vv"
                        },
                        "expiration_date": {
                            "bsonType": "string",
                            "description": "loại: thẻ tín dụng, momo, vv"
                        },
                        "security_code": {
                            "bsonType": "number",
                            "description": "loại: thẻ tín dụng, momo, vv"
                        }
                    },
                    "additionalProperties": false
                },
                "orders": {
                    "bsonType": "array",
                    "description": "hóa đơn",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "order_id": {
                                "bsonType": "objectId",
                                "description": "ID mua hàng"
                            },
                            "date": {
                                "bsonType": "date",
                                "description": "Ngày mua các khóa học"
                            },
                            "status": {
                                "bsonType": "string",
                                "description": "Trạng thái hóa đơn"
                            },
                            "items": {
                                "bsonType": "array",
                                "description": "Danh sách các khóa học mua",
                                "additionalItems": true,
                                "items": {
                                    "bsonType": "object",
                                    "properties": {
                                        "course_id": {
                                            "bsonType": "objectId",
                                            "description": "ID khóa học"
                                        },
                                        "course_name": {
                                            "bsonType": "string",
                                            "description": "Tên khóa học"
                                        },
                                        "course_price": {
                                            "bsonType": "number",
                                            "description": "Giá 1 khóa học"
                                        }
                                    },
                                    "additionalProperties": false
                                }
                            },
                            "total_amount": {
                                "bsonType": "number",
                                "description": "Tổng giá trị của 1 order"
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="34fb3d70-57d0-4028-b679-efc879f2836e"></a>2.1.2.2 Collection **courses**

##### 2.1.2.2.1 **courses** Tree Diagram

![Hackolade image](./Database/image25.png?raw=true)

##### 2.1.2.2.2 **courses** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>courses</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Bảng thông tin khóa học</p></div></td></tr><tr><td>Database</td><td><a href=#56fa4821-fb8a-4925-b373-89733686924a><span class="name-container">BanKhoaHoc</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3 **courses** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58 class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"><p>ID khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#3cc6e9be-137f-4737-83d3-2e6f2e993e0e class="margin-0">name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tên khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#90434fd0-8597-47b3-a900-38f2d842f2d6 class="margin-0">description</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Mô tả khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ba42e273-92fe-43aa-ab95-d117de4ec519 class="margin-0">num_enrolled</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>Số người đăng ký</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9e7294c3-527a-4bf8-8797-29490235e9c8 class="margin-0">learning_outcome</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Những kỹ năng có được sau khi học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#477c50c5-13bc-4707-9cb4-0847a911b6bd class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6f8af114-cda9-45c8-a1a5-55e6398ba5e2 class="margin-0">category</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Những chủ đề khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#05c21c76-cfbd-4f86-9064-06f35a434f33 class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#498c989b-408d-4968-a5fb-a351deade22b class="margin-0">level</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Trình độ: Cơ bản, chuyên sâu, chuyên ngành,...</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8ecd4939-cfec-405d-b68b-c5e0d60db5ea class="margin-0">price</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>Giá tiền khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#40357f5f-e990-403f-aa10-4793befeef89 class="margin-0">poster_url</a></td><td class="no-break-word">uri</td><td>false</td><td></td><td><div class="docs-markdown"><p>Poster khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#47fd4bb1-160a-4753-8348-0306369b5042 class="margin-0">instructors</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Danh sách giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1eba1bef-0de2-429a-b188-41c8f7c06b9f class="margin-5">[0]&nbsp;lecturer</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e2a0d2e2-f771-4316-b401-3e303b816661 class="margin-10">User</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c2b86c74-5fbc-4750-943a-ab9319ffc328 class="margin-15">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>ID người dùng giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8293cdcb-0438-49c8-b0e3-d9026843760d class="margin-15">name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tên giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#31df3720-0754-4692-a45d-cac87eecb397 class="margin-15">email</a></td><td class="no-break-word">email</td><td>false</td><td></td><td><div class="docs-markdown"><p>email giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c29f6118-687d-4fb3-b9f1-96b484b0bc87 class="margin-15">gender</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>giới tính giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#27560c7b-9c59-4aa8-b910-56982141af56 class="margin-15">profile_pic</a></td><td class="no-break-word">uri</td><td>false</td><td></td><td><div class="docs-markdown"><p>hình giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4ea5071e-544d-49aa-9415-c52eb2b38901 class="margin-10">bio</a></td><td class="no-break-word">string</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>Mô tả giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6b7717ca-adce-4be9-a79b-508188f68117 class="margin-0">videos</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Danh sách video khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#07f9c1b7-3e11-4f6c-be78-42f67cdd1802 class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#25304610-d381-4e70-ad50-8295ffaefbad class="margin-10">video_title</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tiêu đề video</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2cc46f6f-5f25-42e9-9662-b4ec81e6369d class="margin-10">video_url</a></td><td class="no-break-word">uri</td><td>false</td><td></td><td><div class="docs-markdown"><p>Liên kết video</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#dfafc443-ad85-4355-811c-2d131c788b6e class="margin-10">lesson_note</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Ghi chú bài giảng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0a672927-1452-4e8e-a8b7-c3788afd7935 class="margin-0">requirements</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Yêu cầu kiến thức</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9adc298c-404c-413d-8731-ed09c617e113 class="margin-5">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a759e0af-b9a4-4204-ba96-59302ad6909d class="margin-0">students</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Danh sách học viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#153b2036-bd47-4491-a144-79adbc27177a class="margin-5">[0]&nbsp;User</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"><p>Liên kết với bảng users</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d1ce568b-196c-4688-b768-656232a9c33a class="margin-10">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>id học viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#210ebaf0-907e-4809-9052-3c609c7ebff4 class="margin-0">course_review</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Review khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#feb22285-77d2-45f0-bddf-4d086ebfe2d7 class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a9d37e6c-9455-4669-9c7a-27cdc0e867e3 class="margin-10">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>id học viên đánh giá</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6b51e40d-61dc-42ad-ab1e-0ea144180bf4 class="margin-10">rating</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>Đánh giá từ 1 -&gt; 5 sao</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#56bf8f13-51e8-4573-9fb5-ca47133d44cf class="margin-10">comment</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Bình luận</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c4f2249f-0a41-47b5-a70f-7997441cffed class="margin-10">created_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>ngày tạo bình luận</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0e65c959-b46c-485b-b55d-f900e78d33c2 class="margin-10">updated_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f22d4509-0b95-4927-b9fd-7b5d18fce13d class="margin-0">created_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>Được tạo vào ngày</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#fff46fea-5382-4e80-969a-987732b4d596 class="margin-0">updated_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>Được cập nhật vào ngày</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4c2b9f63-a48c-482b-973f-6f8877d75b58"></a>2.1.2.2.3.1 Field **\_id**

##### 2.1.2.2.3.1.1 **\_id** Tree Diagram

![Hackolade image](./Database/image26.png?raw=true)

##### 2.1.2.2.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3cc6e9be-137f-4737-83d3-2e6f2e993e0e"></a>2.1.2.2.3.2 Field **name**

##### 2.1.2.2.3.2.1 **name** Tree Diagram

![Hackolade image](./Database/image27.png?raw=true)

##### 2.1.2.2.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Tên khóa học</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="90434fd0-8597-47b3-a900-38f2d842f2d6"></a>2.1.2.2.3.3 Field **description**

##### 2.1.2.2.3.3.1 **description** Tree Diagram

![Hackolade image](./Database/image28.png?raw=true)

##### 2.1.2.2.3.3.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Mô tả khóa học</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ba42e273-92fe-43aa-ab95-d117de4ec519"></a>2.1.2.2.3.4 Field **num\_enrolled**

##### 2.1.2.2.3.4.1 **num\_enrolled** Tree Diagram

![Hackolade image](./Database/image29.png?raw=true)

##### 2.1.2.2.3.4.2 **num\_enrolled** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>num_enrolled</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Số người đăng ký</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9e7294c3-527a-4bf8-8797-29490235e9c8"></a>2.1.2.2.3.5 Field **learning\_outcome**

##### 2.1.2.2.3.5.1 **learning\_outcome** Tree Diagram

![Hackolade image](./Database/image30.png?raw=true)

##### 2.1.2.2.3.5.2 **learning\_outcome** Hierarchy

Parent field: **courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#477c50c5-13bc-4707-9cb4-0847a911b6bd class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.5.3 **learning\_outcome** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>learning_outcome</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Những kỹ năng có được sau khi học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="477c50c5-13bc-4707-9cb4-0847a911b6bd"></a>2.1.2.2.3.6 Field **\[0\]**

##### 2.1.2.2.3.6.1 **\[0\]** Tree Diagram

![Hackolade image](./Database/image31.png?raw=true)

##### 2.1.2.2.3.6.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6f8af114-cda9-45c8-a1a5-55e6398ba5e2"></a>2.1.2.2.3.7 Field **category**

##### 2.1.2.2.3.7.1 **category** Tree Diagram

![Hackolade image](./Database/image32.png?raw=true)

##### 2.1.2.2.3.7.2 **category** Hierarchy

Parent field: **courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#05c21c76-cfbd-4f86-9064-06f35a434f33 class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.7.3 **category** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>category</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Những chủ đề khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="05c21c76-cfbd-4f86-9064-06f35a434f33"></a>2.1.2.2.3.8 Field **\[0\]**

##### 2.1.2.2.3.8.1 **\[0\]** Tree Diagram

![Hackolade image](./Database/image33.png?raw=true)

##### 2.1.2.2.3.8.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="498c989b-408d-4968-a5fb-a351deade22b"></a>2.1.2.2.3.9 Field **level**

##### 2.1.2.2.3.9.1 **level** Tree Diagram

![Hackolade image](./Database/image34.png?raw=true)

##### 2.1.2.2.3.9.2 **level** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>level</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Trình độ: Cơ bản, chuyên sâu, chuyên ngành,...</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8ecd4939-cfec-405d-b68b-c5e0d60db5ea"></a>2.1.2.2.3.10 Field **price**

##### 2.1.2.2.3.10.1 **price** Tree Diagram

![Hackolade image](./Database/image35.png?raw=true)

##### 2.1.2.2.3.10.2 **price** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>price</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Giá tiền khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="40357f5f-e990-403f-aa10-4793befeef89"></a>2.1.2.2.3.11 Field **poster\_url**

##### 2.1.2.2.3.11.1 **poster\_url** Tree Diagram

![Hackolade image](./Database/image36.png?raw=true)

##### 2.1.2.2.3.11.2 **poster\_url** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>poster_url</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Poster khóa học</p></div></td></tr><tr><td>Format</td><td>uri</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="47fd4bb1-160a-4753-8348-0306369b5042"></a>2.1.2.2.3.12 Field **instructors**

##### 2.1.2.2.3.12.1 **instructors** Tree Diagram

![Hackolade image](./Database/image37.png?raw=true)

##### 2.1.2.2.3.12.2 **instructors** Hierarchy

Parent field: **courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#1eba1bef-0de2-429a-b188-41c8f7c06b9f class="margin-NaN">[0]&nbsp;lecturer</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.12.3 **instructors** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>instructors</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Danh sách giảng viên</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1eba1bef-0de2-429a-b188-41c8f7c06b9f"></a>2.1.2.2.3.13 Field **\[0\] lecturer**

##### 2.1.2.2.3.13.1 **\[0\] lecturer** Tree Diagram

![Hackolade image](./Database/image38.png?raw=true)

##### 2.1.2.2.3.13.2 **\[0\] lecturer** Hierarchy

Parent field: **instructors**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#e2a0d2e2-f771-4316-b401-3e303b816661 class="margin-NaN">User</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4ea5071e-544d-49aa-9415-c52eb2b38901 class="margin-NaN">bio</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Mô tả giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.13.3 **\[0\] lecturer** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td>lecturer</td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#7763d428-db9e-4464-ae2f-19edd261c592>lecturer</a></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e2a0d2e2-f771-4316-b401-3e303b816661"></a>2.1.2.2.3.14 Field **User**

##### 2.1.2.2.3.14.1 **User** Tree Diagram

![Hackolade image](./Database/image39.png?raw=true)

##### 2.1.2.2.3.14.2 **User** Hierarchy

Parent field: **\[0\] lecturer**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#c2b86c74-5fbc-4750-943a-ab9319ffc328 class="margin-NaN">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"><p>ID người dùng giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#8293cdcb-0438-49c8-b0e3-d9026843760d class="margin-NaN">name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tên giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#31df3720-0754-4692-a45d-cac87eecb397 class="margin-NaN">email</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>email giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c29f6118-687d-4fb3-b9f1-96b484b0bc87 class="margin-NaN">gender</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>giới tính giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#27560c7b-9c59-4aa8-b910-56982141af56 class="margin-NaN">profile_pic</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>hình giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.14.3 **User** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>User</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c2b86c74-5fbc-4750-943a-ab9319ffc328"></a>2.1.2.2.3.15 Field **user\_id**

##### 2.1.2.2.3.15.1 **user\_id** Tree Diagram

![Hackolade image](./Database/image40.png?raw=true)

##### 2.1.2.2.3.15.2 **user\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID người dùng giảng viên</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Foreign field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk courses.instructors.[0].User.user_id to users._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="8293cdcb-0438-49c8-b0e3-d9026843760d"></a>2.1.2.2.3.16 Field **name**

##### 2.1.2.2.3.16.1 **name** Tree Diagram

![Hackolade image](./Database/image41.png?raw=true)

##### 2.1.2.2.3.16.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Tên giảng viên</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="31df3720-0754-4692-a45d-cac87eecb397"></a>2.1.2.2.3.17 Field **email**

##### 2.1.2.2.3.17.1 **email** Tree Diagram

![Hackolade image](./Database/image42.png?raw=true)

##### 2.1.2.2.3.17.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>email giảng viên</p></div></td></tr><tr><td>Format</td><td>email</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c29f6118-687d-4fb3-b9f1-96b484b0bc87"></a>2.1.2.2.3.18 Field **gender**

##### 2.1.2.2.3.18.1 **gender** Tree Diagram

![Hackolade image](./Database/image43.png?raw=true)

##### 2.1.2.2.3.18.2 **gender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>gender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>giới tính giảng viên</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="27560c7b-9c59-4aa8-b910-56982141af56"></a>2.1.2.2.3.19 Field **profile\_pic**

##### 2.1.2.2.3.19.1 **profile\_pic** Tree Diagram

![Hackolade image](./Database/image44.png?raw=true)

##### 2.1.2.2.3.19.2 **profile\_pic** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>profile_pic</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>hình giảng viên</p></div></td></tr><tr><td>Format</td><td>uri</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4ea5071e-544d-49aa-9415-c52eb2b38901"></a>2.1.2.2.3.20 Field **bio**

##### 2.1.2.2.3.20.1 **bio** Tree Diagram

![Hackolade image](./Database/image45.png?raw=true)

##### 2.1.2.2.3.20.2 **bio** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bio</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Mô tả giảng viên</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#7763d428-db9e-4464-ae2f-19edd261c592>lecturer</a></td></tr><tr><td>Foreign field</td><td><a href=#e91fa04c-ca90-42c8-aa64-0cb5235c16f0>bio</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk courses.instructors.[0].bio to lecturer.bio</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6b7717ca-adce-4be9-a79b-508188f68117"></a>2.1.2.2.3.21 Field **videos**

##### 2.1.2.2.3.21.1 **videos** Tree Diagram

![Hackolade image](./Database/image46.png?raw=true)

##### 2.1.2.2.3.21.2 **videos** Hierarchy

Parent field: **courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#07f9c1b7-3e11-4f6c-be78-42f67cdd1802 class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.21.3 **videos** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>videos</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Danh sách video khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="07f9c1b7-3e11-4f6c-be78-42f67cdd1802"></a>2.1.2.2.3.22 Field **\[0\]**

##### 2.1.2.2.3.22.1 **\[0\]** Tree Diagram

![Hackolade image](./Database/image47.png?raw=true)

##### 2.1.2.2.3.22.2 **\[0\]** Hierarchy

Parent field: **videos**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#25304610-d381-4e70-ad50-8295ffaefbad class="margin-NaN">video_title</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tiêu đề video</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#2cc46f6f-5f25-42e9-9662-b4ec81e6369d class="margin-NaN">video_url</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Liên kết video</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#dfafc443-ad85-4355-811c-2d131c788b6e class="margin-NaN">lesson_note</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Ghi chú bài giảng</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.22.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="25304610-d381-4e70-ad50-8295ffaefbad"></a>2.1.2.2.3.23 Field **video\_title**

##### 2.1.2.2.3.23.1 **video\_title** Tree Diagram

![Hackolade image](./Database/image48.png?raw=true)

##### 2.1.2.2.3.23.2 **video\_title** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>video_title</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Tiêu đề video</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="2cc46f6f-5f25-42e9-9662-b4ec81e6369d"></a>2.1.2.2.3.24 Field **video\_url**

##### 2.1.2.2.3.24.1 **video\_url** Tree Diagram

![Hackolade image](./Database/image49.png?raw=true)

##### 2.1.2.2.3.24.2 **video\_url** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>video_url</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Liên kết video</p></div></td></tr><tr><td>Format</td><td>uri</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="dfafc443-ad85-4355-811c-2d131c788b6e"></a>2.1.2.2.3.25 Field **lesson\_note**

##### 2.1.2.2.3.25.1 **lesson\_note** Tree Diagram

![Hackolade image](./Database/image50.png?raw=true)

##### 2.1.2.2.3.25.2 **lesson\_note** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>lesson_note</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Ghi chú bài giảng</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0a672927-1452-4e8e-a8b7-c3788afd7935"></a>2.1.2.2.3.26 Field **requirements**

##### 2.1.2.2.3.26.1 **requirements** Tree Diagram

![Hackolade image](./Database/image51.png?raw=true)

##### 2.1.2.2.3.26.2 **requirements** Hierarchy

Parent field: **courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#9adc298c-404c-413d-8731-ed09c617e113 class="margin-NaN">[0]</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.26.3 **requirements** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>requirements</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Yêu cầu kiến thức</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9adc298c-404c-413d-8731-ed09c617e113"></a>2.1.2.2.3.27 Field **\[0\]**

##### 2.1.2.2.3.27.1 **\[0\]** Tree Diagram

![Hackolade image](./Database/image52.png?raw=true)

##### 2.1.2.2.3.27.2 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a759e0af-b9a4-4204-ba96-59302ad6909d"></a>2.1.2.2.3.28 Field **students**

##### 2.1.2.2.3.28.1 **students** Tree Diagram

![Hackolade image](./Database/image53.png?raw=true)

##### 2.1.2.2.3.28.2 **students** Hierarchy

Parent field: **courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#153b2036-bd47-4491-a144-79adbc27177a class="margin-NaN">[0]&nbsp;User</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"><p>Liên kết với bảng users</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.28.3 **students** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>students</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Danh sách học viên</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="153b2036-bd47-4491-a144-79adbc27177a"></a>2.1.2.2.3.29 Field **\[0\] User**

##### 2.1.2.2.3.29.1 **\[0\] User** Tree Diagram

![Hackolade image](./Database/image54.png?raw=true)

##### 2.1.2.2.3.29.2 **\[0\] User** Hierarchy

Parent field: **students**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#d1ce568b-196c-4688-b768-656232a9c33a class="margin-NaN">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"><p>id học viên</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.29.3 **\[0\] User** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td>User</td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Liên kết với bảng users</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d1ce568b-196c-4688-b768-656232a9c33a"></a>2.1.2.2.3.30 Field **user\_id**

##### 2.1.2.2.3.30.1 **user\_id** Tree Diagram

![Hackolade image](./Database/image55.png?raw=true)

##### 2.1.2.2.3.30.2 **user\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>id học viên</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Foreign field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk courses.students.[0].user_id to users._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="210ebaf0-907e-4809-9052-3c609c7ebff4"></a>2.1.2.2.3.31 Field **course\_review**

##### 2.1.2.2.3.31.1 **course\_review** Tree Diagram

![Hackolade image](./Database/image56.png?raw=true)

##### 2.1.2.2.3.31.2 **course\_review** Hierarchy

Parent field: **courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#feb22285-77d2-45f0-bddf-4d086ebfe2d7 class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.31.3 **course\_review** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>course_review</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Review khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="feb22285-77d2-45f0-bddf-4d086ebfe2d7"></a>2.1.2.2.3.32 Field **\[0\]**

##### 2.1.2.2.3.32.1 **\[0\]** Tree Diagram

![Hackolade image](./Database/image57.png?raw=true)

##### 2.1.2.2.3.32.2 **\[0\]** Hierarchy

Parent field: **course\_review**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#a9d37e6c-9455-4669-9c7a-27cdc0e867e3 class="margin-NaN">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"><p>id học viên đánh giá</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6b51e40d-61dc-42ad-ab1e-0ea144180bf4 class="margin-NaN">rating</a></td><td class="no-break-word">numeric</td><td>false</td><td></td><td><div class="docs-markdown"><p>Đánh giá từ 1 -&gt; 5 sao</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#56bf8f13-51e8-4573-9fb5-ca47133d44cf class="margin-NaN">comment</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Bình luận</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c4f2249f-0a41-47b5-a70f-7997441cffed class="margin-NaN">created_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>ngày tạo bình luận</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#0e65c959-b46c-485b-b55d-f900e78d33c2 class="margin-NaN">updated_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.32.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a9d37e6c-9455-4669-9c7a-27cdc0e867e3"></a>2.1.2.2.3.33 Field **user\_id**

##### 2.1.2.2.3.33.1 **user\_id** Tree Diagram

![Hackolade image](./Database/image58.png?raw=true)

##### 2.1.2.2.3.33.2 **user\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>id học viên đánh giá</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Foreign field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk courses.course_review.[0].user_id to users._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6b51e40d-61dc-42ad-ab1e-0ea144180bf4"></a>2.1.2.2.3.34 Field **rating**

##### 2.1.2.2.3.34.1 **rating** Tree Diagram

![Hackolade image](./Database/image59.png?raw=true)

##### 2.1.2.2.3.34.2 **rating** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>rating</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>numeric</td></tr><tr><td>Subtype</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Đánh giá từ 1 -&gt; 5 sao</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Unit</td><td></td></tr><tr><td>Min value</td><td></td></tr><tr><td>Excl min</td><td></td></tr><tr><td>Max value</td><td></td></tr><tr><td>Excl max</td><td></td></tr><tr><td>Multiple of</td><td></td></tr><tr><td>Divisible by</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>3.5</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="56bf8f13-51e8-4573-9fb5-ca47133d44cf"></a>2.1.2.2.3.35 Field **comment**

##### 2.1.2.2.3.35.1 **comment** Tree Diagram

![Hackolade image](./Database/image60.png?raw=true)

##### 2.1.2.2.3.35.2 **comment** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>comment</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Bình luận</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c4f2249f-0a41-47b5-a70f-7997441cffed"></a>2.1.2.2.3.36 Field **created\_at**

##### 2.1.2.2.3.36.1 **created\_at** Tree Diagram

![Hackolade image](./Database/image61.png?raw=true)

##### 2.1.2.2.3.36.2 **created\_at** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>created_at</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ngày tạo bình luận</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="0e65c959-b46c-485b-b55d-f900e78d33c2"></a>2.1.2.2.3.37 Field **updated\_at**

##### 2.1.2.2.3.37.1 **updated\_at** Tree Diagram

![Hackolade image](./Database/image62.png?raw=true)

##### 2.1.2.2.3.37.2 **updated\_at** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updated_at</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f22d4509-0b95-4927-b9fd-7b5d18fce13d"></a>2.1.2.2.3.38 Field **created\_at**

##### 2.1.2.2.3.38.1 **created\_at** Tree Diagram

![Hackolade image](./Database/image63.png?raw=true)

##### 2.1.2.2.3.38.2 **created\_at** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>created_at</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Được tạo vào ngày</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="fff46fea-5382-4e80-969a-987732b4d596"></a>2.1.2.2.3.39 Field **updated\_at**

##### 2.1.2.2.3.39.1 **updated\_at** Tree Diagram

![Hackolade image](./Database/image64.png?raw=true)

##### 2.1.2.2.3.39.2 **updated\_at** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updated_at</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Được cập nhật vào ngày</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.4 **courses** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "courses",
    "description": "Bảng thông tin khóa học",
    "properties": {
        "_id": {
            "type": "string",
            "description": "ID khóa học",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string",
            "description": "Tên khóa học"
        },
        "description": {
            "type": "string",
            "description": "Mô tả khóa học"
        },
        "num_enrolled": {
            "type": "number",
            "description": "Số người đăng ký"
        },
        "learning_outcome": {
            "type": "array",
            "description": "Những kỹ năng có được sau khi học",
            "additionalItems": true,
            "items": {
                "type": "string"
            }
        },
        "category": {
            "type": "array",
            "description": "Những chủ đề khóa học",
            "additionalItems": true,
            "items": {
                "type": "string"
            }
        },
        "level": {
            "type": "string",
            "description": "Trình độ: Cơ bản, chuyên sâu, chuyên ngành,..."
        },
        "price": {
            "type": "number",
            "description": "Giá tiền khóa học"
        },
        "poster_url": {
            "type": "string",
            "description": "Poster khóa học",
            "format": "uri"
        },
        "instructors": {
            "type": "array",
            "description": "Danh sách giảng viên",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "User": {
                        "type": "object",
                        "properties": {
                            "user_id": {
                                "type": "string",
                                "description": "ID người dùng giảng viên",
                                "pattern": "^[a-fA-F0-9]{24}$"
                            },
                            "name": {
                                "type": "string",
                                "description": "Tên giảng viên"
                            },
                            "email": {
                                "type": "string",
                                "description": "email giảng viên",
                                "format": "email"
                            },
                            "gender": {
                                "type": "string",
                                "description": "giới tính giảng viên"
                            },
                            "profile_pic": {
                                "type": "string",
                                "description": "hình giảng viên",
                                "format": "uri"
                            }
                        },
                        "additionalProperties": false
                    },
                    "bio": {
                        "type": "string",
                        "description": "Mô tả giảng viên "
                    }
                },
                "additionalProperties": false
            }
        },
        "videos": {
            "type": "array",
            "description": "Danh sách video khóa học\n",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "video_title": {
                        "type": "string",
                        "description": "Tiêu đề video"
                    },
                    "video_url": {
                        "type": "string",
                        "description": "Liên kết video",
                        "format": "uri"
                    },
                    "lesson_note": {
                        "type": "string",
                        "description": "Ghi chú bài giảng\n"
                    }
                },
                "additionalProperties": false
            }
        },
        "requirements": {
            "type": "array",
            "description": "Yêu cầu kiến thức",
            "additionalItems": true,
            "items": {
                "type": "string"
            }
        },
        "students": {
            "type": "array",
            "description": "Danh sách học viên",
            "additionalItems": true,
            "items": {
                "type": "object",
                "description": "Liên kết với bảng users",
                "properties": {
                    "user_id": {
                        "type": "string",
                        "description": "id học viên",
                        "pattern": "^[a-fA-F0-9]{24}$"
                    }
                },
                "additionalProperties": false
            }
        },
        "course_review": {
            "type": "array",
            "description": "Review khóa học",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "user_id": {
                        "type": "string",
                        "description": "id học viên đánh giá",
                        "pattern": "^[a-fA-F0-9]{24}$"
                    },
                    "rating": {
                        "type": "number",
                        "description": "Đánh giá từ 1 -> 5 sao"
                    },
                    "comment": {
                        "type": "string",
                        "description": "Bình luận"
                    },
                    "created_at": {
                        "type": "string",
                        "description": "ngày tạo bình luận",
                        "format": "date-time"
                    },
                    "updated_at": {
                        "type": "string",
                        "format": "date-time"
                    }
                },
                "additionalProperties": false
            }
        },
        "created_at": {
            "type": "string",
            "description": "Được tạo vào ngày",
            "format": "date-time"
        },
        "updated_at": {
            "type": "string",
            "description": "Được cập nhật vào ngày",
            "format": "date-time"
        }
    },
    "additionalProperties": false,
    "required": [
        "_id"
    ]
}
```

##### 2.1.2.2.5 **courses** JSON data

```
{
    "_id": ObjectId("3a8af62df6eb08022966a7d1"),
    "name": "Lorem",
    "description": "Lorem",
    "num_enrolled": -66,
    "learning_outcome": [
        "Lorem"
    ],
    "category": [
        "Lorem"
    ],
    "level": "Lorem",
    "price": 18,
    "poster_url": "./resource.txt#frag01",
    "instructors": [
        {
            "User": {
                "user_id": ObjectId("3f7f97247ebc0beeedec7b37"),
                "name": "Lorem",
                "email": "sample@email.com",
                "gender": "Lorem",
                "profile_pic": "./resource.txt#frag01"
            },
            "bio": "Lorem"
        }
    ],
    "videos": [
        {
            "video_title": "Lorem",
            "video_url": "./resource.txt#frag01",
            "lesson_note": "Lorem"
        }
    ],
    "requirements": [
        "Lorem"
    ],
    "students": [
        {
            "user_id": ObjectId("66a8ae9fdbf2dd4da0ee85df")
        }
    ],
    "course_review": [
        {
            "user_id": ObjectId("74debfad4ae7c670ceabbbae"),
            "rating": 3.5,
            "comment": "Lorem",
            "created_at": ISODate("2016-04-08T15:06:21.595Z"),
            "updated_at": ISODate("2016-04-08T15:06:21.595Z")
        }
    ],
    "created_at": ISODate("2016-04-08T15:06:21.595Z"),
    "updated_at": ISODate("2016-04-08T15:06:21.595Z")
}
```

##### 2.1.2.2.6 **courses** Target Script

```
use BanKhoaHoc;

db.createCollection("courses", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "courses",
            "description": "Bảng thông tin khóa học",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "description": "ID khóa học"
                },
                "name": {
                    "bsonType": "string",
                    "description": "Tên khóa học"
                },
                "description": {
                    "bsonType": "string",
                    "description": "Mô tả khóa học"
                },
                "num_enrolled": {
                    "bsonType": "number",
                    "description": "Số người đăng ký"
                },
                "learning_outcome": {
                    "bsonType": "array",
                    "description": "Những kỹ năng có được sau khi học",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "string"
                    }
                },
                "category": {
                    "bsonType": "array",
                    "description": "Những chủ đề khóa học",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "string"
                    }
                },
                "level": {
                    "bsonType": "string",
                    "description": "Trình độ: Cơ bản, chuyên sâu, chuyên ngành,..."
                },
                "price": {
                    "bsonType": "number",
                    "description": "Giá tiền khóa học"
                },
                "poster_url": {
                    "bsonType": "string",
                    "description": "Poster khóa học"
                },
                "instructors": {
                    "bsonType": "array",
                    "description": "Danh sách giảng viên",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "User": {
                                "bsonType": "object",
                                "properties": {
                                    "user_id": {
                                        "bsonType": "objectId",
                                        "description": "ID người dùng giảng viên"
                                    },
                                    "name": {
                                        "bsonType": "string",
                                        "description": "Tên giảng viên"
                                    },
                                    "email": {
                                        "bsonType": "string",
                                        "description": "email giảng viên"
                                    },
                                    "gender": {
                                        "bsonType": "string",
                                        "description": "giới tính giảng viên"
                                    },
                                    "profile_pic": {
                                        "bsonType": "string",
                                        "description": "hình giảng viên"
                                    }
                                },
                                "additionalProperties": false
                            },
                            "bio": {
                                "bsonType": "string",
                                "description": "Mô tả giảng viên "
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "videos": {
                    "bsonType": "array",
                    "description": "Danh sách video khóa học\n",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "video_title": {
                                "bsonType": "string",
                                "description": "Tiêu đề video"
                            },
                            "video_url": {
                                "bsonType": "string",
                                "description": "Liên kết video"
                            },
                            "lesson_note": {
                                "bsonType": "string",
                                "description": "Ghi chú bài giảng\n"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "requirements": {
                    "bsonType": "array",
                    "description": "Yêu cầu kiến thức",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "string"
                    }
                },
                "students": {
                    "bsonType": "array",
                    "description": "Danh sách học viên",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "description": "Liên kết với bảng users",
                        "properties": {
                            "user_id": {
                                "bsonType": "objectId",
                                "description": "id học viên"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "course_review": {
                    "bsonType": "array",
                    "description": "Review khóa học",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "user_id": {
                                "bsonType": "objectId",
                                "description": "id học viên đánh giá"
                            },
                            "rating": {
                                "bsonType": "number",
                                "description": "Đánh giá từ 1 -> 5 sao"
                            },
                            "comment": {
                                "bsonType": "string",
                                "description": "Bình luận"
                            },
                            "created_at": {
                                "bsonType": "date",
                                "description": "ngày tạo bình luận"
                            },
                            "updated_at": {
                                "bsonType": "date"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "created_at": {
                    "bsonType": "date",
                    "description": "Được tạo vào ngày"
                },
                "updated_at": {
                    "bsonType": "date",
                    "description": "Được cập nhật vào ngày"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="7763d428-db9e-4464-ae2f-19edd261c592"></a>2.1.2.3 Collection **lecturer**

##### 2.1.2.3.1 **lecturer** Tree Diagram

![Hackolade image](./Database/image65.png?raw=true)

##### 2.1.2.3.2 **lecturer** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>lecturer</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Bảng thông tin giảng viên, giảng viên là một người dùng đặc biệt</p></div></td></tr><tr><td>Database</td><td><a href=#56fa4821-fb8a-4925-b373-89733686924a><span class="name-container">BanKhoaHoc</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3 **lecturer** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f603d220-29bf-401e-86ec-66b54f47d4e4 class="margin-0">User</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#be59b29d-b720-4080-9962-6444a170aae5 class="margin-5">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ab2a6165-4a95-4555-bab2-ab1aed75ecd2 class="margin-5">name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7146d843-accf-494f-88fd-4acddb0c4ecc class="margin-5">email</a></td><td class="no-break-word">email</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d257387a-5101-4ff8-8552-70801527ec81 class="margin-5">gender</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c16e98a6-8747-4a46-ae54-bc6f42813393 class="margin-5">profile_pic</a></td><td class="no-break-word">uri</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#e91fa04c-ca90-42c8-aa64-0cb5235c16f0 class="margin-0">bio</a></td><td class="no-break-word">string</td><td>false</td><td>dk</td><td><div class="docs-markdown"><p>Mô tả giảng viên</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5ef33f10-453f-4ae2-a029-152d8d7cd3a1 class="margin-0">lecturer_courses</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Khóa học phụ trách</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c9b022c4-2a45-4d89-9f38-681081e0b84b class="margin-5">[0]&nbsp;course</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#72b9a15e-d6b2-49c1-8e1e-1c60b7a6206c class="margin-10">course_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f603d220-29bf-401e-86ec-66b54f47d4e4"></a>2.1.2.3.3.1 Field **User**

##### 2.1.2.3.3.1.1 **User** Tree Diagram

![Hackolade image](./Database/image66.png?raw=true)

##### 2.1.2.3.3.1.2 **User** Hierarchy

Parent field: **lecturer**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#be59b29d-b720-4080-9962-6444a170aae5 class="margin-NaN">user_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ab2a6165-4a95-4555-bab2-ab1aed75ecd2 class="margin-NaN">name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7146d843-accf-494f-88fd-4acddb0c4ecc class="margin-NaN">email</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d257387a-5101-4ff8-8552-70801527ec81 class="margin-NaN">gender</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c16e98a6-8747-4a46-ae54-bc6f42813393 class="margin-NaN">profile_pic</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3.1.3 **User** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>User</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="be59b29d-b720-4080-9962-6444a170aae5"></a>2.1.2.3.3.2 Field **user\_id**

##### 2.1.2.3.3.2.1 **user\_id** Tree Diagram

![Hackolade image](./Database/image67.png?raw=true)

##### 2.1.2.3.3.2.2 **user\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>user_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Foreign field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk lecturer.User.user_id to users._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ab2a6165-4a95-4555-bab2-ab1aed75ecd2"></a>2.1.2.3.3.3 Field **name**

##### 2.1.2.3.3.3.1 **name** Tree Diagram

![Hackolade image](./Database/image68.png?raw=true)

##### 2.1.2.3.3.3.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7146d843-accf-494f-88fd-4acddb0c4ecc"></a>2.1.2.3.3.4 Field **email**

##### 2.1.2.3.3.4.1 **email** Tree Diagram

![Hackolade image](./Database/image69.png?raw=true)

##### 2.1.2.3.3.4.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td>email</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d257387a-5101-4ff8-8552-70801527ec81"></a>2.1.2.3.3.5 Field **gender**

##### 2.1.2.3.3.5.1 **gender** Tree Diagram

![Hackolade image](./Database/image70.png?raw=true)

##### 2.1.2.3.3.5.2 **gender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>gender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c16e98a6-8747-4a46-ae54-bc6f42813393"></a>2.1.2.3.3.6 Field **profile\_pic**

##### 2.1.2.3.3.6.1 **profile\_pic** Tree Diagram

![Hackolade image](./Database/image71.png?raw=true)

##### 2.1.2.3.3.6.2 **profile\_pic** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>profile_pic</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Format</td><td>uri</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="e91fa04c-ca90-42c8-aa64-0cb5235c16f0"></a>2.1.2.3.3.7 Field **bio**

##### 2.1.2.3.3.7.1 **bio** Tree Diagram

![Hackolade image](./Database/image72.png?raw=true)

##### 2.1.2.3.3.7.2 **bio** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>bio</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Mô tả giảng viên</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>Siêu giáo viên, tác giả của hơn 300 framwork nổi tiếng của Javascript, C#, ..., 30 năm kinh nghiệp giảng dạy các trường đại học danh tiếng</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5ef33f10-453f-4ae2-a029-152d8d7cd3a1"></a>2.1.2.3.3.8 Field **lecturer\_courses**

##### 2.1.2.3.3.8.1 **lecturer\_courses** Tree Diagram

![Hackolade image](./Database/image73.png?raw=true)

##### 2.1.2.3.3.8.2 **lecturer\_courses** Hierarchy

Parent field: **lecturer**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#c9b022c4-2a45-4d89-9f38-681081e0b84b class="margin-NaN">[0]&nbsp;course</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3.8.3 **lecturer\_courses** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>lecturer_courses</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Khóa học phụ trách</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c9b022c4-2a45-4d89-9f38-681081e0b84b"></a>2.1.2.3.3.9 Field **\[0\] course**

##### 2.1.2.3.3.9.1 **\[0\] course** Tree Diagram

![Hackolade image](./Database/image74.png?raw=true)

##### 2.1.2.3.3.9.2 **\[0\] course** Hierarchy

Parent field: **lecturer\_courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#72b9a15e-d6b2-49c1-8e1e-1c60b7a6206c class="margin-NaN">course_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3.9.3 **\[0\] course** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td>course</td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="72b9a15e-d6b2-49c1-8e1e-1c60b7a6206c"></a>2.1.2.3.3.10 Field **course\_id**

##### 2.1.2.3.3.10.1 **course\_id** Tree Diagram

![Hackolade image](./Database/image75.png?raw=true)

##### 2.1.2.3.3.10.2 **course\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>course_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Foreign field</td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk lecturer.lecturer_courses.[0].course_id to courses._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.4 **lecturer** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "lecturer",
    "description": "Bảng thông tin giảng viên, giảng viên là một người dùng đặc biệt",
    "properties": {
        "User": {
            "type": "object",
            "properties": {
                "user_id": {
                    "type": "string",
                    "pattern": "^[a-fA-F0-9]{24}$"
                },
                "name": {
                    "type": "string"
                },
                "email": {
                    "type": "string",
                    "format": "email"
                },
                "gender": {
                    "type": "string"
                },
                "profile_pic": {
                    "type": "string",
                    "format": "uri"
                }
            },
            "additionalProperties": false
        },
        "bio": {
            "type": "string",
            "description": "Mô tả giảng viên"
        },
        "lecturer_courses": {
            "type": "array",
            "description": "Khóa học phụ trách",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "course_id": {
                        "type": "string",
                        "pattern": "^[a-fA-F0-9]{24}$"
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "additionalProperties": false
}
```

##### 2.1.2.3.5 **lecturer** JSON data

```
{
    "User": {
        "user_id": ObjectId("03db535c7cb9e58ae9866aa7"),
        "name": "Lorem",
        "email": "sample@email.com",
        "gender": "Lorem",
        "profile_pic": "./resource.txt#frag01"
    },
    "bio": "Siêu giáo viên, tác giả của hơn 300 framwork nổi tiếng của Javascript, C#, ..., 30 năm kinh nghiệp giảng dạy các trường đại học danh tiếng",
    "lecturer_courses": [
        {
            "course_id": ObjectId("6d4eebecdf55f9380b021eff")
        }
    ]
}
```

##### 2.1.2.3.6 **lecturer** Target Script

```
use BanKhoaHoc;

db.createCollection("lecturer", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "lecturer",
            "description": "Bảng thông tin giảng viên, giảng viên là một người dùng đặc biệt",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "User": {
                    "bsonType": "object",
                    "properties": {
                        "user_id": {
                            "bsonType": "objectId"
                        },
                        "name": {
                            "bsonType": "string"
                        },
                        "email": {
                            "bsonType": "string"
                        },
                        "gender": {
                            "bsonType": "string"
                        },
                        "profile_pic": {
                            "bsonType": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "bio": {
                    "bsonType": "string",
                    "description": "Mô tả giảng viên"
                },
                "lecturer_courses": {
                    "bsonType": "array",
                    "description": "Khóa học phụ trách",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "course_id": {
                                "bsonType": "objectId"
                            }
                        },
                        "additionalProperties": false
                    }
                }
            },
            "additionalProperties": false
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="5caea1b9-171f-48a0-9410-077677c63b7e"></a>2.1.2.4 Collection **users**

##### 2.1.2.4.1 **users** Tree Diagram

![Hackolade image](./Database/image76.png?raw=true)

##### 2.1.2.4.2 **users** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>users</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>$ref</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Bảng thông tin chi tiết gnười dùng</p></div></td></tr><tr><td>Database</td><td><a href=#56fa4821-fb8a-4925-b373-89733686924a><span class="name-container">BanKhoaHoc</span></a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Time series</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Encryption metadata</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3 **users** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c class="margin-0">_id</a></td><td class="no-break-word">objectId</td><td>true</td><td>pk, dk</td><td><div class="docs-markdown"><p>ID người dùng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b5e75e8b-48c7-41e0-9d14-3827822a3fac class="margin-0">username</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Tên người dùng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f3637504-476e-48ee-bd6f-d338ea072a35 class="margin-0">full&nbsp;name</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Họ tên đầy đủ</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ff66539b-fb70-4f66-8223-b79dba828350 class="margin-0">email</a></td><td class="no-break-word">email</td><td>false</td><td></td><td><div class="docs-markdown"><p>email</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9c74715c-dd97-4be2-852a-12463db3fe34 class="margin-0">password</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>mật khẩu đã được băm</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a1f657f0-a79d-4acc-90eb-14429e8bde45 class="margin-0">role</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Vai trò: học viên, giảng viên, admin</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#1ed64ca6-2ea9-43be-b0f6-42974a25281f class="margin-0">profile_pic</a></td><td class="no-break-word">uri</td><td>false</td><td></td><td><div class="docs-markdown"><p>URL hình đại diện</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c4508f3d-bc6f-4413-8c8e-c88d47e4b9f4 class="margin-0">gender</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Giới tính</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ee21f4f1-c36b-406b-8378-456e9b278760 class="margin-0">wishlist</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"><p>Giỏ hàng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#d77bc556-9a07-4dcd-a3f5-5f2cda3834e2 class="margin-5">[0]&nbsp;course</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#ea2e59d4-81ac-41f9-a051-bc67f48dd1c5 class="margin-10">course_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>ID khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#caa99901-95fa-4b1b-ba8e-b10c7d03f942 class="margin-0">owned_courses</a></td><td class="no-break-word">array</td><td>true</td><td></td><td><div class="docs-markdown"><p>Khóa học đã mua</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#be050d9d-85c0-46d0-8786-e2b0bec3117f class="margin-5">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5b3113c0-37b6-4567-b338-c625e98f9860 class="margin-10">course_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>ID khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#69946891-1d58-4955-a196-9595bd871305 class="margin-10">purchased_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>Ngày mua khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#9094c875-a394-4efa-92e8-ebcfd99e2e16 class="margin-0">billings_id</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"><p>ID thanh toán của người dùng</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#c22cf015-6e65-4e71-af60-9e66a41adbc6 class="margin-0">fb_id</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>ID đăng nhập facebook</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7bcf4a40-4914-41a4-9729-0c3e1fc47148 class="margin-0">fb_token</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>Token đăng nhập facebook</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#21737f9b-f405-4e07-b032-4619cf3e752e class="margin-0">google_id</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"><p>ID đăng nhập google</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4504dad5-839c-4a64-9f42-0b56bb41b0e2 class="margin-0">created_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>Được tạo vào ngày</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cd4eb72f-fab1-4ce2-a3ec-6c760d6c7cba class="margin-0">updated_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>Được cập nhật vào ngày</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6f9602ee-7272-44dd-8c1b-bbe20fb6255c"></a>2.1.2.4.3.1 Field **\_id**

##### 2.1.2.4.3.1.1 **\_id** Tree Diagram

![Hackolade image](./Database/image77.png?raw=true)

##### 2.1.2.4.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID người dùng</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b5e75e8b-48c7-41e0-9d14-3827822a3fac"></a>2.1.2.4.3.2 Field **username**

##### 2.1.2.4.3.2.1 **username** Tree Diagram

![Hackolade image](./Database/image78.png?raw=true)

##### 2.1.2.4.3.2.2 **username** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>username</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Tên người dùng</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f3637504-476e-48ee-bd6f-d338ea072a35"></a>2.1.2.4.3.3 Field **full name**

##### 2.1.2.4.3.3.1 **full name** Tree Diagram

![Hackolade image](./Database/image79.png?raw=true)

##### 2.1.2.4.3.3.2 **full name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>full name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Họ tên đầy đủ</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ff66539b-fb70-4f66-8223-b79dba828350"></a>2.1.2.4.3.4 Field **email**

##### 2.1.2.4.3.4.1 **email** Tree Diagram

![Hackolade image](./Database/image80.png?raw=true)

##### 2.1.2.4.3.4.2 **email** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>email</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>email</p></div></td></tr><tr><td>Format</td><td>email</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9c74715c-dd97-4be2-852a-12463db3fe34"></a>2.1.2.4.3.5 Field **password**

##### 2.1.2.4.3.5.1 **password** Tree Diagram

![Hackolade image](./Database/image81.png?raw=true)

##### 2.1.2.4.3.5.2 **password** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>password</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>mật khẩu đã được băm</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a1f657f0-a79d-4acc-90eb-14429e8bde45"></a>2.1.2.4.3.6 Field **role**

##### 2.1.2.4.3.6.1 **role** Tree Diagram

![Hackolade image](./Database/image82.png?raw=true)

##### 2.1.2.4.3.6.2 **role** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>role</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Vai trò: học viên, giảng viên, admin</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>học viên</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="1ed64ca6-2ea9-43be-b0f6-42974a25281f"></a>2.1.2.4.3.7 Field **profile\_pic**

##### 2.1.2.4.3.7.1 **profile\_pic** Tree Diagram

![Hackolade image](./Database/image83.png?raw=true)

##### 2.1.2.4.3.7.2 **profile\_pic** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>profile_pic</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>URL hình đại diện</p></div></td></tr><tr><td>Format</td><td>uri</td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c4508f3d-bc6f-4413-8c8e-c88d47e4b9f4"></a>2.1.2.4.3.8 Field **gender**

##### 2.1.2.4.3.8.1 **gender** Tree Diagram

![Hackolade image](./Database/image84.png?raw=true)

##### 2.1.2.4.3.8.2 **gender** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>gender</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Giới tính</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td>nam</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ee21f4f1-c36b-406b-8378-456e9b278760"></a>2.1.2.4.3.9 Field **wishlist**

##### 2.1.2.4.3.9.1 **wishlist** Tree Diagram

![Hackolade image](./Database/image85.png?raw=true)

##### 2.1.2.4.3.9.2 **wishlist** Hierarchy

Parent field: **users**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#d77bc556-9a07-4dcd-a3f5-5f2cda3834e2 class="margin-NaN">[0]&nbsp;course</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.9.3 **wishlist** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>wishlist</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Giỏ hàng</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="d77bc556-9a07-4dcd-a3f5-5f2cda3834e2"></a>2.1.2.4.3.10 Field **\[0\] course**

##### 2.1.2.4.3.10.1 **\[0\] course** Tree Diagram

![Hackolade image](./Database/image86.png?raw=true)

##### 2.1.2.4.3.10.2 **\[0\] course** Hierarchy

Parent field: **wishlist**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#ea2e59d4-81ac-41f9-a051-bc67f48dd1c5 class="margin-NaN">course_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"><p>ID khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.10.3 **\[0\] course** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td>course</td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="ea2e59d4-81ac-41f9-a051-bc67f48dd1c5"></a>2.1.2.4.3.11 Field **course\_id**

##### 2.1.2.4.3.11.1 **course\_id** Tree Diagram

![Hackolade image](./Database/image87.png?raw=true)

##### 2.1.2.4.3.11.2 **course\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>course_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Foreign field</td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users.wishlist.[0].course_id to courses._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="caa99901-95fa-4b1b-ba8e-b10c7d03f942"></a>2.1.2.4.3.12 Field **owned\_courses**

##### 2.1.2.4.3.12.1 **owned\_courses** Tree Diagram

![Hackolade image](./Database/image88.png?raw=true)

##### 2.1.2.4.3.12.2 **owned\_courses** Hierarchy

Parent field: **users**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#be050d9d-85c0-46d0-8786-e2b0bec3117f class="margin-NaN">[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.12.3 **owned\_courses** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>owned_courses</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Khóa học đã mua</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="be050d9d-85c0-46d0-8786-e2b0bec3117f"></a>2.1.2.4.3.13 Field **\[0\]**

##### 2.1.2.4.3.13.1 **\[0\]** Tree Diagram

![Hackolade image](./Database/image89.png?raw=true)

##### 2.1.2.4.3.13.2 **\[0\]** Hierarchy

Parent field: **owned\_courses**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#5b3113c0-37b6-4567-b338-c625e98f9860 class="margin-NaN">course_id</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"><p>ID khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#69946891-1d58-4955-a196-9595bd871305 class="margin-NaN">purchased_at</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"><p>Ngày mua khóa học</p></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.3.13.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td>false</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5b3113c0-37b6-4567-b338-c625e98f9860"></a>2.1.2.4.3.14 Field **course\_id**

##### 2.1.2.4.3.14.1 **course\_id** Tree Diagram

![Hackolade image](./Database/image90.png?raw=true)

##### 2.1.2.4.3.14.2 **course\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>course_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Foreign field</td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users.owned_courses.[0].course_id to courses._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="69946891-1d58-4955-a196-9595bd871305"></a>2.1.2.4.3.15 Field **purchased\_at**

##### 2.1.2.4.3.15.1 **purchased\_at** Tree Diagram

![Hackolade image](./Database/image91.png?raw=true)

##### 2.1.2.4.3.15.2 **purchased\_at** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>purchased_at</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Ngày mua khóa học</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="9094c875-a394-4efa-92e8-ebcfd99e2e16"></a>2.1.2.4.3.16 Field **billings\_id**

##### 2.1.2.4.3.16.1 **billings\_id** Tree Diagram

![Hackolade image](./Database/image92.png?raw=true)

##### 2.1.2.4.3.16.2 **billings\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>billings_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID thanh toán của người dùng</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#dd398e23-e65c-4d6f-b4a1-985e080b2b4b>billings</a></td></tr><tr><td>Foreign field</td><td><a href=#b85dd627-f4c6-4312-970c-3c75e62cc3ad>_id</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk users.billings_id to billings._id</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c22cf015-6e65-4e71-af60-9e66a41adbc6"></a>2.1.2.4.3.17 Field **fb\_id**

##### 2.1.2.4.3.17.1 **fb\_id** Tree Diagram

![Hackolade image](./Database/image93.png?raw=true)

##### 2.1.2.4.3.17.2 **fb\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fb_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID đăng nhập facebook</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7bcf4a40-4914-41a4-9729-0c3e1fc47148"></a>2.1.2.4.3.18 Field **fb\_token**

##### 2.1.2.4.3.18.1 **fb\_token** Tree Diagram

![Hackolade image](./Database/image94.png?raw=true)

##### 2.1.2.4.3.18.2 **fb\_token** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fb_token</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Token đăng nhập facebook</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="21737f9b-f405-4e07-b032-4619cf3e752e"></a>2.1.2.4.3.19 Field **google\_id**

##### 2.1.2.4.3.19.1 **google\_id** Tree Diagram

![Hackolade image](./Database/image95.png?raw=true)

##### 2.1.2.4.3.19.2 **google\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>google_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>ID đăng nhập google</p></div></td></tr><tr><td>Format</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4504dad5-839c-4a64-9f42-0b56bb41b0e2"></a>2.1.2.4.3.20 Field **created\_at**

##### 2.1.2.4.3.20.1 **created\_at** Tree Diagram

![Hackolade image](./Database/image96.png?raw=true)

##### 2.1.2.4.3.20.2 **created\_at** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>created_at</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Được tạo vào ngày</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cd4eb72f-fab1-4ce2-a3ec-6c760d6c7cba"></a>2.1.2.4.3.21 Field **updated\_at**

##### 2.1.2.4.3.21.1 **updated\_at** Tree Diagram

![Hackolade image](./Database/image97.png?raw=true)

##### 2.1.2.4.3.21.2 **updated\_at** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>updated_at</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Field-level encryption</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"><p>Được cập nhật vào ngày</p></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Faker function</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.4.4 **users** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "users",
    "description": "Bảng thông tin chi tiết gnười dùng",
    "properties": {
        "_id": {
            "type": "string",
            "description": "ID người dùng",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "username": {
            "type": "string",
            "description": "Tên người dùng"
        },
        "full name": {
            "type": "string",
            "description": "Họ tên đầy đủ"
        },
        "email": {
            "type": "string",
            "description": "email",
            "format": "email"
        },
        "password": {
            "type": "string",
            "description": "mật khẩu đã được băm"
        },
        "role": {
            "type": "string",
            "description": "Vai trò: học viên, giảng viên, admin"
        },
        "profile_pic": {
            "type": "string",
            "description": "URL hình đại diện",
            "format": "uri"
        },
        "gender": {
            "type": "string",
            "description": "Giới tính"
        },
        "wishlist": {
            "type": "array",
            "description": "Giỏ hàng",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "course_id": {
                        "type": "string",
                        "description": "ID khóa học",
                        "pattern": "^[a-fA-F0-9]{24}$"
                    }
                },
                "additionalProperties": false
            }
        },
        "owned_courses": {
            "type": "array",
            "description": "Khóa học đã mua",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "course_id": {
                        "type": "string",
                        "description": "ID khóa học",
                        "pattern": "^[a-fA-F0-9]{24}$"
                    },
                    "purchased_at": {
                        "type": "string",
                        "description": "Ngày mua khóa học",
                        "format": "date-time"
                    }
                },
                "additionalProperties": false
            }
        },
        "billings_id": {
            "type": "string",
            "description": "ID thanh toán của người dùng",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "fb_id": {
            "type": "string",
            "description": "ID đăng nhập facebook"
        },
        "fb_token": {
            "type": "string",
            "description": "Token đăng nhập facebook"
        },
        "google_id": {
            "type": "string",
            "description": "ID đăng nhập google"
        },
        "created_at": {
            "type": "string",
            "description": "Được tạo vào ngày",
            "format": "date-time"
        },
        "updated_at": {
            "type": "string",
            "description": "Được cập nhật vào ngày",
            "format": "date-time"
        }
    },
    "additionalProperties": false,
    "required": [
        "_id",
        "owned_courses"
    ]
}
```

##### 2.1.2.4.5 **users** JSON data

```
{
    "_id": ObjectId("5cfafeeb0f2fbf4d9eef9a6c"),
    "username": "Lorem",
    "full name": "Lorem",
    "email": "sample@email.com",
    "password": "Lorem",
    "role": "học viên",
    "profile_pic": "./resource.txt#frag01",
    "gender": "nam",
    "wishlist": [
        {
            "course_id": ObjectId("6cdfffbafb4f69b42003a6a1")
        }
    ],
    "owned_courses": [
        {
            "course_id": ObjectId("aa7cd6affafb8672ac3a2660"),
            "purchased_at": ISODate("2016-04-08T15:06:21.595Z")
        }
    ],
    "billings_id": ObjectId("da5c280a9a5ce8dd63c2fbb0"),
    "fb_id": "Lorem",
    "fb_token": "Lorem",
    "google_id": "Lorem",
    "created_at": ISODate("2016-04-08T15:06:21.595Z"),
    "updated_at": ISODate("2016-04-08T15:06:21.595Z")
}
```

##### 2.1.2.4.6 **users** Target Script

```
use BanKhoaHoc;

db.createCollection("users", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "users",
            "description": "Bảng thông tin chi tiết gnười dùng",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "description": "ID người dùng"
                },
                "username": {
                    "bsonType": "string",
                    "description": "Tên người dùng"
                },
                "full name": {
                    "bsonType": "string",
                    "description": "Họ tên đầy đủ"
                },
                "email": {
                    "bsonType": "string",
                    "description": "email"
                },
                "password": {
                    "bsonType": "string",
                    "description": "mật khẩu đã được băm"
                },
                "role": {
                    "bsonType": "string",
                    "description": "Vai trò: học viên, giảng viên, admin"
                },
                "profile_pic": {
                    "bsonType": "string",
                    "description": "URL hình đại diện"
                },
                "gender": {
                    "bsonType": "string",
                    "description": "Giới tính"
                },
                "wishlist": {
                    "bsonType": "array",
                    "description": "Giỏ hàng",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "course_id": {
                                "bsonType": "objectId",
                                "description": "ID khóa học"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "owned_courses": {
                    "bsonType": "array",
                    "description": "Khóa học đã mua",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "course_id": {
                                "bsonType": "objectId",
                                "description": "ID khóa học"
                            },
                            "purchased_at": {
                                "bsonType": "date",
                                "description": "Ngày mua khóa học"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "billings_id": {
                    "bsonType": "objectId",
                    "description": "ID thanh toán của người dùng"
                },
                "fb_id": {
                    "bsonType": "string",
                    "description": "ID đăng nhập facebook"
                },
                "fb_token": {
                    "bsonType": "string",
                    "description": "Token đăng nhập facebook"
                },
                "google_id": {
                    "bsonType": "string",
                    "description": "ID đăng nhập google"
                },
                "created_at": {
                    "bsonType": "date",
                    "description": "Được tạo vào ngày"
                },
                "updated_at": {
                    "bsonType": "date",
                    "description": "Được cập nhật vào ngày"
                }
            },
            "additionalProperties": false,
            "required": [
                "_id",
                "owned_courses"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="relationships"></a>

##### 3\. Relationships

### <a id="fa072c5a-c321-49f8-8ce9-11e25c07206e"></a>3.1 Relationship **fk billings.orders.\[0\].items.\[0\].course\_id to courses.\_id**

##### 3.1.1 **fk billings.orders.\[0\].items.\[0\].course\_id to courses.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image98.png?raw=true)![Hackolade image](./Database/image99.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#dd398e23-e65c-4d6f-b4a1-985e080b2b4b>billings</a></td><td><a href=#386052d2-ec30-4e18-985a-603c7487a282>orders.[-1].items.[-1].course_id</a></td></tr></tbody></table>

##### 3.1.2 **fk billings.orders.\[0\].items.\[0\].course\_id to courses.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk billings.orders.[0].items.[0].course_id to courses._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Parent field</td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#dd398e23-e65c-4d6f-b4a1-985e080b2b4b>billings</a></td></tr><tr><td>Child field</td><td><a href=#386052d2-ec30-4e18-985a-603c7487a282>course_id</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="00eeb596-86e2-497d-a673-4c67d0dd1d52"></a>3.2 Relationship **fk billings.user\_id to users.\_id**

##### 3.2.1 **fk billings.user\_id to users.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image100.png?raw=true)![Hackolade image](./Database/image101.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#dd398e23-e65c-4d6f-b4a1-985e080b2b4b>billings</a></td><td><a href=#86d31629-427a-41ef-9c83-4338dd46f10e>user_id</a></td></tr></tbody></table>

##### 3.2.2 **fk billings.user\_id to users.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk billings.user_id to users._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Parent field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#dd398e23-e65c-4d6f-b4a1-985e080b2b4b>billings</a></td></tr><tr><td>Child field</td><td><a href=#86d31629-427a-41ef-9c83-4338dd46f10e>user_id</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="51211563-d260-4743-9dae-e4c9f5c3719c"></a>3.3 Relationship **fk courses.course\_review.\[0\].user\_id to users.\_id**

##### 3.3.1 **fk courses.course\_review.\[0\].user\_id to users.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image102.png?raw=true)![Hackolade image](./Database/image103.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td><td><a href=#a9d37e6c-9455-4669-9c7a-27cdc0e867e3>course_review.[-1].[-1]</a></td></tr></tbody></table>

##### 3.3.2 **fk courses.course\_review.\[0\].user\_id to users.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk courses.course_review.[0].user_id to users._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Parent field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Child field</td><td><a href=#a9d37e6c-9455-4669-9c7a-27cdc0e867e3></a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="08548243-1b42-47f2-b095-172e566bf03e"></a>3.4 Relationship **fk courses.instructors.\[0\].User.user\_id to users.\_id**

##### 3.4.1 **fk courses.instructors.\[0\].User.user\_id to users.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image104.png?raw=true)![Hackolade image](./Database/image105.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td><td><a href=#c2b86c74-5fbc-4750-943a-ab9319ffc328>instructors.[-1].User.user_id</a></td></tr></tbody></table>

##### 3.4.2 **fk courses.instructors.\[0\].User.user\_id to users.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk courses.instructors.[0].User.user_id to users._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Parent field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Child field</td><td><a href=#c2b86c74-5fbc-4750-943a-ab9319ffc328>user_id</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="2533f787-3102-4221-b095-59a9619e617e"></a>3.5 Relationship **fk courses.instructors.\[0\].bio to lecturer.bio**

##### 3.5.1 **fk courses.instructors.\[0\].bio to lecturer.bio** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#7763d428-db9e-4464-ae2f-19edd261c592>lecturer</a></td><td><a href=#e91fa04c-ca90-42c8-aa64-0cb5235c16f0>bio</a></td></tr></tbody></table>

![Hackolade image](./Database/image106.png?raw=true)![Hackolade image](./Database/image107.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td><td><a href=#4ea5071e-544d-49aa-9415-c52eb2b38901>instructors.[-1].bio</a></td></tr></tbody></table>

##### 3.5.2 **fk courses.instructors.\[0\].bio to lecturer.bio** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk courses.instructors.[0].bio to lecturer.bio</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#7763d428-db9e-4464-ae2f-19edd261c592>lecturer</a></td></tr><tr><td>Parent field</td><td><a href=#e91fa04c-ca90-42c8-aa64-0cb5235c16f0>bio</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Child field</td><td><a href=#4ea5071e-544d-49aa-9415-c52eb2b38901>bio</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="1fa088c1-d98e-4288-bb16-d35df76f8baf"></a>3.6 Relationship **fk courses.students.\[0\].user\_id to users.\_id**

##### 3.6.1 **fk courses.students.\[0\].user\_id to users.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image108.png?raw=true)![Hackolade image](./Database/image109.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td><td><a href=#d1ce568b-196c-4688-b768-656232a9c33a>students.[-1].user_id</a></td></tr></tbody></table>

##### 3.6.2 **fk courses.students.\[0\].user\_id to users.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk courses.students.[0].user_id to users._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Parent field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Child field</td><td><a href=#d1ce568b-196c-4688-b768-656232a9c33a>user_id</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="9c4de11c-3531-4e67-8395-d732fd56d371"></a>3.7 Relationship **fk lecturer.User.user\_id to users.\_id**

##### 3.7.1 **fk lecturer.User.user\_id to users.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image110.png?raw=true)![Hackolade image](./Database/image111.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#7763d428-db9e-4464-ae2f-19edd261c592>lecturer</a></td><td><a href=#be59b29d-b720-4080-9962-6444a170aae5>User.user_id</a></td></tr></tbody></table>

##### 3.7.2 **fk lecturer.User.user\_id to users.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk lecturer.User.user_id to users._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Parent field</td><td><a href=#6f9602ee-7272-44dd-8c1b-bbe20fb6255c>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#7763d428-db9e-4464-ae2f-19edd261c592>lecturer</a></td></tr><tr><td>Child field</td><td><a href=#be59b29d-b720-4080-9962-6444a170aae5>user_id</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="322752c6-7dbd-4cc6-b431-2a796727e906"></a>3.8 Relationship **fk lecturer.lecturer\_courses.\[0\].course\_id to courses.\_id**

##### 3.8.1 **fk lecturer.lecturer\_courses.\[0\].course\_id to courses.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image112.png?raw=true)![Hackolade image](./Database/image113.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#7763d428-db9e-4464-ae2f-19edd261c592>lecturer</a></td><td><a href=#72b9a15e-d6b2-49c1-8e1e-1c60b7a6206c>lecturer_courses.[-1].course_id</a></td></tr></tbody></table>

##### 3.8.2 **fk lecturer.lecturer\_courses.\[0\].course\_id to courses.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk lecturer.lecturer_courses.[0].course_id to courses._id</td></tr><tr><td>Description</td><td>ID khóa học</td></tr><tr><td>Parent Collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Parent field</td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#7763d428-db9e-4464-ae2f-19edd261c592>lecturer</a></td></tr><tr><td>Child field</td><td><a href=#72b9a15e-d6b2-49c1-8e1e-1c60b7a6206c>course_id</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="5a22d3a9-a07a-4408-bb82-cbebe362d9f0"></a>3.9 Relationship **fk users.billings\_id to billings.\_id**

##### 3.9.1 **fk users.billings\_id to billings.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#dd398e23-e65c-4d6f-b4a1-985e080b2b4b>billings</a></td><td><a href=#b85dd627-f4c6-4312-970c-3c75e62cc3ad>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image114.png?raw=true)![Hackolade image](./Database/image115.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td><td><a href=#9094c875-a394-4efa-92e8-ebcfd99e2e16>billings_id</a></td></tr></tbody></table>

##### 3.9.2 **fk users.billings\_id to billings.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users.billings_id to billings._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#dd398e23-e65c-4d6f-b4a1-985e080b2b4b>billings</a></td></tr><tr><td>Parent field</td><td><a href=#b85dd627-f4c6-4312-970c-3c75e62cc3ad>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Child field</td><td><a href=#9094c875-a394-4efa-92e8-ebcfd99e2e16>billings_id</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="dd62e73f-6ef7-45b8-8940-baea4332cb83"></a>3.10 Relationship **fk users.owned\_courses.\[0\].course\_id to courses.\_id**

##### 3.10.1 **fk users.owned\_courses.\[0\].course\_id to courses.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image116.png?raw=true)![Hackolade image](./Database/image117.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td><td><a href=#5b3113c0-37b6-4567-b338-c625e98f9860>owned_courses.[-1].course_id</a></td></tr></tbody></table>

##### 3.10.2 **fk users.owned\_courses.\[0\].course\_id to courses.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users.owned_courses.[0].course_id to courses._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Parent field</td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Child field</td><td><a href=#5b3113c0-37b6-4567-b338-c625e98f9860>course_id</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="6b0bd35e-3dea-45b3-95fd-f1471eba130e"></a>3.11 Relationship **fk users.wishlist.\[0\].course\_id to courses.\_id**

##### 3.11.1 **fk users.wishlist.\[0\].course\_id to courses.\_id** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr></tbody></table>

![Hackolade image](./Database/image118.png?raw=true)![Hackolade image](./Database/image119.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td><td><a href=#ea2e59d4-81ac-41f9-a051-bc67f48dd1c5>wishlist.[-1].[-1]</a></td></tr></tbody></table>

##### 3.11.2 **fk users.wishlist.\[0\].course\_id to courses.\_id** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk users.wishlist.[0].course_id to courses._id</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#34fb3d70-57d0-4028-b679-efc879f2836e>courses</a></td></tr><tr><td>Parent field</td><td><a href=#4c2b9f63-a48c-482b-973f-6f8877d75b58>_id</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#5caea1b9-171f-48a0-9410-077677c63b7e>users</a></td></tr><tr><td>Child field</td><td><a href=#ea2e59d4-81ac-41f9-a051-bc67f48dd1c5></a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="edges"></a>
