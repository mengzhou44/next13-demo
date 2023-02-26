migrate((db) => {
  const collection = new Collection({
    "id": "8yfxomgkmv5k30e",
    "created": "2023-02-26 04:45:47.503Z",
    "updated": "2023-02-26 04:45:47.503Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3ooxlt3u",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rbxntyw7",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8yfxomgkmv5k30e");

  return dao.deleteCollection(collection);
})
