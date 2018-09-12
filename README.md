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
|group_id|integer|null: false|
|group_name|varchar|null: false|
|user_id|integer|null: false, foreign_key: true|
|text_id|integer|null: false, foreign_key: true|

### Association
- has_many :users, through: :members
  has_many :groups,through: :members
- belongs_to :group
  has_many :messages

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|text_id|integer|null: false|
|text|text| foreign_key: false｜
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
|user_id|integer|null: false|
|name|varchar|null: false|
|address|varchar| unique: false|
|password|integer| unique: false|
|text_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
  has_many :users, through: :members
  has_many :groups,through: :members
- belongs_to :user
  has_many :messages

