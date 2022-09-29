---
id: "DBM.Files"
title: "Namespace: Files"
sidebar_label: "Files"
custom_edit_url: null
---

[DBM](DBM.md).Files

## Variables

### crypto

• `Const` **crypto**: `any`

___

### data

• `Const` **data**: `Object` = `{}`

___

### dataFiles

• `Const` **dataFiles**: `string`[]

___

### writers

• `Const` **writers**: `Object` = `{}`

## Functions

### convertItem

▸ **convertItem**(`item`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

#### Returns

`any`

___

### decrypt

▸ **decrypt**(`text`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |

#### Returns

`any`

___

### encrypt

▸ **encrypt**(`text`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |

#### Returns

`any`

___

### initEncryption

▸ **initEncryption**(): `void`

#### Returns

`void`

___

### readData

▸ **readData**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`void`

___

### restoreEmoji

▸ **restoreEmoji**(`value`, `bot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`any`

___

### restoreGlobalVariables

▸ **restoreGlobalVariables**(): `void`

#### Returns

`void`

___

### restoreMember

▸ **restoreMember**(`value`, `bot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`any`

___

### restoreMessage

▸ **restoreMessage**(`value`, `bot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`any`

___

### restoreRole

▸ **restoreRole**(`value`, `bot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`any`

___

### restoreServer

▸ **restoreServer**(`value`, `bot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`any`

___

### restoreServerVariables

▸ **restoreServerVariables**(): `void`

#### Returns

`void`

___

### restoreTextChannel

▸ **restoreTextChannel**(`value`, `bot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`any`

___

### restoreUser

▸ **restoreUser**(`value`, `bot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`any`

___

### restoreValue

▸ **restoreValue**(`value`, `bot`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`Promise`<`unknown`\>

___

### restoreVariable

▸ **restoreVariable**(`value`, `type`, `varName`, `serverId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | `any` |
| `varName` | `any` |
| `serverId` | `any` |

#### Returns

`void`

___

### restoreVoiceChannel

▸ **restoreVoiceChannel**(`value`, `bot`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `bot` | `any` |

#### Returns

`any`

___

### saveData

▸ **saveData**(`file`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `any` |
| `callback` | `any` |

#### Returns

`void`

___

### saveGlobalVariable

▸ **saveGlobalVariable**(`varName`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `varName` | `any` |
| `item` | `any` |

#### Returns

`void`

___

### saveServerVariable

▸ **saveServerVariable**(`serverId`, `varName`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverId` | `any` |
| `varName` | `any` |
| `item` | `any` |

#### Returns

`void`

___

### startBot

▸ **startBot**(): `void`

#### Returns

`void`

___

### verifyDirectory

▸ **verifyDirectory**(`dir`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `any` |

#### Returns

`any`
