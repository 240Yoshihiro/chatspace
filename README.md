# README

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false , unique: true|
|name|string|null: false , add_index|

### Association
  has_many :users, through: :groups_users
  has_many :groups_users
  has_many :messages




## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false , unique: true|
|user_id|integer|null: false, references :user, foreign_key: true|
|group_id|integer|null: false, references :group , foreign_key: true|

### Association
  belongs_to :group
  belongs_to :user




## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false , unique: true|
|name|string|null: false , add_index|
|email|string|null: false , unique: true , add_index|
|password|string|null: false|

### Association
  has_many :groups,through: :groups_users
  has_manuy :groups_users
  has_many :messages



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false ,unique: true|
|text|text| null: false｜
|image|string||
|user_id|integer|null: false, references :user, foreign_key: true|
|group_id|integer|null: false, references :group , foreign_key: true|

### Association
  belongs_to :user
  belongs_to :group
