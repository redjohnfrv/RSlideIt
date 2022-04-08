export const storeName = 'picStore'
export const DBName = 'pictures'

export const idbConfig = {
  databaseName: storeName,
  version: 1,
  stores: [
    {
      name: DBName,
      id: {keyPath: 'id', autoIncrement: true},
      indices: [
        {name: 'id', keyPath: 'id'},
        {name: 'pic', keyPath: 'pic'},
      ],
    },
  ],
}
