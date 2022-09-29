---
id: "modules"
title: "DBM bot.js - v2.1.6"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [DBM](namespaces/DBM.md)

## Variables

### MsgType

• `Const` **MsgType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CANNOT_FIND_USER_BY_ID` | `number` |
| `CHANNEL_PARTIAL_REQUIRED` | `number` |
| `DATA_PARSING_ERROR` | `number` |
| `DUPLICATE_BUTTON_ID` | `number` |
| `DUPLICATE_MESSAGE_COMMAND` | `number` |
| `DUPLICATE_SELECT_ID` | `number` |
| `DUPLICATE_SLASH_COMMAND` | `number` |
| `DUPLICATE_SLASH_PARAMETER` | `number` |
| `DUPLICATE_USER_COMMAND` | `number` |
| `ERROR_CREATING_AUDIO` | `number` |
| `ERROR_GETTING_YT_INFO` | `number` |
| `INVALID_SLASH_COMMAND_SERVER_ID` | `number` |
| `INVALID_SLASH_NAME` | `number` |
| `INVALID_SLASH_PARAMETER_NAME` | `number` |
| `MISSING_ACTION` | `number` |
| `MISSING_ACTIONS` | `number` |
| `MISSING_APPLICATION_COMMAND_ACCESS` | `number` |
| `MISSING_MEMBER_INTENT_FIND_USER_ID` | `number` |
| `MISSING_MUSIC_MODULES` | `number` |
| `MUTABLE_VOLUME_DISABLED` | `number` |
| `MUTABLE_VOLUME_NOT_IN_CHANNEL` | `number` |
| `SERVER_MESSAGE_INTENT_REQUIRED` | `number` |
| `SUB_COMMAND_ALREADY_EXISTS` | `number` |
| `SUB_COMMAND_GROUP_ALREADY_EXISTS` | `number` |
| `TOO_MANY_SPACES_SLASH_NAME` | `number` |

___

### requiredDjsVersion

• `Const` **requiredDjsVersion**: ``"13.7.0"``

## Functions

### GetActionErrorText

▸ **GetActionErrorText**(`location`, `index`, `dataName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `any` |
| `index` | `any` |
| `dataName` | `any` |

#### Returns

`string`

___

### PrintError

▸ **PrintError**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |

#### Returns

`void`

___

### noop

▸ **noop**(): `any`

#### Returns

`any`
