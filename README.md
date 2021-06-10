# storage
Typescript support a storage lib which sessionStorage and localStorage with the same api and extend api

## 🦄 Usage
```javascript
import storage from '@caoyugang/better-storage'

 storage.setItem('sessionStorage', key, value) 
 
 storage.getItem('localStorage', key)
 
in vue3
setup () {
    const key = 'store'
    const onStore = () => {
      storage.setItem('sessionStorage', key, '123')
    }
    const onRemove = () => {
      storage.removeItem('localStorage', key)
    }
    return {
      onStore,
      onRemove
    }
  }
```

## 📦 Install

```bash
npm i better-storage

or

yarn add better-storage
```

## 🎁 api

```typescript
type = 'sessionStorage' | 'localStorage'

getItem(type, key)
get storage with key, return value or undefined

setItem(type, key, value)
set storage with key and val

hasItem(type, key)
determine storage has the key

removeItem(type, key)
remove storage with key

clear(type)
clear all storages

getStorageLength(type)
get storage length

getStorageKey(type, index)
get storage key by index

getStorageKeyValue(type)
get all the storages about key and value
```
## 📄 License

[MIT License](https://github.com/Talljack/storage/blob/main/LICENSE) © 2021-PRESENT [caoyugang_1](https://github.com/Talljack)