---
id: "DBM.Actions"
title: "Namespace: Actions"
sidebar_label: "Actions"
custom_edit_url: null
---

[DBM](DBM.md).Actions

## Classes

- [ActionsCache](../classes/DBM.Actions.ActionsCache.md)

## Variables

### \_letterEmojis

• `Const` **\_letterEmojis**: `string`[]

___

### actionsLocation

• `Const` **actionsLocation**: `any` = `null`

___

### eventsLocation

• `Const` **eventsLocation**: `any` = `null`

___

### extensionsLocation

• `Const` **extensionsLocation**: `any` = `null`

___

### global

• `Const` **global**: `Object` = `{}`

___

### server

• `Const` **server**: `Object` = `{}`

___

### timeStamps

• `Const` **timeStamps**: `any`[] = `[]`

## Functions

### addButtonToActionRowArray

▸ **addButtonToActionRowArray**(`array`, `rowText`, `buttonData`, `cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any` |
| `rowText` | `any` |
| `buttonData` | `any` |
| `cache` | `any` |

#### Returns

`void`

___

### addSelectToActionRowArray

▸ **addSelectToActionRowArray**(`array`, `rowText`, `selectData`, `cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any` |
| `rowText` | `any` |
| `selectData` | `any` |
| `cache` | `any` |

#### Returns

`void`

___

### addTextInputToActionRowArray

▸ **addTextInputToActionRowArray**(`array`, `rowText`, `textInput`, `cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any` |
| `rowText` | `any` |
| `textInput` | `any` |
| `cache` | `any` |

#### Returns

`void`

___

### callListFunc

▸ **callListFunc**(`list`, `funcName`, `args`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `any` |
| `funcName` | `any` |
| `args` | `any` |

#### Returns

`Promise`<`unknown`\>

___

### callNextAction

▸ **callNextAction**(`cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cache` | `any` |

#### Returns

`void`

___

### checkConditions

▸ **checkConditions**(`guild`, `member`, `user`, `cmd`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `any` |
| `member` | `any` |
| `user` | `any` |
| `cmd` | `any` |

#### Returns

`any`

___

### checkModalSubmitResponses

▸ **checkModalSubmitResponses**(`interaction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`void`

___

### checkPermissions

▸ **checkPermissions**(`member`, `permissions`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `member` | `any` |
| `permissions` | `any` |

#### Returns

`any`

___

### checkTemporaryInteractionResponses

▸ **checkTemporaryInteractionResponses**(`interaction`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |

#### Returns

`boolean`

___

### checkTimeRestriction

▸ **checkTimeRestriction**(`user`, `msgOrInteraction`, `cmd`, `returnTimeString?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `user` | `any` | `undefined` |
| `msgOrInteraction` | `any` | `undefined` |
| `cmd` | `any` | `undefined` |
| `returnTimeString` | `boolean` | `false` |

#### Returns

`any`

___

### clearAllTemporaryInteractions

▸ **clearAllTemporaryInteractions**(`messageId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `any` |

#### Returns

`void`

___

### clearTemporaryInteraction

▸ **clearTemporaryInteraction**(`messageId`, `customId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `any` |
| `customId` | `any` |

#### Returns

`void`

___

### convertTextToEmojis

▸ **convertTextToEmojis**(`text`, `useRegional?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `any` | `undefined` |
| `useRegional` | `boolean` | `true` |

#### Returns

`string`

___

### displayError

▸ **displayError**(`data`, `cache`, `err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `cache` | `any` |
| `err` | `any` |

#### Returns

`void`

___

### endActions

▸ **endActions**(`cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cache` | `any` |

#### Returns

`void`

___

### eval

▸ **eval**(`content`, `cache`, `logError?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `content` | `any` | `undefined` |
| `cache` | `any` | `undefined` |
| `logError` | `boolean` | `true` |

#### Returns

`any`

___

### evalIfPossible

▸ **evalIfPossible**(`content`, `cache`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `cache` | `any` |

#### Returns

`any`

___

### evalMessage

▸ **evalMessage**(`content`, `cache`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `cache` | `any` |

#### Returns

`any`

___

### executeResults

▸ **executeResults**(`result`, `data`, `cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |
| `data` | `any` |
| `cache` | `any` |

#### Returns

`void`

___

### executeSubActions

▸ **executeSubActions**(`actions`, `cache`, `callback?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actions` | `any` | `undefined` |
| `cache` | `any` | `undefined` |
| `callback` | `any` | `null` |

#### Returns

`boolean`

___

### executeSubActionsThenNextAction

▸ **executeSubActionsThenNextAction**(`actions`, `cache`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `any` |
| `cache` | `any` |

#### Returns

`any`

___

### exists

▸ **exists**(`action`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `any` |

#### Returns

`boolean`

___

### findMemberOrUserFromID

▸ **findMemberOrUserFromID**(`id`, `server`): `Promise`<`User`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |
| `server` | `any` |

#### Returns

`Promise`<`User`\>

___

### findMemberOrUserFromName

▸ **findMemberOrUserFromName**(`name`, `server`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `server` | `any` |

#### Returns

`Promise`<`any`\>

___

### generateButton

▸ **generateButton**(`button`, `cache`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `button` | `any` |
| `cache` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `label` | `any` |
| `style` | `any` |
| `type` | `string` |

___

### generateSelectMenu

▸ **generateSelectMenu**(`select`, `cache`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `select` | `any` |
| `cache` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `customId` | `any` |
| `maxValues` | `number` |
| `minValues` | `number` |
| `options` | `any` |
| `placeholder` | `any` |
| `type` | `string` |

___

### generateSubCache

▸ **generateSubCache**(`cache`, `actions`): [`ActionsCache`](../classes/DBM.Actions.ActionsCache.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cache` | `any` |
| `actions` | `any` |

#### Returns

[`ActionsCache`](../classes/DBM.Actions.ActionsCache.md)

___

### generateTextInput

▸ **generateTextInput**(`textInput`, `defaultCustomId`, `cache`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `textInput` | `any` |
| `defaultCustomId` | `any` |
| `cache` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `customId` | `any` |
| `label` | `any` |
| `maxLength` | `number` |
| `minLength` | `number` |
| `placeholder` | `any` |
| `required` | `boolean` |
| `style` | `any` |
| `type` | `string` |

___

### generateTimeString

▸ **generateTimeString**(`milliseconds`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `milliseconds` | `any` |

#### Returns

`string`

___

### getActionVariable

▸ **getActionVariable**(`name`, `defaultValue`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `defaultValue` | `any` |

#### Returns

`any`

___

### getAnyChannel

▸ **getAnyChannel**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getChannel

▸ **getChannel**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getChannelFromData

▸ **getChannelFromData**(`typeData`, `varNameData`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `any` |
| `varNameData` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getCustomEmoji

▸ **getCustomEmoji**(`nameOrId`): `GuildEmoji`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrId` | `any` |

#### Returns

`GuildEmoji`

___

### getDBM

▸ **getDBM**(): typeof [`DBM`](DBM.md)

#### Returns

typeof [`DBM`](DBM.md)

___

### getDefaultResponseText

▸ **getDefaultResponseText**(): `any`

#### Returns

`any`

___

### getErrorString

▸ **getErrorString**(`data`, `cache`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `cache` | `any` |

#### Returns

`string`

___

### getFlagEmoji

▸ **getFlagEmoji**(`flagName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flagName` | `any` |

#### Returns

`any`

___

### getInvalidButtonResponseText

▸ **getInvalidButtonResponseText**(): `any`

#### Returns

`any`

___

### getInvalidCooldownResponse

▸ **getInvalidCooldownResponse**(): `any`

#### Returns

`any`

___

### getInvalidPermissionsResponse

▸ **getInvalidPermissionsResponse**(): `any`

#### Returns

`any`

___

### getInvalidSelectResponseText

▸ **getInvalidSelectResponseText**(): `any`

#### Returns

`any`

___

### getInvalidUserResponse

▸ **getInvalidUserResponse**(): `any`

#### Returns

`any`

___

### getList

▸ **getList**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getListFromData

▸ **getListFromData**(`typeData`, `varNameData`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `any` |
| `varNameData` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getLocalFile

▸ **getLocalFile**(`url`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |

#### Returns

`any`

___

### getMember

▸ **getMember**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getMemberFromData

▸ **getMemberFromData**(`typeData`, `varNameData`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `any` |
| `varNameData` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getMessage

▸ **getMessage**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getMessageFromData

▸ **getMessageFromData**(`typeData`, `varNameData`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `any` |
| `varNameData` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getParameterFromInteraction

▸ **getParameterFromInteraction**(`interaction`, `name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |
| `name` | `any` |

#### Returns

`any`

___

### getParameterFromParameterData

▸ **getParameterFromParameterData**(`option`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `any` |

#### Returns

`any`

___

### getRole

▸ **getRole**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getRoleFromData

▸ **getRoleFromData**(`typeData`, `varNameData`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `any` |
| `varNameData` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getSendReplyTarget

▸ **getSendReplyTarget**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getSendTarget

▸ **getSendTarget**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getSendTargetFromData

▸ **getSendTargetFromData**(`typeData`, `varNameData`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `any` |
| `varNameData` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getServer

▸ **getServer**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getServerFromData

▸ **getServerFromData**(`typeData`, `varNameData`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `any` |
| `varNameData` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getSlashParameter

▸ **getSlashParameter**(`interaction`, `name`, `defaultValue`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `any` |
| `name` | `any` |
| `defaultValue` | `any` |

#### Returns

`any`

___

### getTargetFromVariableOrParameter

▸ **getTargetFromVariableOrParameter**(`varType`, `varName`, `cache`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `varType` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`any`

___

### getVariable

▸ **getVariable**(`type`, `varName`, `cache`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`any`

___

### getVoiceChannel

▸ **getVoiceChannel**(`type`, `varName`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### getVoiceChannelFromData

▸ **getVoiceChannelFromData**(`typeData`, `varNameData`, `cache`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeData` | `any` |
| `varNameData` | `any` |
| `cache` | `any` |

#### Returns

`Promise`<`any`\>

___

### initMods

▸ **initMods**(): `void`

#### Returns

`void`

___

### invokeActions

▸ **invokeActions**(`msg`, `actions`, `cmd?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `any` | `undefined` |
| `actions` | `any` | `undefined` |
| `cmd` | `any` | `null` |

#### Returns

`void`

___

### invokeEvent

▸ **invokeEvent**(`event`, `server`, `temp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |
| `server` | `any` |
| `temp` | `any` |

#### Returns

`void`

___

### invokeInteraction

▸ **invokeInteraction**(`interaction`, `actions`, `initialTempVars`, `meta?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `interaction` | `any` | `undefined` |
| `actions` | `any` | `undefined` |
| `initialTempVars` | `any` | `undefined` |
| `meta` | `any` | `null` |

#### Returns

`void`

___

### modDirectories

▸ **modDirectories**(): `any`[]

#### Returns

`any`[]

___

### preformActionsFromInteraction

▸ **preformActionsFromInteraction**(`interaction`, `cmd`, `meta?`, `initialTempVars?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `interaction` | `any` | `undefined` |
| `cmd` | `any` | `undefined` |
| `meta` | `any` | `null` |
| `initialTempVars` | `any` | `null` |

#### Returns

`void`

___

### preformActionsFromMessage

▸ **preformActionsFromMessage**(`msg`, `cmd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `cmd` | `any` |

#### Returns

`void`

___

### preformActionsFromSelectInteraction

▸ **preformActionsFromSelectInteraction**(`interaction`, `select`, `meta?`, `initialTempVars?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `interaction` | `any` | `undefined` |
| `select` | `any` | `undefined` |
| `meta` | `any` | `null` |
| `initialTempVars` | `any` | `null` |

#### Returns

`void`

___

### registerModalSubmitResponses

▸ **registerModalSubmitResponses**(`interactionId`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionId` | `any` |
| `callback` | `any` |

#### Returns

`void`

___

### registerTemporaryInteraction

▸ **registerTemporaryInteraction**(`messageId`, `time`, `customId`, `userId`, `multi`, `interactionCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `any` |
| `time` | `any` |
| `customId` | `any` |
| `userId` | `any` |
| `multi` | `any` |
| `interactionCallback` | `any` |

#### Returns

`void`

___

### removeTemporaryInteraction

▸ **removeTemporaryInteraction**(`messageId`, `uniqueOrCustomId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `any` |
| `uniqueOrCustomId` | `any` |

#### Returns

`void`

___

### storeValue

▸ **storeValue**(`value`, `type`, `varName`, `cache`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | `any` |
| `varName` | `any` |
| `cache` | `any` |

#### Returns

`void`
