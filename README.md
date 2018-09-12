# README

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|group_name|varchar|null: false|
|text_id|integer|null: false, foreign_key: true|

### Association
- has_many :users, through: :members
  has_many :groups,through: :members
- belongs_to :group
  has_many :messages

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|text|text| foreign_key: false|
|text_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
  has_many :messages
  belongs_to :group
  has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|varchar|null: false, foreign_key: false|
|address|varchar| foreign_key: true, unique: false|
|password|integer| foreign_key: true, unique: false|
|user_id|integer|null: false, foreign_key: true|
|text_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
  has_many :users, through: :members
  has_many :groups,through: :members
- belongs_to :user
  has_many :messages

