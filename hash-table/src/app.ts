import { HashTable } from './hash-table';

const hashTable: HashTable<string> = new HashTable<string>(10);

console.log(hashTable.add('schidley0@list-manage.com', '87.248.59.20'));
console.log(hashTable.add('agalvan1@fastcompany.com', '238.24.222.160'));
console.log(hashTable.add('lcoulling2@addthis.com', '79.161.89.74'));
console.log(hashTable.add('fgheerhaert3@people.com.cn', '38.210.74.109'));
console.log(hashTable.add('bkless4@examiner.com', '108.199.136.28'));
console.log(hashTable.add('dsofe5@nps.gov', '47.126.209.105'));
console.log(hashTable.add('gplane6@pinterest.com', '247.168.75.194'));
console.log(hashTable.add('agwinnell7@ameblo.jp', '128.207.164.146'));
console.log(hashTable.add('enajara8@nature.com', '191.102.211.171'));
console.log(hashTable.add('ddurbann9@unesco.org', '8.29.170.156'));
console.log(hashTable.add('aclemptona@hp.com', '245.97.121.51'));
console.log(hashTable.add('mcathieb@techcrunch.com', '107.156.116.97'));
console.log(hashTable.add('geselc@homestead.com', '169.22.74.245'));

console.log(hashTable.get('schidley0@list-manage.com'));
console.log(hashTable.get('enajara8@nature.com'));
console.log(hashTable.get('ddurbann9@unesco.org'));
