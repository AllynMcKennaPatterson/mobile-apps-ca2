import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mySqlDb2.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL);',
        [], // An array of data that can be inserted into the sql query, not used here
        () => {
          resolve();
        },
        (xx, err) => { // xx is the transaction id which we don't use
          reject(err);
          console.log(err)
        }
      );
    });
  });
  return promise;
};

// export const insertItem = (newItem) => {
//     const promise = new Promise((resolve, reject) => {
//         db.transaction(tx => {
//           tx.executeSql(
//             `INSERT INTO items (title) VALUES (?);`,
//             [newItem.title],  // An array of data that can be inserted into the swl query
//             (xx, result) => { // xx is the transaction id which we don't use
//               resolve(result);
//             },
//             (xx, err) => {
//               reject(err);
//             }
//           );
//         });
//       });
//       return promise;
// };

export const insertItem = (newItem) => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
          tx.executeSql(
              `INSERT INTO items (title, imageUri) VALUES (?,?);`,
              [newItem.title, "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"],  // An array of data that can be inserted into the SQL query
              (xx, result) => { // xx is the transaction id which we don't use
                  resolve(result);
              },
              (xx, err) => {
                  reject(err);
              }
          );
      });
  });
  return promise;
};

export const fetchItems = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM items', // could add WHERE etc. 
            [],  // An array of data that can be inserted into the sql query, not used here
            (xx, result) => {
              resolve(result.rows._array);
            },
            (xx, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
}; 

export const deleteItem = (itemId) => {
  console.log("Deleting item " + itemId + " from db")
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM items WHERE (id) = ${itemId}`,
        (xx, result) => { // xx is the transaction id which we don't use
          resolve(result);
        },
        (xx, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}